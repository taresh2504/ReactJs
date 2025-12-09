import React, { useState } from "react";

const LoginModal = ({ close, openSignup }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-white text-black w-96 rounded-xl p-6 shadow-lg">

        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-4"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button className="bg-red-600 text-white w-full py-2 rounded hover:bg-red-700 mb-3">
          Login
        </button>

        <p className="text-center text-sm">
          Don't have an account?{" "}
          <span
            onClick={openSignup}
            className="text-red-600 cursor-pointer font-semibold"
          >
            Signup
          </span>
        </p>

        <button
          onClick={close}
          className="mt-4 text-sm text-gray-600 hover:text-black w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
