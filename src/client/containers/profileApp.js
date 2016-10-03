import React from 'react';
import { Element } from 'react-scroll';

import NavBar from '../components/NavBar';
import Burger from '../components/BurgerMenu';
import Footer from  '../components/Footer';
import Splash from '../components/Splash';
import Bio from '../components/Bio';
import WorkSamples from '../components/WorkSamples';
import Contact from "../components/Contact";

import { WorkSamplesContent } from '../../seed';

export default class ProfileApp extends React.Component {

  render() {
    return(
      <div>
        < NavBar />
        < Burger />
        {/*< Splash />*/}
        {/* <div className='content-wrapper'> */}
          <Element name='bioScroll'>
            < Bio />
          </Element>
          <Element name='workScroll'>
            < WorkSamples samples={WorkSamplesContent[0].samples} title={WorkSamplesContent[0].title} />
            < WorkSamples samples={WorkSamplesContent[1].samples} title={WorkSamplesContent[1].title}/>
            < WorkSamples samples={WorkSamplesContent[2].samples} title={WorkSamplesContent[2].title}/>
          </Element>
          <Element name='contactScroll'>
            < Contact />
          </Element>
          < Footer />
          {/* </div> */}
      </div>
    );
  }
};
