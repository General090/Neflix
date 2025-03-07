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
import svg1 from '../Assets/svg1.png'
import svg2 from '../Assets/svg2.png'
import svg3 from '../Assets/svg3.png'



const Trending = () => {
  
  const movies = [
    { id: 1, image: first, image2: Ada, header: svg1, atrr: ["2023", "13+", "Movie", "Dramas"], description: "As a young woman prepares for her wedding, a secret from the past surfaces that threatens herfamily, her identity and everything she thought she knew."},
    { id: 2, image: second, image2: Counter, header: svg2, atrr: ["2025", "16+","Movie", "Action", "Thriller"], description: "When a hostage rescue mission creates a new enemy, Capt. Guerrero and his elite soldiers must face an ambush by a criminal group."  },
    { id: 3, image: third, image2: Demon, header: svg3, atrr: ["2025", "18+","Movie", "Action", "Thriller"], description: "Framed for his family's murder and left for dead, an ex-hitman will stop at nothing to exact revenge on the masked demons who have taken over his city." },
    { id: 4, image: fourth },
    { id: 5, image: five },
    { id: 6, image: six },
    { id: 7, image: seven },
    { id: 8, image: eight },
    { id: 9, image: nine },
    { id: 10, image: ten },
  ];

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  

  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.7; // Adjust scroll distance
      const newScrollPosition =
        direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: newScrollPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
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

  useEffect(() => {
  if (modalOpen) {
    document.body.style.overflow = "hidden"; // Disable scrolling
  } else {
    document.body.style.overflow = "auto"; // Enable scrolling
  }

  return () => {
    document.body.style.overflow = "auto"; // Reset when unmounted
  };
}, [modalOpen]);


  return (
    <div className="bg-black text-white pb-20 relative">
      <div className="px-40">
        <h1 className="font-netflix pt-14 text-3xl">Trending Now</h1>

        <div className="relative flex items-center mt-5">
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute right-[66rem] z-10 py-14 bg-[#1A1A1A] bg-opacity-50 rounded-xl hover:bg-[#575555] transition duration-500 cursor-pointer"
            >
              <ChevronLeft size={30} />
            </button>
          )}

          <div ref={scrollRef} className="flex overflow-x-scroll no-scrollbar gap-2 scroll-smooth">
            {movies.map((movie, index) => (
              <div key={movie.id} className="relative px-5 flex-shrink-0 w-[230px] transition-transform duration-600 ease-in-out transform hover:scale-105 py-5 cursor-pointer" onClick={() => handleMovieClick(movie)}>
                <img 
                  src={movie.image}
                  className="rounded-lg w-full"
                  alt={`Movie ${index + 1}`}
                />
                <span className="absolute top-44 left-[-0.6rem] text-8xl font-bold text-black px-3 py-1 [text-shadow:_1px_1px_0_white,_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white]">
                  {index + 1}
                </span>
              </div>
            ))}
          </div>

          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute left-[66rem] z-10 py-14 bg-[#1A1A1A] bg-opacity-50 rounded-xl hover:bg-[#575555] transition duration-500 cursor-pointer"
            >
              <ChevronRight size={30} />
            </button>
          )}
        </div>
      </div>

      {modalOpen && selectedMovie && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          onClick={handleOverlayClick}
        >
          <div className="relative bg-[#161616] w-[50%] rounded-md overflow-hidden shadow-2xl h-[95%] overflow-y-auto">

            <button 
              className="absolute top-4 right-4 text-white z-10 p-1 bg-opacity-50 rounded-full hover:bg-opacity-70 transition duration-300"
              onClick={closeModal}
            >
              <RiCloseLargeFill size={30} />
            </button>
            
            {/* Movie banner image */}
            <div className="w-full flex relative items-end">
              <div className=" bg-gradient-to-t from-[#161616] w-full absolute h-full z-20 "> 
              </div>
              <img 
                src={selectedMovie.image2}
                className="w-full h-full object-cover object-top opacity-80"
              />
              
              {/* Title overlay on image */}
              <div className="absolute left-10 z-20 w-[45%]">
                <img src={selectedMovie.header} />
              </div>
            </div>
            
            {/* Movie details */}
            <div className="bg-[#161616] px-10 mb-10 mt-5">
              <div className="flex gap-2 mb-6 text-[#ADADAD]">
                {
                  selectedMovie.atrr.map((attr, index) => (
                    <span key={index} className="flex items-center gap-2 text-[#ADADAD]">
                      <span className="px-2 py-1 bg-[#414141] bg-opacity-20 rounded text-sm">{attr}</span>
                    </span>
                  ))
                }
                 </div>
              
              <p className="mb-6 text-gray-300 leading-relaxed text-[18px] font-netflix pb-5">
                {selectedMovie.description}
              </p>
              
              <button className="bg-red-600 text-white text-[18px] font-netflix py-3 px-6 rounded flex items-center gap-2 hover:bg-red-700 transition duration-300">
                Get Started <SlArrowRight className="w-4 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 

export default Trending;