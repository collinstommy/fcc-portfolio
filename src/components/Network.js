import React from 'react';
import '../styles/portfolio.css';

const Network = () => {

return (

  <div className='listView'>
    <div className='listItem'>
      <h5>Network</h5>
        <a href='mailto:tomascollins@gmail.com'>Email: tomascollins@gmail.com</a><br />
        <a href='github.com/collinstommy'>Github</a><br />
        <a href='freecodecamp.com/collinstommy'>freecodecamp</a><br />
        <a href='codepen.com/collinstommy'>codepen</a><br />
        <a href='linkedin.com/collinstommy'>linkedin</a><br />
    </div>
      <div className='listItem'>
        <h5>Skills</h5>
        C#<br />
        Javascript<br />
        React<br />
        SQL<br />
        Node<br />
        Express<br />
    </div>
  </div>
);
}

export default Network;