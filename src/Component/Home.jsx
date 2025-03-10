import { useState } from "react";
import NetflixLogo from '../Assets/netflix-logo.svg';
import { SlArrowRight } from "react-icons/sl";
import { SlClose } from "react-icons/sl";

const Home = () => {

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
    <section className="home-image">
      <header className="flex items-center pt-7 lg:pt-5 px-7 lg:px-40">
        <div>
          <img src={NetflixLogo} alt="Netflix Logo" className="w-28 lg:w-44 fill-red-600" />
        </div>

        <button className="ml-auto bg-red-600 text-white text-sm px-4 py-2 rounded font-netflix hover:bg-red-800 transition duration-500 cursor-pointer">
          Sign in
        </button>
      </header>

      <div className="text-white text-center mt-28 lg:mt-32 font-netflix lg:text-[3.5rem] text-[2rem]">
        <h1 className="font-bold">Unlimited movies, TV </h1>
        <h1 className="font-bold">shows, and more</h1>
        <h3 className="mb-4 lg:mb-10 text-[17px] lg:text-[20px]">Starts at ₦2,200. Cancel anytime.</h3>
        <h4 className="mb-5 text-[18px] lg:text-[17px] px-7">Ready to watch? Enter your email to create or restart your membership.</h4>
      </div>
      <div className="gap-3 max-w-2xl mx-7 lg:mx-auto w-full flex justify-center items-center">
          <div className="relative flex-grow max-w-auto lg:max-w-sm">
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={`w-full h-14 px-4 pt-4 border ${
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
              className={`absolute left-4 text-gray-400 text-sm transition-all ${
                isFocused || email ? "top-2 text-xs text-white" : "top-4 text-base"
              }`}
            >
              Email address
            </label>
            {error && (
              <div className="absolute -bottom-6 left-0 flex items-center gap-1">
                <SlClose className="text-red-500" />
                <p className="text-red-500 text-sm">{error}</p>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="cursor-pointer bg-red-600 text-2xl h-14 px-8 text-white rounded font-bold flex items-center justify-center gap-2 hover:bg-red-800 transition duration-500 min-w-[180px]"
          >
            Get Started
            <SlArrowRight className="w-5 h-5" />
          </button>
        </div>
    </section>
  );
};

export default Home;



