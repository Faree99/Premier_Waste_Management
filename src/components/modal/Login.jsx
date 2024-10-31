import React from 'react';
import { Link } from 'react-router-dom';


const Login = ({ closeModal }) => {
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

        <form className="space-y-3">
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">Password</label>
            <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********" required />
          </div>

         <div>
          <Link
            to="/dashboard"
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Login
          </Link>
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

