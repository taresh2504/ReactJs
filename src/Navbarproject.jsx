import React, { useState } from "react";
import { Menu, Search } from "lucide-react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  return (
    <>
      <nav className="w-full bg-gray-900 text-white px-4 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-4">
            <img
              src="https://in.bmscdn.com/webin/common/icons/logo.svg"
              alt="BookMyShow"
              className="w-32"
            />

            {/* Search */}
            <div className="hidden md:flex items-center bg-gray-800 px-4 py-2 rounded-lg w-96">
              <Search className="text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search for Movies, Events..."
                className="bg-transparent outline-none text-sm ml-2 w-full"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5">
            <select className="bg-transparent border border-gray-600 px-3 py-1 rounded-lg text-sm">
              <option>Delhi-NCR</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
            </select>

            {/* Button */}
            <button
              onClick={() => setOpenLogin(true)}
              className="bg-red-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700"
            >
              Sign In
            </button>

            <Menu className="md:hidden" size={24} />
          </div>
        </div>
      </nav>

      {/* Modals */}
      {openLogin && (
        <LoginModal
          close={() => setOpenLogin(false)}
          openSignup={() => {
            setOpenLogin(false);
            setOpenSignup(true);
          }}
        />
      )}

      {openSignup && (
        <SignupModal
          close={() => setOpenSignup(false)}
          openLogin={() => {
            setOpenSignup(false);
            setOpenLogin(true);
          }}
        />
      )}
    </>
  );
};

export default Navbar;
