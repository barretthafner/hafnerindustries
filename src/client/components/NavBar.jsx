import React from 'react';
import { NavLinks } from '../../seed';
import { Link, animateScroll } from 'react-scroll';

import { connect } from 'react-redux';
import * as actions from '../actions';

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

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLocation: () => {
      dispatch(actions.changeLocation());
    }
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(NavBar);
export default Container
