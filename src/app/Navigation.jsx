import React from 'react';
import { slide as Menu } from 'react-burger-menu';


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

class Burger extends React.Component {
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

export { Header, Burger, Footer }
