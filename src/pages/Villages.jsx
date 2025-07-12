import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const villages = [
  {
    name: 'Rampur',
    state: 'Uttar Pradesh',
    description: 'A vibrant village known for its lush fields and traditional crafts.',
  },
  {
    name: 'Chettinad',
    state: 'Tamil Nadu',
    description: 'Famous for its unique architecture and delicious cuisine.',
  },
  {
    name: 'Majuli',
    state: 'Assam',
    description: 'The world’s largest river island, rich in culture and natural beauty.',
  },
  {
    name: 'Malana',
    state: 'Himachal Pradesh',
    description: 'A scenic village in the Himalayas, known for its ancient customs.',
  },
  {
    name: 'Pochampally',
    state: 'Telangana',
    description: 'Renowned for its handwoven Ikat sarees and serene surroundings.',
  },
];

const VillageListPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-green-50 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Explore Indian Villages</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {villages.map((village, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">{village.name}</h3>
                <p className="text-green-600 font-medium mb-1">{village.state}</p>
                <p className="text-gray-700 mb-4">{village.description}</p>
              </div>
              <button
                onClick={() => navigate('/booking')}
                className="mt-4 bg-green-600 cursor-pointer text-white px-5 py-2 rounded-full shadow hover:bg-green-700 transition-all duration-300 font-semibold"
              >
                Book
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VillageListPage;