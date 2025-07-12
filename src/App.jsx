import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage'; // ✅ NEWLY ADDED
import AboutUs from './pages/AboutUs';
import EditBooking from './pages/Booking';
import VillageListPage from './pages/Villages';
import BookingConfirmation from './pages/confirmation';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/about-us" element={<AboutUs />} />{/* ✅ NEW ROUTE */}
        <Route path="/booking" element ={<EditBooking/>} />
        <Route path="/villages" element = {<VillageListPage/>}/>
        <Route path="/confirmation" element = {<BookingConfirmation/>}/>
      </Routes>
    </Router>
  );
};

export default App;
