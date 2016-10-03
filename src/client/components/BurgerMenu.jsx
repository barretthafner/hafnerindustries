import React from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import { NavLinks } from '../../seed';
import { Link } from 'react-scroll';

class Burger extends React.Component {

  render() {
    return (
      <BurgerMenu right width={260} >
        {
          NavLinks.map( (item, index) => {
            return (
              <li className='bm-link' key={index}>
                <Link to={item.scrollLink} duration={500} smooth={true} offset={-70}>
                  {item.name}
                </Link>
              </li>
            );
          })
        }
      </BurgerMenu>
    );
  }
};

export default Burger
