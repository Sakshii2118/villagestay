import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    alert('Signup successful!');
    console.log('User Info:', formData);
  };

  return (
    <div className="bg-green-100 min-h-screen">
      <Navbar />

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-10">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                onChange={handleChange}
                className="w-1/2 border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                onChange={handleChange}
                className="w-1/2 border border-gray-300 rounded px-4 py-2"
              />
            </div>

            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />

            <input
              type="password"
              name="password"
              placeholder="New Password"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />

            {error && <p className="text-red-600 text-sm text-center">{error}</p>}

            <button
              type="submit"
              className="w-full bg-green-600 cursor-pointer text-white py-2 rounded hover:bg-green-700"
            >
              Create Account
            </button>
          </form>
                <div className="mt-6 text-center">
            <span className="text-gray-600">Already have an account? </span>
            <a
              href="/login"
              className="text-green-700 cursor-pointer font-semibold hover:underline transition-colors duration-200"
            >
              Sign in here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
