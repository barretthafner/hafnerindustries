import React from 'react';
import ReactDOM from 'react-dom';
//import { slide } from 'react-burger-menu';
var Menu = require('react-burger-menu').slide;

import { ResponsiveComponent } from "react-responsive-component";

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
        < Example />
        < Header />
        < Splash />
        < NewLayout content={contentData}/>
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
        < Bio />
        < WorkSamples content={this.props.content} />
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
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
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
            this.props.content.MiddleBoxes.map( (item, index) => {
              return <SampleBox title={item.title} description={item.description} icon={item.icon} key={index} />
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

  click() {
    console.log('bammmmm!');
  }

  render() {
    return (
      <div className="l-box pure-u-1 pure-u-md-1-3" onClick={this.click}>
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
          <img src="img/me_circle.png" height="200"/>
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

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="footer l-box is-center">
        Copyright Hafner Industries, LLC 2016
      </div>
    );
  }
};

class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu right >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
};

class MenuBar extends React.Component {
  contructor(props) {
    super(props);
  }

  render() {
    return (
      <nav class="cbp-hsmenu-wrapper" id="cbp-hsmenu-wrapper">
        <div class="cbp-hsinner">
          <ul class="cbp-hsmenu">
            <li>
              <a href="#">Lovely Spirits</a>
              <ul class="cbp-hssubmenu">
                <li><a href="#"><img src="images/1.png" alt="img01"/><span>Delicate Wine</span></a></li>
                <li><a href="#"><img src="images/2.png" alt="img02"/><span>Fine Spirit</span></a></li>
                <li><a href="#"><img src="images/3.png" alt="img03"/><span>Heavenly Ale</span></a></li>
                <li><a href="#"><img src="images/4.png" alt="img04"/><span>Juicy Lemonade</span></a></li>
                <li><a href="#"><img src="images/5.png" alt="img05"/><span>Wise Whiskey</span></a></li>
                <li><a href="#"><img src="images/6.png" alt="img06"/><span>Sweet Rum</span></a></li>
              </ul>
            </li>
            <li>
              <a href="#">Delicious Beverages</a>
              <ul class="cbp-hssubmenu cbp-hssub-rows">
                <li><a href="#"><img src="images/7.png" alt="img07"/><span>Lovely Slurp</span></a></li>
                <li><a href="#"><img src="images/8.png" alt="img08"/><span>Lemony Grappa</span></a></li>
                <li><a href="#"><img src="images/9.png" alt="img09"/><span>Eggy Liquor</span></a></li>
                <li><a href="#"><img src="images/10.png" alt="img10"/><span>Fresh Juice</span></a></li>
                <li><a href="#"><img src="images/1.png" alt="img01"/><span>Delicate Wine</span></a></li>
                <li><a href="#"><img src="images/2.png" alt="img02"/><span>Fine Spirit</span></a></li>
                <li><a href="#"><img src="images/3.png" alt="img03"/><span>Heavenly Ale</span></a></li>
                <li><a href="#"><img src="images/4.png" alt="img04"/><span>Juicy Lemonade</span></a></li>
                <li><a href="#"><img src="images/5.png" alt="img05"/><span>Wise Whiskey</span></a></li>
                <li><a href="#"><img src="images/6.png" alt="img06"/><span>Sweet Rum</span></a></li>
                <li><a href="#"><img src="images/1.png" alt="img01"/><span>Delicate Wine</span></a></li>
                <li><a href="#"><img src="images/2.png" alt="img02"/><span>Fine Spirit</span></a></li>
              </ul>
            </li>
            <li>
              <a href="#">Fine Liquors</a>
              <ul class="cbp-hssubmenu">
                <li><a href="#"><img src="images/10.png" alt="img10"/><span>Fresh Juice</span></a></li>
                <li><a href="#"><img src="images/6.png" alt="img06"/><span>Sweet Rum</span></a></li>
                <li><a href="#"><img src="images/9.png" alt="img09"/><span>Eggy Liquor</span></a></li>
              </ul>
            </li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
};
