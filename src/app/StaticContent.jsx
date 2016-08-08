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
          <p className="splash-subhead">
            A porfolio site showcasing my work.
          </p>
          <p>
            <a href="#" className="pure-button pure-button-primary">Contact Me</a>
          </p>
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
      <div className="ribbon l-box-lrg pure-g">
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
      <div className="content">
        <h2 className="content-head is-center">Contact</h2>

        <div className="pure-g">
          <div className="l-box-lrg pure-u-1 pure-u-md-3-5">
            <section className="text">
              <h2>Thanks for coming!</h2>
              <h3>Contact me by email:</h3>
              <ul className="social">
                <li><Mailto email="barrett@hafnerindustries.com" obfuscate={true}><i className="fa fa-mail"></i></Mailto></li>
              </ul>
              <h3>Say hi to me on these social networks:</h3>
              <ul className="social">
                <li><a className="fa fa-github" href="https://github.com/barretthafner"></a></li>
                <li><a className="fa fa-twitter" href="https://twitter.com/barretthafner"></a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }
};

export { Splash, Bio, Contact }
