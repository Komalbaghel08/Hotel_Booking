import React, { useState } from "react";
import axios from "axios";

const Signin = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
      alert("Login successful!");
      onLoginSuccess();
    } else {
      setError("Invalid email or password.");
    }
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
          Sign In
        </h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
