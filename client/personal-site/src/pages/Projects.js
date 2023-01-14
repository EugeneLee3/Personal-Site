import React from 'react'

import ProjectItem from '../components/ProjectItem';

import '../styles/projects.css';

import { ProjectList } from '../helpers/ProjectList';

function Projects() {
  return (
    // https://reactjsexample.com/react-snap-carousel-dom-first-responsive-carousel-for-react/
    <div className="projects">
      <h1>My Personal Projects</h1>

      <div className="projectList">
        {ProjectList.map((project, index) => {
          return <ProjectItem id={index} name={project.name} image={project.image} desc={project.desc} gh_link={project.gh_link}/>
        })}
      </div>
    </div>
  )
}

export default Projects