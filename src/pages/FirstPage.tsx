import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';


const FirstPage: React.FC = () => {

    const navigate = useNavigate();
    const { currentUser } = useAuth();

    const handleNavigateToHome = () => {

        if (currentUser) {
            navigate("/home")
        } else {
            navigate('/login')
        }
    }

    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="text-4xl font-bold text-secondColor-orangeDark">Welcome to the First Page</h1>
                    <p className="py-8 w-full"> This is the first page you see when you visit the site for the first time. </p>
                    <button className="btn btn-primary" onClick={handleNavigateToHome}>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FirstPage