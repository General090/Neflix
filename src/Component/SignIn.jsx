import React from 'react'
import NetflixLogo from '../Assets/netflix-logo.svg';


const SignIn = () => {
  return (
    <section className='home-image2 px-40 pt-5'>
      <div>
          <img src={NetflixLogo} alt="Netflix Logo" className="w-28 md:w-32 lg:w-44 fill-red-600 mb-5" />
        </div>

        <div className='text-white mx-auto bg-gradient-to-t from-black/75 to-black/75 w-[50%] px-16 pt-10 rounded-md'>
          <h1 className='font-bold text-3xl pb-7'>Sign In</h1>
          <form action="">
            <input type="text" className='bg-transparent border border-gray-500 w-full h-14 pl-4 rounded-sm mb-4 focus:border-white focus:ring-2 focus:ring-white outline-none' placeholder='Email or mobile number' />
            <input type="text" className='bg-transparent border border-gray-500 w-full h-14 pl-4 rounded-sm focus:border-white focus:ring-2 focus:ring-white outline-none' placeholder='Password' />
            <button type='submit'></button>
          </form>
        </div>
    </section>
  )
}

export default SignIn
