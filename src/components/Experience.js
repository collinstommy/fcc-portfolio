import React from 'react';
import '../styles/portfolio.css';

const Experience = () => {

return (
  <div className='experience'>
    <h5>Msc Computing Science - UCC</h5>
    <i className="fa fa-arrow-down fa-2x" aria-hidden="true"></i>
     <h5>Fixed Income IT - Credit Suisse London</h5>
     <p>Created and maintained trade systems written in C# working 
       in conjunction with traders. Maintained and updated batch scripts written in Perl and SQL.
       Having indepth knowledge of certain areas of the sysem, I assisted with application support for 
       business users.</p>
    <i className="fa fa-arrow-down fa-2x" aria-hidden="true"></i>
    <h5> .NET Framework - Credit Suisse London</h5>
     <p>Helped create the bank's .NET Framework written in C#. The framework provided configuration,
       messaging, settings and deployment packages amoungst others. 
       We used the scrum software development lifecycle for this project. A strict set of coding
       standards were adhered to and all code required 100% test coverage.
     </p>
      <i className="fa fa-arrow-down fa-2x" aria-hidden="true"></i>
    <h5> Javascript - Freecodecamp </h5>
     <p>I am currently undertaking the Freecodecamp.com curriculum to futher develop my web development skills. The course 
       focuses on technologies including HTML, CSS, SCSS, React, Node, Express and D3. I have completed
       90% of the first certificate (Front End Web Development) and also parts of the Data Visualisation
       and Back End certificates. Examples of the projects completed can be seen above.

     </p>
    
  </div>
);
}

export default Experience;