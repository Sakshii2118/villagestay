import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const mockUser = {
  username: 'testuser',
  password: 'password123',
};

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      credentials.username === mockUser.username &&
      credentials.password === mockUser.password
    ) {
      setError('');
       localStorage.setItem('isLoggedIn', 'true'); // Set login state
      navigate('/villages');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="bg-green-100 min-h-screen">
      <Navbar />

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-10">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center cursor-pointer">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />

            <div className="text-right">
              <a href="#" className="text-sm text-green-600 hover:underline">
                Forgot password?
              </a>
            </div>

            {error && <p className="text-red-600 text-sm text-center">{error}</p>}

            <button
              type="submit"
              className="w-full bg-green-600 cursor-pointer text-white py-2 rounded hover:bg-green-700"
            >
              Log In
            </button>
          </form>
              <div className="mt-6 text-center">
            <span className="text-gray-600">Don't have an account? </span>
            <a
              href="/signup"
              className="text-green-700 font-semibold hover:underline transition-colors duration-200"
            >
              Sign up here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
