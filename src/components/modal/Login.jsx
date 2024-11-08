import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; // Make sure to import the auth object from your firebase setup
import { useNavigate } from "react-router-dom";

const Login = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to manage error messages
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Sign in the user
      await signInWithEmailAndPassword(auth, email, password);
      // On successful login, navigate to the dashboard
      navigate("/dashboard");
      closeModal(); // Close the modal if login is successful
    } catch (err) {
      setError("Invalid email or password. Please try again."); // Set error if login fails
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-8 bg-white rounded shadow-md">
        <button
          onClick={closeModal}
          className="absolute text-gray-500 top-2 right-2 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="mb-4 text-xl font-bold">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">Email</label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Set email value
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">Password</label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Set password value
              required
            />
          </div>

          {/* Display error message */}
          {error && (
            <div className="text-red-500 text-sm mt-2">{error}</div>
          )}

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
            >
              Login
            </button>
          </div>

          <div className="mt-2 text-sm text-right">
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


