import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Star, MapPin, Wifi, Car, Coffee, Dumbbell, Check, Calendar, Users } from 'lucide-react';

const HotelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [loading, setLoading] = useState(false);

  //  Dummy hotel data (UI ke liye)
  const hotel = {
    id: Number(id) || 1,
    name: 'Grand Plaza Hotel',
    location: 'Paris, France',
    address: '123 Champs-Élysées, 75008 Paris, France',
    rating: 4.8,
    reviewCount: 1234,
    price: 189,
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop'
    ],
    description:
      'Experience luxury at its finest in the heart of Paris. Our Grand Plaza Hotel offers breathtaking views of the city, world-class amenities, and exceptional service that will make your stay unforgettable.',
    amenities: [
      { name: 'Free WiFi', icon: <Wifi className="h-5 w-5" /> },
      { name: 'Free Parking', icon: <Car className="h-5 w-5" /> },
      { name: 'Restaurant', icon: <Coffee className="h-5 w-5" /> },
      { name: 'Fitness Center', icon: <Dumbbell className="h-5 w-5" /> },
    ],
    features: [
      'Air Conditioning',
      'Room Service',
      'Concierge',
      'Laundry Service',
      'Mini Bar',
      'Safe',
      'Flat-screen TV',
      'Coffee Maker'
    ],
    reviews: [
      {
        id: 1,
        name: 'John Smith',
        rating: 5,
        date: '2 days ago',
        comment:
          'Absolutely stunning hotel! The room was spacious and clean. The staff was incredibly friendly and helpful. Would definitely stay here again!',
        avatar: 'https://i.pravatar.cc/150?img=11'
      },
      {
        id: 2,
        name: 'Maria Garcia',
        rating: 5,
        date: '1 week ago',
        comment:
          'Perfect location in Paris. Walking distance to many attractions. The breakfast buffet was amazing with a great variety of options.',
        avatar: 'https://i.pravatar.cc/150?img=12'
      },
      {
        id: 3,
        name: 'David Lee',
        rating: 4,
        date: '2 weeks ago',
        comment:
          'Great hotel overall. The view from our room was spectacular. Only minor issue was the wifi speed, but everything else was perfect.',
        avatar: 'https://i.pravatar.cc/150?img=13'
      }
    ]
  };

  //  Booking Function (Fixed + Working)
  const handleBooking = async () => {
    if (!checkIn || !checkOut) {
      alert('Please select both check-in and check-out dates.');
      return;
    }

    const userData = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!userData) {
      alert('Please sign in to book a hotel.');
      return;
    }

    const newBooking = {
      userId: userData.id || Math.floor(Math.random() * 10000),
      userName: userData.name || 'Guest User',
      hotelId: hotel.id,
      hotelName: hotel.name,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      guests: guests,
      totalPrice: hotel.price * guests,
      bookingDate: new Date().toISOString().split('T')[0]
    };

    try {
      setLoading(true);
      const res = await axios.post('http://localhost:3000/bookings', newBooking);
      if (res.status === 201) {
        alert(' Booking successful!');
        navigate('/my-bookings');
      }
    } catch (error) {
      console.error('❌ Booking failed:', error.message);
      alert('Something went wrong while booking. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Image Gallery */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3">
              <img
                src={hotel.images[selectedImage]}
                alt={hotel.name}
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {hotel.images.slice(0, 4).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`View ${index + 1}`}
                  onClick={() => setSelectedImage(index)}
                  className={`w-full h-24 md:h-[115px] object-cover rounded-lg cursor-pointer transition ${
                    selectedImage === index
                      ? 'ring-4 ring-blue-600'
                      : 'hover:opacity-75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {hotel.name}
                  </h1>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{hotel.address}</span>
                  </div>
                </div>
                <div className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg">
                  <Star className="h-5 w-5 mr-1 fill-current" />
                  <span className="text-xl font-bold">{hotel.rating}</span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                Based on {hotel.reviewCount} verified guest reviews
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About This Hotel
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {hotel.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {hotel.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="text-blue-600">{amenity.icon}</div>
                    <span className="text-sm font-medium text-gray-700">
                      {amenity.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {hotel.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Guest Reviews
              </h2>
              <div className="space-y-6">
                {hotel.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-gray-200 pb-6 last:border-0"
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-gray-900">
                            {review.name}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">
                    ${hotel.price}
                  </span>
                  <span className="text-gray-600 ml-2">/ night</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {/* Check-in */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Check-in
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Check-out */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Check-out
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                onClick={handleBooking}
                disabled={loading}
                className={`w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-[1.02] mb-4 ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Booking...' : 'Book Now'}
              </button>

              <div className="text-center text-sm text-gray-600">
                <p className="mb-2">You won't be charged yet</p>
                <div className="flex items-center justify-center space-x-1">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Free cancellation before 48 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
