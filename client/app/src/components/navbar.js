import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const Navigate = useNavigate();

    const handelNavigate = () => {
        Navigate('/')
    }
    return (
        <div className="bg-gray-800">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-white text-xl font-semibold">Chat app</a>
              </div>
              <div className="flex items-center">
                <button onClick={handelNavigate} className="text-white text-base font-medium mr-4 px-4 py-2 rounded hover:bg-gray-600">Logout</button>
              </div>
            </nav>
          </div>
        </div>
      );
}

export default Navbar;