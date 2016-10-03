import React from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import { NavLinks } from '../../seed';
import { Link, animateScroll } from 'react-scroll';

class Burger extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BurgerMenu right width={260} >
        {
          NavLinks.map( (item, index) => {
            return <BurgerLink scrollLink={item.scrollLink} name={item.name} key={index} />
          })
        }
      </BurgerMenu>
    );
  }
};

class BurgerLink extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className='bm-link'><Link to={this.props.scrollLink} duration={500} smooth={true} offset={-70}>{this.props.name}</Link></li>
    );
  }
};

export default Burger
