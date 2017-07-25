import React from 'react';
import project_details from '../data/project_details';
import Tag from './Tag';
import '../styles/project.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const Projects = () =>{

  const renderProjects = (project) => {
      return (
        <Card>
        <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src='http://lorempixel.com/600/400/nature/' alt='nature'/>
    </CardMedia>
          <h3>{project.name}</h3>
          <a href={project.code}>View Code</a> 
          <a href={project.hosted}>View Project</a>
          
            {project.technologies.map((item) => 
              <Tag text={item} />)}
          
        </Card>
      );
  }

  return (
    <div className='projects'>
      {project_details.map(renderProjects)}
    </div>
  );
}

export default Projects;