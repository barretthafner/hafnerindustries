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

class Bio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="bio" className="ribbon l-box-lrg pure-g">
        <div className="l-box-lrg is-center pure-u-1 pure-u-sm-1-2 pure-u-lg-2-5">
          <img className="pure-img-responsive" src="img/me_circle.png"/>
        </div>
        <div className="pure-u-1 pure-u-sm-1-2 pure-u-lg-3-5">
          <h2 className="content-head content-head-ribbon">Bio.</h2>
          <p>
            This is where the Bio goes.
          </p>
        </div>
      </div>
    );
  }
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="contact" className="content is-center">
        <h2 className="content-head">Contact</h2>



            <h2 className="contact-thanks">Thanks for coming!</h2>
            <h3>Send me an email:</h3>
            <div>
              <Mailto email="barrett@hafnerindustries.com" obfuscate={true}><i className="fa fa-envelope" aria-hidden="true"></i></Mailto>
              <p>barrett@<span className="displaynone">null</span>hafnerindustries.com</p>
            </div>
            <h3>Or, say hello to me on these social networks:</h3>
            <div>
              <a className="fa fa-github" href="https://github.com/barretthafner"></a>
              <a className="fa fa-twitter" href="https://twitter.com/barretthafner"></a>
            </div>

      </div>
    );
  }
};

export { Splash, Bio, Contact }
