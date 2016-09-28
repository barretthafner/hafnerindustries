import React from 'react';
import Mailto from 'react-mailto';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-container">
        <div className="splash">
          <img height="200" src="img/hi_logo.svg" />
          <h3 className="splash-lead">Welcome to</h3>
          <h1 className="splash-head">Hafner Industries</h1>
          <div className="splash-subhead">
            A porfolio site showcasing my work.
          </div>
          <div className="splash-button-container">
            <a href="#contact"><div className="splash-button pure-button pure-button-primary">Contact Me</div></a>
          </div>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
};


export default Splash
