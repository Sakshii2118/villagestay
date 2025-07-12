import React, { useState } from 'react';
import React from 'react';
import Navbar from '../components/Navbar';

const EditBooking = () => {

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      ...formData,
      activities: formData.activities,
    });
    window.location.href = `/booking-confirmation?${params.toString()}`;
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen py-10"><Navbar/>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Edit Your Booking</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
            />
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

          <div>
            <label className="block font-semibold text-gray-700">Place You Want to Visit</label>
            <input
              type="text"
              name="destination"
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
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
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