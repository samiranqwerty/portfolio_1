import React, {ReactNode} from 'react'
import { SiReactivex } from 'react-icons/si'

interface Props{
  title: String;
  subTitle:String;
  icon: ReactNode;
}

const ExperienceCard = ({title,subTitle,icon}:Props) => {
  return (
    <div>
      <div className='flex items-center gap-4 '>
        <span className='w-12 h-12 rounded-full bg-black border-[1px] border-blue-600 flex items-center justify-center'>
          <span className='text-2xl'>{icon}</span>
        </span>
        <div>
        <h3 className='text-2xl font-bold'>{title}</h3>
        <p className='text-base tracking-wide text-gray-400 '>{subTitle}</p>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard