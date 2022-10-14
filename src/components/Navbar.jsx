import React from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  //when clicked if nav is true will set to false and visa-versa
  const handleClick = () => setNav(!nav) 
  return (
    <div className='fixed w-full h-[20px] flex justify-between irems-center px-4 bg-[#171e27] text-gray-300'>
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
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="interests" smooth={true} duration={500}>
              Interests
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-5 text-4xl'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
          </Link>
          </li>
          <li className='py-5 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='py-5 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='py-5 text-4xl'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className='py-5 text-4xl'>
            <Link onClick={handleClick} to="interests" smooth={true} duration={500}>
              Interests
            </Link>
          </li>
          <li className='py-5 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
      </ul>

      {/* social icons */}
      <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#026c80]'>
          <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/aaronzahl/' rel='noreferrer' target='_blank'>
            LinkedIn <FaLinkedin size={30}/>
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#79b5ac]'>
          <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Zahlsky' rel='noreferrer' target='_blank'>
            GitHub <FaGithub size={30}/>
          </a>
        </li>
        <Link to="contact" smooth={true} duration={500}>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#ed6335]'>
          <a className='flex justify-between items-center w-full text-gray-300' href='/'>
            Email <HiOutlineMail size={30}/>
          </a>
        </li>
            </Link>
      </ul>
      </div>
    </div>
  )
}

export default Navbar