import React, { Component } from 'react';
import Projects from './components/Projects'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Portfolio extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Projects />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Portfolio;
