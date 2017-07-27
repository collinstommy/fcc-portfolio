import React, { Component } from 'react';
import Description from './components/Description';
import Title from './components/Title';
import SectionTitle from './components/SectionTitle';
import Projects from './components/Projects';
import './styles/portfolio.css';

class Portfolio extends Component {
  render() {
    return (
        <div className="container">
          <Title />
          <Description />
          <SectionTitle />
          <Projects />
        </div>
    );
  }
}

export default Portfolio;
