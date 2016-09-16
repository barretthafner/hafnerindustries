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
          <h1 className="splash-head">Welcome to <br></br> Hafner Industries</h1>
          <div className="splash-subhead">
            A porfolio site showcasing my work.
          </div>
          <div className="splash-button-container">
            <Mailto email="barrett@hafnerindustries.com" obfuscate={true}><div className="splash-button pure-button pure-button-primary">Contact Me</div></Mailto>
          </div>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
};


export default Splash
