import React from 'react';
import project_details from '../data/project_details';
import Tag from './Tag';
import '../styles/portfolio.css';

const Projects = () => {


return (
  <div className='projects'>
      {project_details.map(function(project, index){
        return (
        <div className="project-box" key={index}>
          <a href={project.hosted}>
            <h5>{project.name}</h5> 
            <p>{project.description}</p>
          </a>
        </div>
      );
    })}
  </div>
);
}

export default Projects;