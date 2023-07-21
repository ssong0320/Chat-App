import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            return;
          }
      
        try {
            const output = await axios.post('http://localhost:5001/login', { username, password });
              if (output.data === 'Login sucessful') {
                setUsername('');
                setPassword('');
                navigate('/home');
              } else {
                setUsername('');
                setPassword('');
              }
        } catch(error) {
            console.error('Error while loggin in:', error);
            setUsername('');
            setPassword('');
        }
    }


    return (
      <div style={{
        backgroundImage: "url('https://ik.imagekit.io/ably/ghost/prod/2021/11/fully-scalable-chat-app-pt1-1.png?tr=w-1728,q-50')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
        <div className="flex justify-center items-center h-screen">
          <div className="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 className="text-3xl block text-center font-semibold">Login</h1>
            <div className="mt-3">
              <label className="block text-base mb-2">Username</label>
              <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" 
                placeholder="Enter Username..."
              />
            </div>
            <div className="mt-3">
              <label className="block text-base mb-2">Password</label>
              <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" 
                placeholder="Enter Password..."
              />
            </div>
            <div className="mt-5">
              <button onClick={handleLogin} className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">Login</button>
            </div>
            <div className="mt-5 flex justify-center">
              <p><Link to="/register">Register</Link></p>
            </div>
          </div>
        </div>
        </div>
      );
};
export default Login