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
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import icons

const Trending = () => {
  const movies = [
    { id: 1, image: first },
    { id: 2, image: second },
    { id: 3, image: third },
    { id: 4, image: fourth },
    { id: 5, image: five },
    { id: 6, image: six },
    { id: 7, image: seven },
    { id: 8, image: eight },
    { id: 9, image: nine },
    { id: 10, image: ten },
  ];

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
              <button key={movie.id} className="relative px-5 flex-shrink-0 w-[230px] transition-transform duration-600 ease-in-out transform hover:scale-105 py-5 cursor-pointer">
                <img 
                  src={movie.image}
                  className="rounded-lg w-full"
                  alt={`Movie ${index + 1}`}
                />
                <span className="absolute top-44 left-[-0.6rem] text-8xl font-bold text-black px-3 py-1 [text-shadow:_1px_1px_0_white,_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white]">
                  {index + 1}
                </span>
              </button>
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
    </div>
  );
};

export default Trending;