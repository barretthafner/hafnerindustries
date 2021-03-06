import React from 'react';
import { Link } from 'react-scroll';

class Splash extends React.Component {

  render() {
    return (
      <div className="splash-container">
        <div className="splash">
          <img height="200" src="imgs/hi_logo.svg" />
          <h3 className="splash-lead">Welcome to</h3>
          <h1 className="splash-head">Hafner Industries</h1>
          <div className="splash-subhead">
            A porfolio site showcasing my work.
          </div>
          <div className="splash-button-container">
            <Link to="contactScroll" duration={500} smooth={true} offset={-70}><div className="splash-button pure-button pure-button-primary">Contact Me</div></Link>
          </div>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
};

export default Splash
