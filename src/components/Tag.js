import React from 'react';
import '../styles/project.css';

const Tag = (props) =>{

  

  return (
    <div className='tag'>
      {props.text}
    </div>
  );
}

export default Tag;