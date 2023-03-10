import React from 'react';
 
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';

import '../styles/project_display.css';

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
  return (
    <div className="project"> 
        <h1> { project.name} </h1>
        <img src={project.image} alt=""/>
        <button>
          GitHub
        </button>
    </div>
  ) 
}

export default ProjectDisplay