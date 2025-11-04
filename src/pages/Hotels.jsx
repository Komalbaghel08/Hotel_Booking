import { useState } from 'react';
import { Star, MapPin, Wifi, Car, Coffee, Dumbbell, Search, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hotels = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedRating, setSelectedRating] = useState(0);

  const hotels = [
    {
      id: 1,
      name: 'Grand Plaza Hotel',
      location: 'Paris, France',
      rating: 4.8,
      reviews: 1234,
      price: 189,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop',
      amenities: ['Wifi', 'Parking', 'Restaurant', 'Gym'],
      description: 'Luxury hotel in the heart of Paris with stunning city views'
    },
    {
      id: 2,
      name: 'Sakura Luxury Suites',
      location: 'Tokyo, Japan',
      rating: 4.9,
      reviews: 892,
      price: 210,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
      amenities: ['Wifi', 'Spa', 'Restaurant', 'Pool'],
      description: 'Modern Japanese hospitality with traditional elegance'
    },
    {
      id: 3,
      name: 'Desert Oasis Resort',
      location: 'Dubai, UAE',
      rating: 4.7,
      reviews: 2156,
      price: 299,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
      amenities: ['Wifi', 'Pool', 'Spa', 'Beach Access'],
      description: '5-star beachfront resort with world-class amenities'
    },
    {
      id: 4,
      name: 'Manhattan Tower',
      location: 'New York, USA',
      rating: 4.6,
      reviews: 1678,
      price: 245,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
      amenities: ['Wifi', 'Gym', 'Restaurant', 'Bar'],
      description: 'Iconic skyline views from the heart of Manhattan'
    },
    {
      id: 5,
      name: 'Royal Palace Hotel',
      location: 'London, UK',
      rating: 4.9,
      reviews: 3421,
      price: 275,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      amenities: ['Wifi', 'Spa', 'Restaurant', 'Concierge'],
      description: 'Historic luxury hotel near Buckingham Palace'
    },
    {
      id: 6,
      name: 'Santorini Blue Resort',
      location: 'Santorini, Greece',
      rating: 5.0,
      reviews: 987,
      price: 320,
      image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&h=600&fit=crop',
      amenities: ['Wifi', 'Pool', 'Sea View', 'Breakfast'],
      description: 'Breathtaking caldera views in whitewashed luxury'
    }
  ];

  const amenityIcons = {
    'Wifi': <Wifi className="h-4 w-4" />,
    'Parking': <Car className="h-4 w-4" />,
    'Restaurant': <Coffee className="h-4 w-4" />,
    'Gym': <Dumbbell className="h-4 w-4" />,
    'Spa': <Star className="h-4 w-4" />,
    'Pool': <Star className="h-4 w-4" />,
    'Beach Access': <Star className="h-4 w-4" />,
    'Bar': <Coffee className="h-4 w-4" />,
    'Concierge': <Star className="h-4 w-4" />,
    'Sea View': <Star className="h-4 w-4" />,
    'Breakfast': <Coffee className="h-4 w-4" />
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Find Your Perfect Hotel</h1>
          <p className="text-gray-600">Showing {hotels.length} available hotels</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                <SlidersHorizontal className="h-5 w-5 text-gray-600" />
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Price Range
                </label>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">${priceRange[0]}</span>
                  <span className="text-sm text-gray-600">${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full accent-blue-600"
                />
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Minimum Rating
                </label>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setSelectedRating(rating)}
                      className={`flex items-center w-full p-2 rounded-lg transition ${
                        selectedRating === rating ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'
                      } border`}
                    >
                      {[...Array(rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">& up</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Amenities
                </label>
                <div className="space-y-2">
                  {['Wifi', 'Pool', 'Spa', 'Gym', 'Restaurant', 'Parking'].map((amenity) => (
                    <label key={amenity} className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="ml-3 text-sm text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hotel Listings */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {hotels.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Image */}
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg">
                        <span className="text-sm font-semibold text-gray-900">
                          ₹{hotel.price}/night
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="md:col-span-2 p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {hotel.name}
                          </h3>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{hotel.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-lg">
                          <Star className="h-4 w-4 mr-1 fill-current" />
                          <span className="font-semibold">{hotel.rating}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{hotel.description}</p>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hotel.amenities.map((amenity, index) => (
                          <span
                            key={index}
                            className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                          >
                            {amenityIcons[amenity]}
                            <span>{amenity}</span>
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="text-sm text-gray-600">
                          <Star className="h-4 w-4 inline text-yellow-400 fill-current" />
                          <span className="ml-1">{hotel.reviews} reviews</span>
                        </div>
                        <Link
                          to={`/hotel/${hotel.id}`}
                          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
