import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="VillageStay Logo" className="h-10 w-10" />
                    <h1 className="text-2xl font-extrabold text-green-700">VillageStay</h1>
                </div>
                <ul className="flex space-x-6 font-semibold items-center">
                    <li><Link to="/" className="text-green-700 hover:text-green-900">Home</Link></li>
                    <li><Link to="/about-us" className="text-green-700 hover:text-green-900">About Us</Link></li>
                    <li><Link to="/login" className="text-green-700 hover:text-green-900">Login</Link></li>
                    <li><Link to="/signup" className="text-green-700 hover:text-green-900">Sign Up</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
