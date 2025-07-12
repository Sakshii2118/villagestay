import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    // Simulate login state with localStorage (for demo)
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('isLoggedIn') === 'true'
    );

    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', 'false');
        setIsLoggedIn(false);
        navigate("/");
    };

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50 transition-shadow duration-300">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img
                            src={logo}
                            alt="VillageStay Logo"
                            className="h-10 w-10 transform transition-transform duration-300 group-hover:scale-110"
                        />
                        <h1 className="text-2xl font-extrabold text-green-700 transition-colors duration-300 group-hover:text-green-900">
                            VillageStay
                        </h1>
                    </Link>
                </div>
                <ul className="flex space-x-6 font-semibold items-center">
                    <li>
                        <Link
                            to="/about-us"
                            className="text-green-700 hover:text-green-900 transition-colors duration-300"
                        >
                            About Us
                        </Link>
                    </li>
                    {!isLoggedIn ? (
                        <li>
                            <Link
                                to="/login"
                                className="text-white cursor-pointer bg-green-700 px-5 py-2 rounded-full shadow-md hover:bg-green-900 hover:text-white transition-all duration-300"
                            >
                                Sign In
                            </Link>
                        </li>
                    ) : (
                        <>
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="text-white cursor-pointer bg-red-600 px-5 py-2 rounded-full shadow-md hover:bg-red-800 transition-all duration-300"
                                >
                                    Logout
                                </button>
                            </li>
                            <li>
                                <Link to="/profile" className="flex items-center">
                                    <FaUserCircle className="text-green-700 text-3xl hover:text-green-900 transition-colors duration-300" />
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;