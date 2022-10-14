import React from 'react'
import BAOTY from '../assets/aoty.png'
import CRYPTO from '../assets/cryptoscreenshot.png'
import EARTH from '../assets/EarthBnb.png'
import SPACE from '../assets/SpaceInvaders.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#171e27] flex justify-center mt-11 pt-11'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#ed6335]'>Work</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-6 py-6'>

          {/* Grid Item */}
          <div style={{backgroundImage: `url(${BAOTY})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 px-4'>
              <span className='text-2xl font-bold text-white tracking-wider'>
    Django and React Application
              </span>
              <p className='text-sm text-white tracking-wider'>
              'Best Album Of The Year' (Solo Project, 7 days) - a music mag web application where users can view albums from the last year! Users may also add their own reviews and add albums to their ‘playlist’. Built using React, JavaScript, Python, Django, CSS, SASS, MUI and Bootstrap.
              </p>
              <div className='pt-8 text-center'>
                <a href="https://albums-of-the-year.herokuapp.com/" rel='noreferrer' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 text-sm'>Demo</button>
                </a>
                <a href="https://github.com/Zahlsky/project4" rel='noreferrer' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 text-sm'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${EARTH})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 px-4'>
              <span className='text-2xl font-bold text-white tracking-wider'>
    MERN Stack Application
              </span>
              <p className='text-sm text-white tracking-wider'>
              ‘Earth-BnB’ (Group project, 7 days) - Dynamic web application built using React, JavaScript, CSS, SASS, Axios, NodeJS, Express, MongoDB, MUI, Bootstrap. This is a web app with styling inspired by Air BnB.
              </p>
              <div className='pt-8 text-center'>
                <a href="https://project3-earthbnb.netlify.app" rel='noreferrer' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 text-sm'>Demo</button>
                </a>
                <a href="https://github.com/Zahlsky/Project3_backend" rel='noreferrer' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 text-sm'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${CRYPTO})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 px-4'>
              <span className='text-2xl font-bold text-white tracking-wider'>
    React Application
              </span>
              <p className='text-sm text-white tracking-wider'>
              ‘Crypto2Go’ (Paired project, 2 days) - A live crypto currency web application for the top 100 cryptos in a league table based upon market cap. Project built using React, JavaScript, CSS, SASS, Axios, NodeJS & CoinGecko’s API. 
              </p>
              <div className='pt-8 text-center'>
                <a href="https://cryptotogo.netlify.app/" rel='noreferrer' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 text-sm'>Demo</button>
                </a>
                <a href="https://github.com/Zahlsky/SEI-65-Project-2" rel='noreferrer' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 text-sm'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${SPACE})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 px-4'>
              <span className='text-2xl font-bold text-white tracking-wider'>
    JavaScript Game
              </span>
              <p className='text-sm text-white tracking-wider'>
              ‘Space Invaders Game’ (Solo project, 5 days) - Retro feel game -built using HTML, CSS, vanilla JavaScript (DOM). This is a take on the classic 80’s game with styling based on the arcade version.
              </p>
              <div className='pt-8 text-center'>
                <a href="https://zahlsky.github.io/spaceInvadersSEI/" rel='noreferrer' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 text-sm'>Demo</button>
                </a>
                <a href="https://github.com/Zahlsky/spaceInvadersSEI" rel='noreferrer' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 text-sm'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Work