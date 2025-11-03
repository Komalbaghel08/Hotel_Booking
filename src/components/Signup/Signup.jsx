import React, { useState } from "react";

const Signup = ({ onClose, onSignupSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, contact, password, confirmPassword } = formData;

    if (!name || !email || !contact || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Save user data to localStorage
    localStorage.setItem("userData", JSON.stringify(formData));

    alert("Signup successful! Redirecting to Sign In...");
    onSignupSuccess();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[90%] sm:w-[400px] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Create Account
        </h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4 text-sm">
          Already have an account?{" "}
          <button
            className="text-blue-600 hover:underline"
            onClick={onSignupSuccess}
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
