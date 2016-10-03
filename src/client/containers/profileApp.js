import React, { Component } from 'react';
import { Element } from 'react-scroll';

import NavBar from '../components/NavBar';
import Burger from '../components/BurgerMenu';
import Footer from  '../components/Footer';
import Splash from '../components/Splash';
import Bio from '../components/Bio';
import WorkSamples from '../components/WorkSamples';
import Contact from "../components/Contact";

export default class ProfileApp extends Component {

  render() {
    return(
      <div>
        < NavBar />
        < Burger />
        {/*< Splash />*/}
        <div className='content-wrapper'>
          <Element name='bioScroll'>
            < Bio />
          </Element>
          <Element name='workScroll'>
            < WorkSamples />
          </Element>
          <Element name='contactScroll'>
            < Contact />
          </Element>
          < Footer />
        </div>
      </div>
    );
  }
};
