import React from 'react';
import project_details from '../data/project_details';
import Tag from './Tag';
import '../styles/portfolio.css';

const Projects = () => {

  const renderProjects = (project) => {
    return (
      <div className="project-box">
        <a href={project.hosted}>
          <h5>{project.name}</h5>
          <p>{project.description}</p>
        </a>
      </div>
    );
  }

return (
  <div className='projects'>
    {project_details.map(renderProjects)}
  </div>
);
}

export default Projects;