import React from 'react'

const Interests = () => {
  return (
    <div name='interests' className='w-full h-screen bg-[#171e27] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#ed6335]'>A bit more about me</p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-bold'>
              <p>I'm a classically trained musician and have played gigs all over the world with various artists. I play guitar, saxophone and have composed music for animation, theatre and film.</p>
            </div>
            <div>
              <p className='tex-2xl'>I also love to travel, especially to see my extended family in Japan. My mother is Japanese and she has taught me everything I know in the kitchen. Udon, Gyoza and Kakiage are my specialialities! I have a one year old son who is a big fan of my cooking. I love being a father and seeing my little boy grow and learn new things everyday. He is my world! </p>
            </div>
          </div>
        </div>

      </div>
  )
}

export default Interests