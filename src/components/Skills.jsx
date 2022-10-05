import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import DJANGO from '../assets/django-icon-0-1525228261.png'
import JAVASCRIPT from '../assets/javascript.png'
import PYTHON from '../assets/python-logo-only.png'
import MONGO from '../assets/mongo.png'
import REACT from '../assets/react.png'
import GITHUB from '../assets/GitHub-Mark-Light-120px-plus.png'
import NPM from '../assets/npmlogo.png'
import POSTGRES from '../assets/postgres.png'
import TAILWIND from '../assets/tailwind.png'
import SASS from '../assets/sass-logo.png'

const Skills = () => {
  return (
    <div name='skills' className='h-full w-full bg-[#171e27] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justfy-center w-full h-full'>
        <p className='text-4xl font-bold inline border-b-4 border-[#ed6335]'>Skills</p>
        <p className='py-4'>These are some of the technologies I've worked with</p>
      </div>

      <div className='w-[70%] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
          <p className='my-4'>HTML</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
          <p className='my-4'>CSS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={JAVASCRIPT} alt="JavaScript icon" />
          <p className='my-4'>JavaScript</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={REACT} alt="React icon" />
          <p className='my-4'>React</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={PYTHON} alt="Python icon" />
          <p className='my-4'>Python</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-[95px] mx-auto' src={DJANGO} alt="Django icon" />
          <p className='my-4'>Django</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto mt-2' src={MONGO} alt="Mogo DB icon" />
          <p className='my-4 mt-6'>MongoDB</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto mt-2' src={GITHUB} alt="Github icon" />
          <p className='my-4 mt-6'>GitHub</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-[95px] mx-auto mt-6' src={NPM} alt="NPM icon" />
          <p className='my-4 mt-8'>npm</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={POSTGRES} alt="Postgres icon" />
          <p className='my-4'>PostgreSQL</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={TAILWIND} alt="Tailwind icon" />
          <p className='my-4'>Tailwind</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto mt-2' src={SASS} alt="Sass icon" />
          <p className='my-4 mt-7'>Sass</p>
        </div>

      </div>
    </div>
  )
}

export default Skills