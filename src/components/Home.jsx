import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#171e27]'>

    {/* Container */}

    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-gray-200'> Hello, my name is </p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#79b5ac]'>Aaron Zahl</h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-gray-200'>I'm a Full Stack Developer</h2>
      <p className='text-gray-200 py-4 max-w-[700px]'>I speicalise in in building and designing full stack digital experiences. Currently I'm focusing on building responsive web applications for businesses.</p>
      <div>
        <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ed6335] hover:border-[#ed6335] duration-500'>View Work <HiArrowNarrowRight className='ml-3' /></button>
      </div>

    </div>
    </div>
  )
}

export default Home