import React from 'react'
import {first} from './svg'
import {second} from './svg'
import {third} from './svg'
import {fourth} from './svg'


const Reasons = () => {
  return (
    <div className='px-40 font-netflix bg-black text-white pb-16'>
      <header className='text-2xl pb-5'>More Reasons to Join</header>
      <div className='flex gap-5' >
        <div className='rounded-2xl bg-gradient-to-b from-[#1c1e3c] to-[#1F1424] w-[24%] font-netflix px-3 h-72 relative'>
          <h1 className='font-bold text-2xl py-4'>Enjoy on your TV</h1>
          <p className='text-sm text-[#93929F]'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>

          <div className='absolute bottom-3 right-2'>
            {first}
          </div>
        </div>

        <div className='rounded-2xl bg-gradient-to-b from-[#1c1e3c] to-[#1F1424] w-[24%] font-netflix px-3 h-72 relative'>
          <h1 className='font-bold text-2xl py-4'>Enjoy on your TV</h1>
          <p className='text-sm text-[#93929F]'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>

          <div className='absolute bottom-3 right-2'>
            {second}
          </div>
        </div>

        <div className='rounded-2xl bg-gradient-to-b from-[#1c1e3c] to-[#1F1424] w-[24%] font-netflix px-3 h-72 relative'>
          <h1 className='font-bold text-2xl py-4'>Enjoy on your TV</h1>
          <p className='text-sm text-[#93929F]'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>

          <div className='absolute bottom-3 right-2'>
            {third}
          </div>
        </div>

        <div className='rounded-2xl bg-gradient-to-b from-[#1c1e3c] to-[#1F1424] w-[24%] font-netflix px-3 h-72 relative'>
          <h1 className='font-bold text-2xl py-4'>Enjoy on your TV</h1>
          <p className='text-sm text-[#93929F]'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>

          <div className='absolute bottom-3 right-2'>
            {fourth}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Reasons


