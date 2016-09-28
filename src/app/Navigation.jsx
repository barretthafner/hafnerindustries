import React from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import { NavLinks } from './contentData';
import { Link } from 'react-scroll';

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
            {
              NavLinks.map( (item, index) => {
                // return <li className="pure-menu-item" key={index} ><a href={item.link} className="pure-menu-link">{item.name}</a></li>
                return <HeaderLink scrollLink={item.scrollLink} name={item.name} key={index} />
              })
            }
          </ul>
        </div>
      </div>
    );
  }
};

class HeaderLink extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="pure-menu-item"><Link to={this.props.scrollLink} duration={500} smooth={true} className="pure-menu-link">{this.props.name}</Link></li>
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
            return <a className="menu-item" href={item.link} key={index}>{item.name}</a>
          })
        }
      </BurgerMenu>
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
