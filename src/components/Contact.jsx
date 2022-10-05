import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen bg-[#171e27] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/db3d4dcd-44e9-4c04-8696-efa79777b5c2" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#ed6335] text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4' >Submit the form below to contact me</p>
        </div>
        <input className ='my-2 p-3 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
        <input className='my-2 p-3 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='my-2 p-3 bg-[#ccd6f6]' name="message" rows='10'  placeholder='Message'></textarea>
        <button className='text-white border-2 px-4 py-3 my-6 mx-auto flex items-center hover:bg-[#ed6335] hover:border-[#ed6335] duration-500 '>Let's go</button>
      </form>
    </div>
  )
}

export default Contact