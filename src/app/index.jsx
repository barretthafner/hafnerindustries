import React from 'react';
import ReactDOM from 'react-dom';

const contentData = {
  MiddleBoxes: [
    {
      title: "Custom Apps",
      description: "Examples of different custom apps that I have built",
      icon: "mobile"
    },
    {
      title: "Plugins",
      description: "Examples of plugins for various purposes",
      icon: "th-large"
    },
    {
      title: "Fun Stuff",
      description: "Some fun, random projects",
      icon: "rocket"
    },

  ]
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Main />,
    document.getElementById('app')
  );
});

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        < Header />
        < Splash />
        < NewLayout content={contentData}/>
      </div>
    );
  }
};

class Old extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="content">
        <section className="masthead">
          <img className="logo" src="/img/hi_logo_small.svg" alt="Hafner Industries" width="110" />
          <p className="masthead-intro">Welcome to</p>
          <h1 className="masthead-heading">Hafner Industries</h1>
        </section>


      </div>
    );
  }
};

class NewLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="content-wrapper">
        < WorkSamples content={this.props.content} />
        < Bio />
        < Contact />
        < Footer />
      </div>
    );
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
          <a className="pure-menu-heading" href="">Hafner Industries</a>

          <ul className="pure-menu-list">
            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Work</a></li>
            <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact</a></li>
          </ul>
        </div>
      </div>
    );
  }
};

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
            <a href="http://purecss.io" className="pure-button pure-button-primary">Contact Me</a>
          </p>
        </div>
      </div>
    );
  }
};

class WorkSamples extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="content">
        <h2 className="content-head is-center">Work Samples</h2>

        <div className="pure-g">
          {
            this.props.content.MiddleBoxes.map( (item) => {
              return <SampleBox title={item.title} description={item.description} icon={item.icon}/>
            })
           }
        </div>
      </div>
    );
  }
};

class SampleBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
        <h3 className="content-subhead">
          <i className={ "fa fa-" + this.props.icon }></i>
          {this.props.title}
        </h3>
        <p>
          {this.props.description}
        </p>
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
        <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
        </div>
        <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">
          <h2 className="content-head content-head-ribbon">Bio.</h2>
          <p>
              This is where the Bio goes.
          </p>
        </div>
      </div>
    );
  }
}

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
            <h2>The website is under construction.</h2>
            <h2>Please come again soon!</h2>
            <h3>Until then, say hi to me on these social networks:</h3>
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

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer l-box is-center">
        Copyright Hafner Industries, LLC 2016
      </div>
    );
  }
};
