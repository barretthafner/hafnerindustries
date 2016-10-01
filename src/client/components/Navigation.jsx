import React from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import { NavLinks } from '../contentData';
import { Link, animateScroll } from 'react-scroll';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  scrollToTop() {
    animateScroll.scrollToTop();
  }

  render() {
    return (
      <div className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
          <a className="pure-menu-heading" onClick={this.scrollToTop}>Hafner Industries</a>

          <ul className="pure-menu-list">
            {
              NavLinks.map( (item, index) => {
                return <NavLink scrollLink={item.scrollLink} name={item.name} key={index} />
              })
            }
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
      <BurgerMenu right >
        {
          NavLinks.map( (item, index) => {
            return <NavLink scrollLink={item.scrollLink} name={item.name} key={index} />
          })
        }
      </BurgerMenu>
    );
  }
};

class NavLink extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="pure-menu-item"><Link to={this.props.scrollLink} duration={500} smooth={true} offset={-70} className="pure-menu-link">{this.props.name}</Link></li>
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

export { NavBar, Burger, Footer }
