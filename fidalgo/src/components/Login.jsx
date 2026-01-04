import React, { useState } from 'react'
import img from '../assets/user-box.jpg'
import { Link } from 'react-router-dom';


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <div>
      <div>
        <div className="relative inline-block">
          {/* Background Image */}
          <img src={img} alt="" className="object-cover" />

          {/* Right Panel */}
          <div
            className={`absolute top-0 right-0 w-1/2 h-full flex items-center justify-center flex-col text-white ${
              isSignIn ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <h1 className="text-2xl mb-4">
              {isSignIn ? "Don't have an Account" : "Have an Account"}
            </h1>
            <button
              onClick={() => setIsSignIn(!isSignIn)}
              className="bg-[#e6b15f] px-26 rounded-xl text-black py-3 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          </div>

          {/* Left Panel */}
          <div
            className={`absolute top-0 left-0 w-1/2 h-full bg-white flex items-center justify-center flex-col transition-transform duration-700 ${
              isSignIn ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <h1 className="text-3xl mb-8">
              {isSignIn ? "Sign In to Restoria" : "Create Account"}
            </h1>
            <div className="flex items-start justify-start flex-col gap-4">
              <input
                className="border border-gray-500 px-7 py-3 text-xl rounded-lg outline-none"
                type="text"
                placeholder={
                  isSignIn ? "Username or Email Address" : "Username"
                }
              />
              {!isSignIn && (
                <input
                  className="border border-gray-500 px-7 py-3 text-xl rounded-lg outline-none"
                  type="email"
                  placeholder="Email Address"
                />
              )}
              <input
                className="border border-gray-500 px-7 py-3 text-xl rounded-lg outline-none"
                type="password"
                placeholder="Password"
              />

              {isSignIn && (
                <span className="flex gap-3">
                  <input type="checkbox" className="accent-[#e6b15f]" />
                  <p>Remember me</p>
                </span>
              )}
              <button className="bg-[#e6b15f] px-30 rounded-xl text-black py-3 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>

              {isSignIn ? (
                <span className="flex flex-col gap-3">
                  <p className="hover:text-[#e6b15f] transition-all duration-300 cursor-pointer text-lg underline">
                    <Link to='/password'>Lost your Password.</Link>
                  </p>
                  <p
                    onClick={() => setIsSignIn(!isSignIn)}
                    className="hover:text-[#e6b15f] transition-all duration-300 cursor-pointer text-lg hover:underline "
                  >
                    Create Account
                  </p>
                </span>
              ) : (
                <p
                  onClick={() => setIsSignIn(!isSignIn)}
                  className="hover:text-[#e6b15f] transition-all duration-300 cursor-pointer text-lg "
                >
                  Don't have an Account
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login