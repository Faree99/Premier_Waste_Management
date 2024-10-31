import React, { useState } from 'react';
import Login from './Login';

const Register = ({ closeModal, onLogin }) => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? (
        <Login onLogin={onLogin} closeModal={() => setShowLogin(false)} />
      ) : (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-md p-8 bg-white rounded shadow-md">
            <button
              onClick={closeModal}
              className="absolute text-gray-500 top-2 right-2 hover:text-gray-700"
            >
              ✕
            </button>

            <h2 className="mb-4 text-xl font-bold">Register</h2>

            <form id="registrationForm" className="space-y-3">
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">Username</label>
                <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">Email</label>
                <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">Password</label>
                <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="address">Address</label>
                <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Address" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="contact">Contact</label>
                <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="contact" type="tel" placeholder="Number" required />
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">
                Submit
              </button>

              <button type="button" onClick={() => setShowLogin(true)} className="text-black">Already have an account? <span className="text-blue-500">Login</span> </button>

              {/* Already have an account link */}
              {/* <div className="mt-2 text-sm text-center">
                <span className="mb-2 font-bold text-gray-700 text-m ">Already have an account? </span>
                <button
                  type="button"
                  onClick={handleShowLogin}
                  className="text-base text-blue-500 hover:underline"
                >
                  Login
                </button>
              </div> */}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
