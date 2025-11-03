import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import HotelDetail from './pages/HotelDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './components/Signup/Signup';
import MyBookings from './components/MyBookings';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotel/:id" element={<HotelDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/my-bookings" element={<MyBookings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
