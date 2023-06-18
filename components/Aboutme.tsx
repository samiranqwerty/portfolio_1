import React from 'react'
import {SiInformatica} from "react-icons/si"
import Title from './Title'

function Aboutme() {
  return (
    <div className='wrapper'>
    <Title text="About Me" icon={<SiInformatica/>}/>
    <div className='text-lg tracking-wide flex flex-col gap-6'>
      <p>
      Welcome to my portfolio website! I'm SAMIRAN BISWAS, a passionate and creative Web Developer. With a background in Front End.<br/>
      Since beginning my journey as a freelance designer over 6 month, i have done few clone website in my carrier and want to explore more about Web Development.
      </p>
      <p>
      As a beginner in Web Development, I am constantly seeking opportunities to expand my knowledge and gain hands-on experience. I have recently completed Nextjs Youtube full course + Django Projects where I acquired a good foundation in Front-End Development and Backend Development skills to real-world projects and contribute to the success of innovative initiatives.
      </p>
    </div>
    </div>
  )
}

export default Aboutme