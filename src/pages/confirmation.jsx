import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const BookingConfirmation = () => {
    
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    destination: 'Rishikesh',
    startDate: '2025-07-22',
    endDate: '2025-07-27',
    stay: 'Himalayan Guest House',
    activities: 'River Rafting, Temple Tour',
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData({
      name: params.get('name') || 'John Doe',
      email: params.get('email') || 'john@example.com',
      destination: params.get('destination') || 'Rishikesh',
      startDate: params.get('startDate') || '2025-07-22',
      endDate: params.get('endDate') || '2025-07-27',
      stay: params.get('stay') || 'Himalayan Guest House',
      activities: params.getAll('activities').join(', ') || 'River Rafting, Temple Tour',
    });
  }, []);

  const initiatePayment = () => {
    const options = {
      key: 'RAZORPAY_KEY_HERE',
      amount: 500000,
      currency: 'INR',
      name: 'Travel Buddy',
      description: 'Travel Package Payment',
      handler: function (response) {
        alert('Payment Successful! ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: '9876543210',
      },
      theme: {
        color: '#3b82f6',
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen py-10"><Navbar/>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Confirm Your Booking</h2>
        <div className="space-y-3 text-gray-700">
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Destination:</strong> {formData.destination}</p>
          <p><strong>Dates:</strong> {formData.startDate} to {formData.endDate}</p>
          <p><strong>Stay:</strong> {formData.stay}</p>
          <p><strong>Activities:</strong> {formData.activities}</p>
          <p><strong>Guide Included:</strong> Yes</p>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
          <button
            type="button"
            onClick={() => window.location.href = '/edit-booking'}
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Edit Booking
          </button>
          <button
            onClick={initiatePayment}
            className="px-6 py-2 cursor-pointer bg-green-600 text-white rounded hover:bg-green-700"
          >
            Confirm & Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;