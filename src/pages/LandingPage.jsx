import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/bg.jpg';
import himalayanImage from '../assets/himalayan.webp';
import keralaImage from '../assets/kerala.jpg';
import rajasthanImage from '../assets/rajasthan.webp';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <div className="relative bg-green-50 text-gray-800 font-[Poppins] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-[90vh] w-full flex items-center justify-center text-white overflow-hidden">
        <img
          src={heroImage}
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        <div className="relative z-20 max-w-2xl text-center px-4">
          <h2 className="text-5xl font-extrabold leading-tight mb-4 drop-shadow-md">
            Escape to Authentic Rural Bliss 🌿
          </h2>
          <p className="text-xl font-medium drop-shadow-sm max-w-2xl">
            Discover India’s untouched villages & experience soulful stays with the warmth of local hospitality.
          </p>
          <div className="mt-8">
            <Link
              to="/login"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-green-700 mb-4">About VillageStay</h3>
          <p className="text-lg text-gray-700">
            VillageStay is a platform that connects curious travelers with rural hosts, offering a blend of cultural immersion and sustainable tourism. We aim to preserve traditions while empowering local communities through ethical travel experiences.
          </p>
        </div>
      </section>

      {/* Fullscreen Tour Feature Sections */}
      {[
        {
          img: himalayanImage,
          title: "Himalayan Hamlet",
          desc: "Hidden in the high altitudes, Himalayan Hamlet is a tranquil village untouched by modern chaos. Here, you’ll find pristine meadows, pine forests, and crisp mountain air that rejuvenates the soul. The villagers live simply and joyfully, welcoming you with herbal teas and soulful stories by the fire. Explore centuries-old monasteries, witness starlit skies, and reconnect with yourself amid snow-kissed peaks. Whether it’s a spiritual retreat or a nature escape, this spot offers a deep breath of peace and purity.",
          link: "/tours/himalaya"
        },
        {
          img: keralaImage,
          title: "Kerala Backwater Bliss",
          desc: "Float through the hidden water veins of Kerala in a houseboat surrounded by coconut palms and water lilies. This secluded backwater village is rich in ayurvedic wisdom, Kathakali folklore, and artisanal spice farms. Every morning hums with temple chants and the fragrance of banana leaf breakfasts. Villagers here live in rhythm with nature, practicing sustainable lifestyles passed down generations. Perfect for cultural immersion, romantic hideaways, or a digital detox.",
          link: "/tours/kerala"
        },
        {
          img: rajasthanImage,
          title: "Rajasthan Heritage Stay",
          desc: "Amid the golden sands lies a Rajasthani village where tradition reigns timeless. Here, women in mirror-work ghagras sing folk tales, and children race camels past age-old havelis. The air smells of desert roses and masala chai. You can sleep in mud-clay huts beneath embroidered canopies and dine on millet roti beside bonfires. A hidden jewel that proudly preserves its royal roots, this desert stay offers you a glimpse into regal simplicity and raw desert romance.",
          link: "/tours/rajasthan"
        }
      ].map((village, idx) => (
        <section
          key={idx}
          className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden mb-12"
        >
          <img
            src={village.img}
            alt={village.title}
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>

          <div className="relative z-20 max-w-3xl text-center px-4">
            <h3 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">{village.title}</h3>
            <p className="text-lg mb-6 drop-shadow-sm whitespace-pre-line">{village.desc}</p>
            <Link
              to={village.link}
              className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 shadow-md"
            >
              View Tour Package
            </Link>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="text-center py-6 bg-white mt-12 border-t text-sm text-gray-600">
        &copy; 2025 VillageStay. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
