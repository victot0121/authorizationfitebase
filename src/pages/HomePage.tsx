// HomePage.tsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { firestore } from '../firebase';
import HeaderNavbar from "../Components/HeaderNavbar/HeaderNavbar";
import { collection, addDoc, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import ChatRoomsSidebar from './ChatRoomsSidebar';

const HomePage: React.FC = () => {
    const { currentUser } = useAuth();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Array<{ id: string, content: string, user: string }>>([]);
    const [selectedRoom, setSelectedRoom] = useState<{ id: string, name: string } | null>(null);

    useEffect(() => {
        if (!selectedRoom) return;

        const q = query(collection(firestore, `rooms/${selectedRoom.id}/messages`), orderBy('timestamp', 'desc'));
        const unsubscribe = onSnapshot(q, snapshot => {
            const newMessages = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Array<{ id: string, content: string, user: string }>;
            setMessages(newMessages);
        });

        return unsubscribe;
    }, [selectedRoom]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim() && selectedRoom) {
            await addDoc(collection(firestore, `rooms/${selectedRoom.id}/messages`), {
                content: message,
                user: currentUser?.email,
                timestamp: serverTimestamp()
            });
            setMessage('');
        }
    };

    return (
        <div className="flex min-h-screen">
            <div className="flex flex-1 flex-col">
                <HeaderNavbar />
                <ChatRoomsSidebar onSelectRoom={setSelectedRoom} />
                <div className="mt-20 flex-1 overflow-y-auto p-4">
                    {selectedRoom ? (
                        messages.map((msg) => (
                            <div key={msg.id} className={`chat ${msg.user === currentUser?.email ? 'chat-end' : 'chat-start'}`}>
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="User Avatar"
                                            src={currentUser?.photoURL || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}
                                        />
                                    </div>
                                </div>
                                <div className="chat-header">
                                    {msg.user}
                                    <time className="text-xs opacity-50">{new Date(msg.timestamp?.toDate()).toLocaleTimeString()}</time>
                                </div>
                                <div className="chat-bubble">{msg.content}</div>
                                <div className="chat-footer opacity-50">Delivered</div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">Select a chat room to start messaging</p>
                    )}
                </div>

                {selectedRoom && (
                    <form onSubmit={handleSubmit} className="flex w-full justify-center absolute bottom-0 mb-10">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type here"
                            className="input input-bordered input-warning w-full max-w-2xl"
                        />
                        <button type="submit" className="btn btn-primary ml-2">Send</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default HomePage;
