import React from 'react'

const Footer2 = () => {
  return (
    <section className='bg-[#161616] px-40 pt-20 pb-32 cursor-pointer'>
      <h1 className='text-[#a49c9c] pb-5'>Question? <span>Contact us.</span></h1>
      <div className='flex text-[#a49c9c] underline gap-32 text-sm'>
        <div className='flex flex-col'>
          <a className='pb-5'>FAQ</a>
          <a>Cookie Preferences</a>
        </div>
        <div className='flex flex-col'>
          <a  className='pb-5'>Help Center</a>
          <a>Corporate Information</a>
        </div>
        <div>
          <a>Terms of Use</a>
        </div>
        <div>
          <a>Privacy</a>
        </div>
      </div>
    </section>
  )
}

export default Footer2
