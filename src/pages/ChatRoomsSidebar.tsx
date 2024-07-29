// ChatRoomsSidebar.tsx
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { collection, onSnapshot, addDoc, query, orderBy } from 'firebase/firestore';

interface ChatRoom {
  id: string;
  name: string;
}

const ChatRoomsSidebar: React.FC<{ onSelectRoom: (room: ChatRoom) => void }> = ({ onSelectRoom }) => {
  const [rooms, setRooms] = useState<ChatRoom[]>([]);
  const [newRoomName, setNewRoomName] = useState('');

  useEffect(() => {
    const q = query(collection(firestore, 'rooms'), orderBy('name', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const roomsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ChatRoom[];
      setRooms(roomsData);
    });

    return unsubscribe;
  }, []);

  const handleCreateRoom = async () => {
    if (newRoomName.trim()) {
      await addDoc(collection(firestore, 'rooms'), { name: newRoomName });
      setNewRoomName('');
    }
  };

  return (
    <div className="w-1/4 p-4 border-r">
      <h2 className="text-2xl mb-4">Chat Rooms</h2>
      <ul>
        {rooms.map(room => (
          <li key={room.id} className="mb-2">
            <button onClick={() => onSelectRoom(room)} className="btn btn-ghost w-full text-left">
              {room.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="text"
          value={newRoomName}
          onChange={(e) => setNewRoomName(e.target.value)}
          placeholder="New room name"
          className="input input-bordered w-full"
        />
        <button onClick={handleCreateRoom} className="btn btn-primary w-full mt-2">Create Room</button>
      </div>
    </div>
  );
};

export default ChatRoomsSidebar;
