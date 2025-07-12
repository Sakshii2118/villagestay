import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const EditBooking = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    startDate: '',
    endDate: '',
    stay: '',
    activities: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => {
        const newActivities = checked
          ? [...prev.activities, value]
          : prev.activities.filter((act) => act !== value);
        return { ...prev, activities: newActivities };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const [tourists, setTourists] = useState(['']);

  const handleTouristChange = (index, value) => {
    const updated = [...tourists];
    updated[index] = value;
    setTourists(updated);
  };

  const addTourist = () => {
    setTourists([...tourists, '']);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      ...formData,
      activities: formData.activities,
    });
    navigate("/confirmation")
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen"><Navbar/>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold cursor-pointer text-blue-800 mb-6">Confirm Your Booking</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
       <div>
            <label className="block font-semibold mb-2 text-green-700">Tourist Names</label>
            {tourists.map((name, idx) => (
              <input
                key={idx}
                type="text"
                value={name}
                onChange={e => handleTouristChange(idx, e.target.value)}
                placeholder={`Tourist ${idx + 1} Name`}
                className="w-full border border-gray-300 rounded px-4 py-2 mb-2"
                required
              />
            ))}
            <button
              type="button"
              onClick={addTourist}
              className="bg-green-600 cursor-pointer text-white px-4 py-1 rounded-full shadow hover:bg-green-700 transition-all duration-300 font-semibold mt-2"
            >
              Add Tourist
            </button>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-semibold text-gray-700">Start Date</label>
              <input
                type="date"
                name="startDate"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold text-gray-700">End Date</label>
              <input
                type="date"
                name="endDate"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Choice of Stay</label>
            <select
              name="stay"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
            >
              <option value="">Select Stay</option>
              <option value="Himalayan Guest House">Himalayan Guest House</option>
              <option value="Nature Valley Lodge">Nature Valley Lodge</option>
              <option value="Budget Inn">Budget Inn</option>
              <option value="Premium Resort">Premium Resort</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Tourist Attractions / Activities</label>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {[
                'River Rafting',
                'Temple Tour',
                'Trekking',
                'Bonfire',
                'Ziplining',
                'Cultural Show',
              ].map((activity) => (
                <label key={activity}>
                  <input
                    type="checkbox"
                    name="activities"
                    value={activity}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {activity}
                </label>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBooking;