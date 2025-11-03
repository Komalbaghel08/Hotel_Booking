import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, Edit, Check, X } from "lucide-react";

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    checkInDate: "",
    checkOutDate: "",
    guests: "",
    totalPrice: ""
  });

  // Fetch all bookings
  useEffect(() => {
    axios.get("http://localhost:3000/bookings")
      .then(res => setBookings(res.data))
      .catch(err => console.error("Error fetching bookings:", err));
  }, []);

  // Delete booking
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/bookings/${id}`);
    setBookings(bookings.filter(b => b.id !== id));
  };

  // Edit booking
  const handleEdit = (booking) => {
    setEditingId(booking.id);
    setUpdatedData({
      checkInDate: booking.checkInDate,
      checkOutDate: booking.checkOutDate,
      guests: booking.guests,
      totalPrice: booking.totalPrice
    });
  };

  // Update booking
  const handleUpdate = async (id) => {
    await axios.put(`http://localhost:3000/bookings/${id}`, updatedData);
    setBookings(bookings.map(b => (b.id === id ? { ...b, ...updatedData } : b)));
    setEditingId(null);
  };

  // Cancel edit
  const handleCancel = () => {
    setEditingId(null);
    setUpdatedData({ checkInDate: "", checkOutDate: "", guests: "", totalPrice: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">My Bookings</h1>
          <p className="text-lg">Manage all your hotel reservations easily</p>
        </div>
      </div>

      {/* Bookings Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {bookings.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No bookings yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
              >
                {editingId === booking.id ? (
                  <>
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Editing Booking #{booking.id}</h3>
                    <div className="space-y-3">
                      <input
                        type="date"
                        value={updatedData.checkInDate}
                        onChange={(e) => setUpdatedData({ ...updatedData, checkInDate: e.target.value })}
                        className="w-full border p-2 rounded"
                      />
                      <input
                        type="date"
                        value={updatedData.checkOutDate}
                        onChange={(e) => setUpdatedData({ ...updatedData, checkOutDate: e.target.value })}
                        className="w-full border p-2 rounded"
                      />
                      <input
                        type="number"
                        value={updatedData.guests}
                        onChange={(e) => setUpdatedData({ ...updatedData, guests: e.target.value })}
                        className="w-full border p-2 rounded"
                        placeholder="Guests"
                      />
                      <input
                        type="number"
                        value={updatedData.totalPrice}
                        onChange={(e) => setUpdatedData({ ...updatedData, totalPrice: e.target.value })}
                        className="w-full border p-2 rounded"
                        placeholder="Total Price"
                      />
                      <div className="flex justify-between mt-4">
                        <button
                          onClick={() => handleUpdate(booking.id)}
                          className="bg-green-600 text-white px-4 py-2 rounded flex items-center space-x-1 hover:bg-green-700"
                        >
                          <Check className="h-4 w-4" /> <span>Save</span>
                        </button>
                        <button
                          onClick={handleCancel}
                          className="bg-gray-300 text-gray-800 px-4 py-2 rounded flex items-center space-x-1 hover:bg-gray-400"
                        >
                          <X className="h-4 w-4" /> <span>Cancel</span>
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Booking #{booking.id}</h3>
                    <p className="text-gray-600">Check-In: {booking.checkInDate}</p>
                    <p className="text-gray-600">Check-Out: {booking.checkOutDate}</p>
                    <p className="text-gray-600">Guests: {booking.guests}</p>
                    <p className="text-gray-800 font-semibold mt-2">Total: ${booking.totalPrice}</p>
                    <div className="flex justify-between mt-4">
                      <button
                        onClick={() => handleEdit(booking)}
                        className="bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-1 hover:bg-blue-700"
                      >
                        <Edit className="h-4 w-4" /> <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDelete(booking.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded flex items-center space-x-1 hover:bg-red-700"
                      >
                        <Trash2 className="h-4 w-4" /> <span>Delete</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBooking;
