import React from 'react'
import Title from './Title'
import { GiSkills } from'react-icons/gi';
import SkillInput from './SkillInput';

const Skills = () => {
  return (
    <div className='wrapper'>
      <Title text='Skills' icon={<GiSkills />} />
      <div className='flex gap-6 flex-wrap'>
        <SkillInput title="JavaScript" link=""/>
        <SkillInput title="Reactjs" link=""/>
        <SkillInput title="Nextjs" link=""/>
        <SkillInput title="Python" link=""/>
        <SkillInput title="Django" link=""/>
        <SkillInput title="Tailwindcss" link=""/>
        <SkillInput title="HTML" link=""/>
        <SkillInput title="CSS3" link=""/>
        <SkillInput title="VS Code" link=""/>
        <SkillInput title="Notion" link=""/>
        <SkillInput title="Figma" link=""/>
        <SkillInput title="UI Design" link=""/>
        <SkillInput title="Canva" link=""/>
        <SkillInput title="Brand & Logo Design" link=""/>
        <SkillInput title="Photoshop" link=""/>
        <SkillInput title="Video Editing" link=""/>
        <SkillInput title="Premier Pro" link=""/>
        <SkillInput title="After Effect" link=""/>
        <SkillInput title="Blender" link=""/>
      </div>
    </div>
  )
}

export default Skills