import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import ProfileImage from '../assets/profile.png'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#171e27]'>

    {/* Container */}

    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <div className='mx-auto px-1 flex flex-col justify-center'>
        <img src={ProfileImage} alt="Profile" style={{width: '250px'}}/>
      </div>
      <p className='text-gray-200'> Hello, my name is </p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#79b5ac]'>Aaron Zahl</h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-gray-200'>I'm a Full Stack Developer</h2>
      <p className='text-gray-200 py-4 max-w-[700px]'>Having just completed the Software Engineering Immersive bootcamp at General Assembly, I'm now looking for opportunities to build dynamic web applications for businesses. I have a creative background in music production and would love to find work as a coder in the creative industry.</p>
      <div>
      <Link to="work" smooth={true} duration={500}>
      <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ed6335] hover:border-[#ed6335] duration-500'>View Work 
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
          </span>
        </button>
            </Link>
      </div>

    </div>
    </div>
  )
}

export default Home