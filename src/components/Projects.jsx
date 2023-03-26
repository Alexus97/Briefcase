import React from 'react'
import ProjectItem from './ProjectItem'
//import images
import bosqueImg from '../assets/bosque.jpg';
import MuskPrincipalImg from '../assets/MuskPrincipal.jpg';
import PortadawebImg from '../assets/Portadaweb.jpeg';
import Images from '../assets/avatar.jpg';



const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
      Mi projecto actual lo trabaje con sinergia una fundacion.


      </p>
      <div>
        <ProjectItem img={bosqueImg} title='while of Doom'/>
        <ProjectItem img={MuskPrincipalImg} title='Web Tributte'/>
        <ProjectItem img={PortadawebImg} title='PortadaWEb'/>
        <ProjectItem img={Images} title='Briefcase'/>
      </div>
    </div>
  )
}

export default Projects;