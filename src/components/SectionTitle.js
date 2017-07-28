import React from 'react';
import '../styles/portfolio.css';

const SectionTitle = (props) => {

  return (
      <div className={`${props.styleID}-title`}>
        <h3>{props.title}</h3>
      </div>
  );

}

export default SectionTitle;