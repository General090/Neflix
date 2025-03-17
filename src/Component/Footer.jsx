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
    <div className="bg-black px-7 lg:px-40 flex flex-col items-center pt-7 w-full pb-10">
      <p className="text-white text-center pb-5 text-md max-w-2xl">
        Ready to watch? Enter your email to create or restart your membership
      </p>

      <div className="flex flex-col gap-7 max-w-2xl mx-auto w-full md:flex md:flex-row justify-center items-center">
        <div className="flex flex-col w-full md:w-auto">
          <div className="relative flex-grow max-w-xl md:max-w-sm flex justify-center w-full">
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={`w-full md:w-[400px] h-12 md:h-14 p-4 border ${
                error ? "border-red-500" : email ? "border-green-500" : "border-gray-500"
              } rounded bg-[#0F0F0F] text-white placeholder-transparent focus:outline-none focus:ring-2 ${
                error ? "focus:ring-red-500" : "focus:ring-white"
              }`}
              placeholder="Email address"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(email !== "")}
            />
            <label
              htmlFor="email"
              className={`absolute left-5 md:left-4 text-gray-400 text-sm transition-all ${
                isFocused || email ? "top-2 text-xs text-white" : "top-4 text-base"
              }`}
            >
              Email address
            </label>
          </div>
          {error && (
            <div className="flex items-center gap-1 mt-1">
              <SlClose className="text-red-500" />
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          )}
        </div>

  <button
    type="submit"
    className="cursor-pointer bg-red-600 text-sm md:text-2xl h-12 md:h-14 px-8 text-white rounded font-bold flex items-center justify-center gap-2 hover:bg-red-800 transition duration-500 md:min-w-[180px] md:self-start"
  >
    Get Started
    <SlArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
  </button>
      </div>

      <div className='text-[#a49c9c] text-left w-full mt-10 cursor-pointer'>
        <div className="mb-10 underline">
            <a>Questions? <span>Contact us.</span></a>
        </div>

        <div className="md:flex md:gap-32 text-sm underline">
            <div className="flex flex-col gap-4 mb-5">
                <a>FAQ</a> 
                <a>Investor Relations</a>
                <a>Privacy</a>
                <a>Speed Test</a>
            </div>

            <div className="flex flex-col gap-4 mb-5">
                <a>Help Center</a> 
                <a>Jobs</a>
                <a>Cookie Preferences</a>
                <a>Legal Notices</a>
            </div>

            <div className="flex flex-col gap-4 mb-5">
                <a>Account</a> 
                <a>Ways to Watch</a>
                <a>Corporate Information</a>
                <a>Only on Netflix</a>
            </div>

            <div className="flex flex-col gap-4 mb-5">
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