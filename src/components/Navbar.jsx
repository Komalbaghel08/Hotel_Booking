import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Hotel, LogOut } from "lucide-react";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <Hotel className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LuxStay
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Home
              </Link>
              <Link
                to="/hotels"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Hotels
              </Link>
              <Link
                to="/my-bookings"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                My Bookings
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Contact
              </Link>

              {/* Auth Buttons */}
              <div className="flex space-x-3">
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-purple-600 transition transform hover:scale-105"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => setShowSignin(true)}
                      className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition transform hover:scale-105"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => setShowSignup(true)}
                      className="border border-blue-600 text-blue-600 px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white transition transform hover:scale-105"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600 transition"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="flex flex-col px-6 pb-4 space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/hotels"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Hotels
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <div className="flex flex-col gap-3 pt-2">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition w-full"
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setShowSignin(true);
                      setIsOpen(false);
                    }}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition w-full"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      setShowSignup(true);
                      setIsOpen(false);
                    }}
                    className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition w-full"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Modals */}
      {showSignup && (
        <Signup
          onClose={() => setShowSignup(false)}
          onSignupSuccess={() => {
            setShowSignup(false);
            setShowSignin(true);
          }}
        />
      )}

      {showSignin && (
        <Signin
          onClose={() => setShowSignin(false)}
          onLoginSuccess={() => {
            setShowSignin(false);
            setIsLoggedIn(true);
          }}
        />
      )}
    </>
  );
};

export default Navbar;
