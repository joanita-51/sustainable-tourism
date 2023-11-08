import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here, e.g., sending data to an API
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#f8f6f6]">
        
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <p className="text-3xl font-bold text-center pt-12 mb-3">Login</p>
        <p className="bg-[#EB1D36] h-[2px] w-20 mx-auto mb-12"></p>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-[#459c6e] hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <Link to="/dashboard">Login</Link>
            
          </button>
          <span className='ms-5'>Don't have an account? <Link className='text-[#EB1D36]' to="/signup">Signup</Link></span>
        </div>
      </form>
    </div>
  );
}

export default Login;
