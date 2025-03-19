import React, { useRef, useState, useEffect } from "react";
import first from "../Assets/1.jpg";
import second from "../Assets/2.jpg";
import third from "../Assets/3.jpg";
import fourth from "../Assets/4.jpg";
import five from "../Assets/5.jpg";
import six from "../Assets/6.jpg";
import seven from "../Assets/7.jpg";
import eight from "../Assets/8.jpg";
import nine from "../Assets/9.jpg";
import ten from "../Assets/10.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RiCloseLargeFill } from "react-icons/ri";
import { SlArrowRight } from "react-icons/sl";
import Ada from '../Assets/ada.jpg'
import Demon from '../Assets/demon.jpg'
import Counter from '../Assets/counter.jpg'
import Formula from '../Assets/formula.jpg'
import Agent from '../Assets/agent.jpg'
import Door from '../Assets/door.jpg'
import Action from '../Assets/action.jpg'
import Life from '../Assets/life.jpg'
import Delle from '../Assets/delle.jpg'
import Prison from '../Assets/prison.jpg'
import svg1 from '../Assets/svg1.png'
import svg2 from '../Assets/svg2.png'
import svg3 from '../Assets/svg3.png'
import svg4 from '../Assets/svg4.png'
import svg5 from '../Assets/svg5.png'
import svg6 from '../Assets/svg6.png'
import svg7 from '../Assets/svg7.png'
import svg8 from '../Assets/svg8.png'
import svg9 from '../Assets/svg9.png'
import svg10 from '../Assets/svg10.png'

