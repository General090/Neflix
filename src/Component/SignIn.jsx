import React from 'react';
import NetflixLogo from '../Assets/netflix-logo.svg';
import Footer2 from './Footer2';
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <section className="relative bg-black md:bg-[url('/src/Assets/netflixbg.jpg')]  md:bg-no-repeat px-5 lg:px-40 pt-5 pb-10">
        
        <div className="absolute inset-0 bg-black/70 lg:bg-gradient-to-t lg:from-black/10 lg:to-black/10"></div>
        <div className="relative z-10">
          <img src={NetflixLogo} alt="Netflix Logo" className="w-26 md:w-24 lg:w-44 fill-red-600 mb-5" />

          <div className="text-white mx-auto bg-gradient-to-t from-black/75 to-black/75 w-full md:w-[65%] lg:w-[45%] md:px-16 pt-10 rounded-md pb-20">
            <h1 className="font-bold text-3xl pb-7">Sign In</h1>
            <form>
              <input
                type="text"
                name="email"
                className="border border-gray-500 w-full h-14 pl-4 rounded-sm mb-4 focus:border-white focus:ring-2 focus:ring-white outline-none"
                placeholder="Email or mobile number"
              />
              <input
                type="password"
                name="password"
                className="border border-gray-500 w-full h-14 pl-4 mb-4 rounded-sm focus:border-white focus:ring-2 focus:ring-white outline-none"
                placeholder="Password"
              />
              <button
                type="submit"
                className="bg-red-600 text-white font-bold w-full h-10 mb-4 rounded font-netflix hover:bg-red-800 transition duration-500 cursor-pointer"
              >
                Sign in
              </button>
              <p className="text-center mb-4">OR</p>
              <button
                type="button"
                className="bg-[#434343] text-white font-bold w-full h-10 mb-4 rounded font-netflix hover:bg-[#2d2d2d] transition duration-500 cursor-pointer"
              >
                Use a Sign-In Code
              </button>
              <div className="mb-4 underline text-center cursor-pointer">
                <a>Forgot Password?</a>
              </div>

              <label className="flex items-center space-x-2 mb-4">
                <input type="checkbox" className="hidden peer" />
                <div className="w-4 h-4 bg-black border border-gray-500 peer-checked:bg-white"></div>
                <span className="text-white">Remember me</span>
              </label>

              <p className="mb-4 text-[#a49c9c]">New to Netflix? <Link to="/"><a className="text-white cursor-pointer">Sign Up Now</a></Link></p>
              <p className="mb-4 text-[#a49c9c] text-sm">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
              <a className="underline text-blue-600 text-sm cursor-pointer">Learn more.</a>
            </form>
          </div>
        </div>
      </section>
      
      <Footer2 />
    </>
  );
};

export default SignIn;
