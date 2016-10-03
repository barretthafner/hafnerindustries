import React from 'react';
import { NavLinks } from '../../seed';
import { Link, animateScroll } from 'react-scroll';

import { connect } from 'react-redux';
import * as actions from '../actions';

class NavBar extends React.Component {

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
                return (
                  <li className="pure-menu-item" key={index}>
                    <Link to={item.scrollLink} duration={500} smooth={true} offset={-70} className="pure-menu-link">{item.name}</Link>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
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