const Trending = () => {
  const movies = [
    { id: 1, image: first, image2: Ada, header: svg1, atrr: ["2023", "13+", "Movie", "Dramas"], description: "As a young woman prepares for her wedding, a secret from the past surfaces that threatens herfamily, her identity and everything she thought she knew."},
    { id: 2, image: second, image2: Counter, header: svg2, atrr: ["2025", "16+","Movie", "Action", "Thriller"], description: "When a hostage rescue mission creates a new enemy, Capt. Guerrero and his elite soldiers must face an ambush by a criminal group."  },
    { id: 3, image: third, image2: Demon, header: svg3, atrr: ["2025", "18+","Movie", "Action", "Thriller"], description: "Framed for his family's murder and left for dead, an ex-hitman will stop at nothing to exact revenge on the masked demons who have taken over his city." },
    { id: 4, image: fourth, image2: Formula, header: svg4, atrr: ["2025", "18+","Show", "Documentaries", "Sports"], description: "Drivers, managers and team owners live life in the fast lane — both on and off the track — during each cutthroat season of Formula 1 racing."},
    { id: 5, image: five, image2: Agent, header: svg5, atrr: ["2025", "18+", "Show", "Action", "Thriller", "Mysteries"], description: "Brought together by a midnight phone call, an FBI agent and a cybersecurity expert must unravel an ever-growing web of political conspiracies." },
    { id: 6, image: six, image2: Door, header: svg6, atrr: ["2024", "16+", "Show", "Dramas"], description: "A man's life unravels when he is elected as the new king of his village, only for an ancient prophecy to challenge his reign with blood and fury." },
    { id: 7, image: seven, image2: Action, header: svg7, atrr: ["2025", "13+","Movie", "Comedies", "Action"], description: "Fifteen years after vanishing from the CIA to start a family, elite spies Matt and Emily jump back into the world of espionage when their cover is blown." },
    { id: 8, image: eight, image2: Life, header: svg8, atrr: ["2025", "13+","Show", "Romance", "Dramas"], description: "In Jeju, a spirited girl and a steadfast boy's island story blossoms into a lifelong tale of setbacks and triumphs — proving love endures across time." },
    { id: 9, image: nine, image2: Delle, header: svg9, atrr: ["2025", "16+","Movie", "Thrillers"], description: "During their vacation in the French countryside, a wealthy German family becomes entangled with a young hotel worker harboring sinister intentions." },
    { id: 10, image: ten, image2: Prison, header: svg10, atrr: ["2017", "16+", "Show", "Action", "Thrillers"], description: "When his brother is wrongly convicted of murder, a structural engineer resolves to bust his sibling out of the notorious Fox River State Penitentiary." },
  ];

  // State for managing the scrollable content
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // State for managing the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);
  
  // Scroll functionality
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.7;
      const newScrollPosition = direction === "left" 
        ? scrollLeft - scrollAmount 
        : scrollLeft + scrollAmount;
        
      scrollRef.current.scrollTo({ 
        left: newScrollPosition, 
        behavior: "smooth" 
      });
    }
  };

  // Open modal with selected movie
  const openMovieDetails = (movie) => {
    setCurrentMovie(movie);
    setIsModalOpen(true);
  };

  // Close modal
  const closeMovieDetails = () => {
    setIsModalOpen(false);
  };

  // Update arrow visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Control body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  // Movie Item Component
  const MovieItem = ({ movie, index }) => (
    <div 
      className="relative px-0.5 lg:px-5 flex-shrink-0 lg:w-[230px] w-[140px] transition-transform duration-600 ease-in-out transform hover:scale-105 py-5 cursor-pointer" 
      onClick={() => openMovieDetails(movie)}
    >
      <img 
        src={movie.image}
        className="rounded-lg lg:w-full w-32"
        alt={`Movie ${index + 1}`}
      />
      <span className="absolute top-35 lg:top-44 left-[-15px] lg:left-[-0.6rem] text-5xl lg:text-8xl font-bold text-black px-3 py-1 [text-shadow:_1px_1px_0_white,_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white]">
        {index + 1}
      </span>
    </div>
  );

  // Modal Component
  const MovieModal = () => {
    if (!isModalOpen || !currentMovie) return null;
    
    return (
      // Modal Overlay
      <div className="fixed inset-0 bg-opacity-75 lg:flex items-center justify-center z-50 mt-40 lg:mt-0">
        {/* Modal Container */}
        <div className="relative bg-[#161616] w-[24.5rem] lg:w-[50%] mx-auto md:w-[90%] rounded-xl lg:rounded-md shadow-2xl lg:h-[90%] h-[80%] overflow-y-auto">
          {/* Close Button */}
          <button 
            className="absolute top-7 md:top-4 right-4 text-white z-30 bg-opacity-50 rounded-full p-1 hover:bg-blur-sm hover:bg-gray-400 transition-colors"
            onClick={closeMovieDetails}
          >
            <RiCloseLargeFill size={30} />
          </button>
          
          {/* Movie Banner */}
          <div className="w-full flex relative items-end">
            <div className="bg-gradient-to-t from-[#161616] w-full absolute h-full z-20"></div>
            <img 
              src={currentMovie.image2}
              className="w-full h-full object-cover object-top opacity-80"
              alt={`${currentMovie.id} banner`}
            />
            
            <div className="absolute left-5 md:left-10 z-20 w-[45%]">
              <img src={currentMovie.header} alt="movie title" />
            </div>
          </div>

          {/* Movie Details */}
          <div className="bg-[#161616] px-5 md:px-10 mb-10 mt-5">
            <div className="flex flex-wrap gap-2 mb-6">
              {currentMovie.atrr.map((attr, index) => (
                <span key={index} className="px-2 py-1 bg-[#414141] bg-opacity-20 rounded text-sm text-[#ADADAD]">
                  {attr}
                </span>
              ))}
            </div>
            
            <p className="mb-6 text-gray-300 leading-relaxed text-[18px] font-netflix pb-5">
              {currentMovie.description}
            </p>
            
            <button className="bg-red-600 text-white text-[18px] font-netflix py-3 px-6 rounded flex items-center gap-2 hover:bg-red-700 transition duration-300">
              Get Started <SlArrowRight className="w-4 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black text-white pb-20 relative">
      <div className="px-7 md:px-20 lg:px-40">
        <h1 className="font-netflix pt-14 text-xl md:text-3xl">Trending Now</h1>

        {/* Scrollable Movie List */}
        <div className="relative flex items-center lg:mt-5 px-5">
          {/* Left Scroll Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute lg:right-[66rem] z-10 py-14 bg-[#1A1A1A] bg-opacity-50 rounded-xl hover:bg-[#575555] transition duration-500 cursor-pointer"
            >
              <ChevronLeft size={30} />
            </button>
          )}

          {/* Movie List */}
          <div 
            ref={scrollRef} 
            className="flex overflow-x-scroll no-scrollbar lg:gap-2 scroll-smooth"
          >
            {movies.map((movie, index) => (
              <MovieItem key={movie.id} movie={movie} index={index} />
            ))}
          </div>

          {/* Right Scroll Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute left-[18rem] md:left-[38rem] lg:left-[66rem] z-10 py-14 bg-[#1A1A1A] bg-opacity-50 rounded-xl hover:bg-[#575555] transition duration-500 cursor-pointer"
            >
              <ChevronRight size={30} />
            </button>
          )}
        </div>
      </div>

      {/* Movie Details Modal */}
      <MovieModal />
    </div>
  );
};

export default Trending;