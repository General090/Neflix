import { useState } from "react";
import { SlArrowRight, SlClose } from "react-icons/sl"; 
import { IoLanguageOutline } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";

const Footer = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newEmail) {
      setError("Email is required");
    } else if (!emailRegex.test(newEmail)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  return (
    <div className="bg-black px-40 flex flex-col items-center pt-7 w-full pb-10">
      <p className="text-white text-center pb-5 text-md max-w-2xl">
        Ready to watch? Enter your email to create or restart your membership
      </p>

      <div className="flex justify-center items-center gap-3 max-w-3xl mx-auto w-full mb-10">
        <div className="relative flex-grow">
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className={`w-full h-14 px-4 pt-4 border rounded bg-[#0F0F0F] text-white placeholder-transparent focus:outline-none focus:ring-2 transition-all ${
              error ? "border-red-500 focus:ring-red-500" 
                    : email ? "border-green-500 focus:ring-green-500" 
                    : "border-gray-500 focus:ring-white"
            }`}
            placeholder="Email address"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(email !== "")}
          />
          <label
            htmlFor="email"
            className={`absolute left-4 transition-all duration-200 ${
              isFocused || email ? "top-2 text-xs text-gray-400" : "top-4 text-base text-gray-500"
            }`}
          >
            Email address
          </label>
          {error && (
            <div className="absolute -bottom-6 left-0 flex items-center gap-1">
              <SlClose className="text-red-500 w-4 h-4" />
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="cursor-pointer bg-red-600 text-lg h-14 px-8 text-white rounded font-bold flex items-center justify-center gap-2 hover:bg-red-800 transition duration-500 min-w-[180px]"
        >
          Get Started
          <SlArrowRight className="w-5 h-5" />
        </button>
      </div>

      <div className='text-[#a49c9c] text-left w-full mt-10'>
        <div className="mb-10 underline">
            <a>Questions? <span>Contact us.</span></a>
        </div>

        <div className="flex gap-32 text-sm underline">
            <div className="flex flex-col gap-4">
                <a>FAQ</a> 
                <a>Investor Relations</a>
                <a>Privacy</a>
                <a>Speed Test</a>
            </div>

            <div className="flex flex-col gap-4">
                <a>Help Center</a> 
                <a>Jobs</a>
                <a>Cookie Preferences</a>
                <a>Legal Notices</a>
            </div>

            <div className="flex flex-col gap-4">
                <a>Account</a> 
                <a>Ways to Watch</a>
                <a>Corporate Information</a>
                <a>Only on Netflix</a>
            </div>

            <div className="flex flex-col gap-4">
                <a>Media Center</a> 
                <a>Terms of Use</a>
                <a>Contact Us</a>
            </div>
        </div>

        <button className='flex items-center text-white text-md mt-12 bg-[#0F0F0F] px-3 rounded-sm py-1 gap-2 outline outline-[#444343]'>
        <IoLanguageOutline /> English <MdArrowDropDown />
        </button>

        <p className="mt-10 pb-20">Netflix Nigeria</p>
      </div>

    </div>
  );
};

export default Footer;