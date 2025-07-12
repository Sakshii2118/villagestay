import React from 'react';
import { Link } from 'react-router-dom';
import aboutBg from '../assets/about-bg.jpg'; // Ensure this image is in src/assets
import Navbar from '../components/Navbar';

const AboutUs = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat font-serif text-black flex flex-col"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      
      <Navbar/>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl bg-white/80 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-green-800">About VillageStay</h1>

          <p className="text-lg mb-4 leading-relaxed">
            <strong>VillageStay</strong> is a unique travel platform that bridges the gap between modern tourism and rural India.
            We offer immersive and authentic experiences by connecting travelers with hidden villages that preserve India's rich cultural heritage.
          </p>

          <p className="text-lg mb-4 leading-relaxed">
            By empowering local communities, we not only promote eco-friendly travel but also create sustainable livelihoods through tourism.
            Our mission is to inspire discovery, preserve traditions, and let travelers experience the warmth of India’s heartlands.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-2 text-green-900">Developed By:</h2>
          <p className="text-lg mb-2">
            <li>Sakshi Gupta</li>
            <li>Asif Ahmad</li>
            <li>Krishna Bagla</li>
            <li>Ananya Giri</li></p>
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-900">Contact Info:</h2>
          <p className="text-lg">
            Lead Email: <a href="mailto:sakshig1817@gmail.com" className="underline text-green-800">sakshig1817@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
