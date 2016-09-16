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
      <div id="bio" className="bio l-box-lrg pure-g">
        <div className="l-box-lrg is-center pure-u-1 pure-u-sm-1-2 pure-u-lg-2-5">
          <img className="pure-img-responsive" src="img/me_circle.png"/>
        </div>
        <div className="pure-u-1 pure-u-sm-1-2 pure-u-lg-3-5">
          <h2 className="content-head content-head-ribbon">Bio.</h2>
          <p>
            Hello and welcome! I'm Barrett Hafner. A 32-year-old web developer living in Portland, OR. I am a graduate of the <a href="http://www.thinkful.com">Thinkful.com</a> bootcamp and do full-stack engineering with Node.js and React.
          </p>
          <p>
            In a my previous career I was a Product Designer/Developer with <a href="http://www.grovemade.com">Grovemade.com</a>, where I designed, prototyped, and manufactured designer, lifestyle goods.
          </p>
          <p>
            I also enjoy blues dancing, building led light sculptures, and making our lives better by making human/technology interfaces more intuative.
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
      <div id="contact" className="content is-center l-box-lrg pure-g">
        <div className="pure-u-1">
          <h2 className="content-head content-head-ribbon">Contact</h2>
          <h3>Thanks for coming! Send me an email if you'd like to get in contact:</h3>
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

      </div>
    );
  }
};

export { Splash, Bio, Contact }
