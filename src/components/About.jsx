import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#171e27] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#ed6335]'>About</p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Aaron, nice to meet you. Go on, take a look around.</p>
            </div>
            <div>
              <p>I’m a software engineer with experience in project management and music production. My interest in development was first sparked by creating music using programming to design and sculpt digital sounds. My desire to learn more led me to fast-track my education at General Assembly’s full-stack immersive software engineering course. I’m now looking for opportunities to develop my career in a creative, progressive and supportive workplace.</p>
            </div>
          </div>
        </div>

      </div>
  )
}

export default About