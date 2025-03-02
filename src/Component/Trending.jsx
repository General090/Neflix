import React, {useRef} from 'react'
import first from '../Assets/1.jpg'
import second from '../Assets/2.jpg'
import third from '../Assets/3.jpg'
import fourth from '../Assets/4.jpg'
import five from '../Assets/5.jpg'
import six from '../Assets/6.jpg'
import seven from '../Assets/7.jpg'
import eight from '../Assets/8.jpg'
import nine from '../Assets/9.jpg'
import ten from '../Assets/10.jpg'
import { ChevronLeft, ChevronRight } from "lucide-react";
const Trending = () => {

  const movies= [
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

    const scroll = (direction) => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth } = scrollRef.current;
        const scrollAmount = clientWidth * 0.7; // Adjust scroll distance
        const newScrollPosition =
          direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
        scrollRef.current.scrollTo({ left: newScrollPosition, behavior: "smooth" });
      }
    };

  return (
    <div className='bg-black text-white pb-20'>
      <div className='px-40'>
        <h1 className='font-netflix pt-14 text-3xl'>Trending Now</h1> 

        <div className='flex gap-4'>
          <button
              onClick={() => scroll("left")}
              className="absolute left-0 z-10 p-2 bg-gray-800 bg-opacity-50 rounded-full hover:bg-gray-900"
            >
              <ChevronLeft size={40} />
            </button>

          {movies.map((movie, index) => (
            <div key={movie.id} class="relative mt-5 px-5">
              <img src={movie.image} className="rounded-lg" />
              <span class="absolute top-35 left-[-1.5rem] text-9xl font-bold text-black px-3 py-1 [text-shadow:_1px_1px_0_white,_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white]">{index + 1}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Trending
