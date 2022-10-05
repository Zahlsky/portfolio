import React from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import Logo from '../assets/AZlogo.png'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  //when clicked if nav is true will set to false and visa-versa
  const handleClick = () => setNav(!nav) 
  return (
    <div className='fixed w-full h-[80px] flex justify-between irems-center px-4 bg-[#171e27] text-gray-300'>
      <div>
        {/* <img src={Logo} alt="Logo" style={{width: '50px'}}/> */}
      </div>

      {/* menu */}

      
        <ul className='hidden md:flex'>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-5 text-4xl'>Home</li>
          <li className='py-5 text-4xl'>About</li>
          <li className='py-5 text-4xl'>Skills</li>
          <li className='py-5 text-4xl'>Work</li>
          <li className='py-5 text-4xl'>Contact</li>
      </ul>

      {/* social icons */}
      <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#026c80]'>
          <a className='flex justify-between items-center w-full text-gray-300' href='/'>
            LinkedIn <FaLinkedin size={30}/>
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#79b5ac]'>
          <a className='flex justify-between items-center w-full text-gray-300' href='/'>
            GitHub <FaGithub size={30}/>
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#ed6335]'>
          <a className='flex justify-between items-center w-full text-gray-300' href='/'>
            Email <HiOutlineMail size={30}/>
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#e9311a]'>
          <a className='flex justify-between items-center w-full text-gray-300' href='/'>
            CV <BsFillPersonLinesFill size={30}/>
          </a>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar