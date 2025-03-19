import { useState } from "react";
import NetflixLogo from '../Assets/netflix-logo.svg';
import { SlArrowRight } from "react-icons/sl";
import { SlClose } from "react-icons/sl"; 
import { Link } from "react-router-dom";
import Trending from "./Trending.jsx";
import Reasons from "./Reasons.jsx";
import Questions from "./Questions.jsx";
import Footer from "./Footer.jsx";

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
      <header className="flex items-center justify-between pt-7 lg:pt-5 px-7 md:px-20 lg:px-40">
        <div>
          <img src={NetflixLogo} alt="Netflix Logo" className="w-28 md:w-32 lg:w-44 fill-red-600" />
        </div>

        <Link to="/signin">
          <button className="ml-auto bg-red-600 text-white text-sm px-4 py-2 rounded font-netflix hover:bg-red-800 transition duration-500 cursor-pointer">
            Sign in
          </button>
        </Link>
      </header>

      <div className="text-white text-center mt-34 md:mt-52 lg:mt-32 font-netflix md:text-[3rem] lg:text-[3.5rem] text-[2rem]">
        <h1 className="font-bold">Unlimited movies, TV </h1>
        <h1 className="font-bold">shows, and more</h1>
        <h3 className="mb-4 md:mb-10 text-[17px] lg:text-[20px]">Starts at ₦2,200. Cancel anytime.</h3>
        <h4 className="mb-5 text-[18px] md:text-[17px] px-7">Ready to watch? Enter your email to create or restart your membership.</h4>
      </div>

      <div className="flex flex-col gap-7 max-w-2xl md:mx-auto md:w-full md:flex md:flex-row justify-center items-center pb-16">
        <div className="flex flex-col w-full md:w-auto">
          <div className="relative flex-grow max-w-md md:max-w-sm flex justify-center w-full">
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={`w-[90%] md:w-[400px] h-12 md:h-14 p-4 border ${
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
              className={`absolute left-10 md:left-4 text-gray-400 text-sm transition-all ${
                isFocused || email ? "top-2 text-xs text-white" : "top-4 text-base"
              }`}
            >
              Email address
            </label>
          </div>
          {error && (
            <div className="flex items-center gap-1 mt-1 ml-5 md:ml-0">
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


      {/* Other Sections */}
      <Trending />
      <Reasons />
      <Questions />
      <Footer />

    </section>
  );
};

export default Home;



