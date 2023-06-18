import Image from 'next/image'
import Profilepic from '../public/img/profilepic.png'
import React from 'react'

function Banner() {
  return (
    <div className='wrapper flex flex-col md:flex-row items-center gap-10 '>
      {/* {image} */}
      <div className='bg-black'>
        <Image className='rounded-full border-[1px] border-indigo-700 p-2 object-cover transition duration-500 hover:scale-125' src={Profilepic} alt='Profile Picture' height={100} width={100}/>
      </div>
      {/* {description} */}
      <div className='w-3/4 flex flex-col items-start md:items-start gap-2'>
        <h1 className='text-3xl md:text-5xl font-bold text-white'>Samiran Biswas</h1>
        <h3 className='text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300'>Full Stack Developer</h3>
        <p className='text-base tracking-wide'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  )
}

export default Banner