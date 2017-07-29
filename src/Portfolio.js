import React, { Component } from 'react';
import Description from './components/Description';
import Title from './components/Title';
import SectionTitle from './components/SectionTitle';
import Projects from './components/Projects';
import Network from './components/Network';
import Experience from './components/Experience';
import './styles/portfolio.css';

class Portfolio extends Component {
  render() {
    return (
        <div className="container">
          <Title />
          <Description />
          <SectionTitle title='Projects' styleID='project' />
          <Projects />
           <SectionTitle title='Experience' styleID='experience' />
          <Experience />
          <SectionTitle title='Network & Skills' styleID='info' />
          <Network />
          
        </div>
    );
  }
}

export default Portfolio;
