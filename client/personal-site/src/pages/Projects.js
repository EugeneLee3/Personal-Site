import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import TextAnimated from '../components/TextAnimated'
import { ProjectList } from '../helpers/ProjectList';

import ProjectItem from '../components/ProjectItem';
import Typewriter from '../components/Typewriter';

import '../styles/projects.css';


function Projects() {
  return (
    // https://reactjsexample.com/react-snap-carousel-dom-first-responsive-carousel-for-react/
    <div className="projects">
      
      <div className="inline-title">
        <span className="word-inline">
          <span className="animated-text"><TextAnimated letter="P"/></span>
          <span className="animated-text"><TextAnimated letter="R"/></span>
          <span className="animated-text"><TextAnimated letter="O"/></span>
          <span className="animated-text"><TextAnimated letter="J"/></span>
          <span className="animated-text"><TextAnimated letter="E"/></span>
          <span className="animated-text"><TextAnimated letter="C"/></span>
          <span className="animated-text"><TextAnimated letter="T"/></span>
          <span className="animated-text"><TextAnimated letter="S"/></span>
        </span>
      </div>

      <div className="subtitle">
        <Typewriter titles={["What I've Been Working On!", "For More Information Visit GitHub"]} />
      </div>
        

      <ParallaxProvider>

        <div className="projectList">
          {ProjectList.map((project, index) => {
            return <ProjectItem 
              id={index} 
              name={project.name} 
              status={project.status} 
              desc={project.desc} 
              technologies={project.technologies}
              gh_link={project.gh_link}/>
          })}
        </div>

      </ParallaxProvider>

    </div>
  )
}

export default Projects