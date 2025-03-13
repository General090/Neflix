import React from 'react'
import {first} from './svg'
import {second} from './svg'
import {third} from './svg'
import {fourth} from './svg'


const Reasons = () => {
  return (
    <div className='px-7 lg:px-40 font-netflix bg-black text-white pb-16'>
      <header className='text-xl md:text-2xl pb-3 md:pb-5'>More Reasons to Join</header>
      <div className='flex flex-col lg:flex-row gap-5'>
        <div className='rounded-2xl bg-gradient-to-b from-[#1c1e3c] to-[#1F1424] lg:w-[24%] font-netflix px-3 h-52 md:h-40 lg:h-72 relative'>
          <h1 className='font-bold text-xl md:text-2xl py-4'>Enjoy on your TV</h1>
          <p className='text-sm text-[#93929F]'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>

          <div className='absolute bottom-3 right-2'>
            {first}
          </div>
        </div>

        <div className='rounded-2xl bg-gradient-to-b from-[#1c1e3c] to-[#1F1424] lg:w-[24%] font-netflix px-3 h-52 md:h-40 lg:h-72 relative'>
          <h1 className='font-bold text-lg md:text-2xl py-4'>Download your shows to watch offline</h1>
          <p className='text-sm text-[#93929F]'>Save your favorites easily and always have something to watch.</p>

          <div className='absolute bottom-3 right-2'>
            {second}
          </div>
        </div>

        <div className='rounded-2xl bg-gradient-to-b from-[#1c1e3c] to-[#1F1424] lg:w-[24%] font-netflix px-3 h-52 md:h-40 lg:h-72 relative'>
          <h1 className='font-bold text-xl md:text-2xl py-4'>Watch everywhere</h1>
          <p className='text-sm text-[#93929F]'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>

          <div className='absolute bottom-3 right-2'>
            {third}
          </div>
        </div>

        <div className='rounded-2xl bg-gradient-to-b from-[#1c1e3c] to-[#1F1424] lg:w-[24%] font-netflix px-3 h-52 md:h-40 lg:h-72 relative'>
          <h1 className='font-bold text-xl md:text-2xl py-4'>Create profiles for kids</h1>
          <p className='text-sm text-[#93929F]'>Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</p>

          <div className='absolute bottom-3 right-2'>
            {fourth}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Reasons


