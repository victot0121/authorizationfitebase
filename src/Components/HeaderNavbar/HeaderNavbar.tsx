import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';





const HeaderNavbar: React.FC = () => {

    const {  currentUser , signOut } = useAuth();
    const navigate = useNavigate();
    //const [error, setError] = useState<string | null>(null);


    const handleLogout = async () => {
        try {
            await signOut()
            navigate('/login')
        } catch (error) {
            console.error('Failed to log out', error);
        }
    }
    console.log(currentUser?.photoURL)

    return (
        <div className="navbar bg-base-100 ">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl font-sevillana text-secondColor-orangeDark">Vec Chat</a>
            </div>
            <div className="flex-none">
                <h3 className="mr-6 text-secondColor-orangeDark">welcome {currentUser?.email}</h3>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img
                                alt="User Avatar"
                                src={currentUser?.photoURL || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}
                            />
                         </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a onClick={handleLogout}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderNavbar