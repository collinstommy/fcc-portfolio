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
     <p>Completed the Front End Certificate for the Freecodecamp.com curriculum. The course 
       focuses on technologies including HTML, CSS, SCSS, React, Node, and Express. 
       Examples of the projects completed can be seen above.
     </p>
      <i className="fa fa-arrow-down fa-2x" aria-hidden="true"></i>
    <h5>Front End Developer - DocumentationHQ </h5>
     <p>
       My current cole is working as the frontend developer for a document management application. 
       The client is written in React using redux, react-router and react-bootstrap. 
       The backend is written in C# using ServiceStack with mongoDB as the database. 
       Together with my team I work on all React components including CSS and intergrating with our backend API.
       I also assist in API design as well as backend development.</p>
      
  </div>
);
}

export default Experience;