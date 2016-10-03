import React from 'react';
import ReactDOM from 'react-dom';
import { Element } from 'react-scroll';

import { Provider } from 'react-redux';
import { store } from './store';

import NavBar from './components/NavBar';
import Burger from './components/BurgerMenu';
import Footer from  './components/Footer';
import Splash from './components/Splash';
import Bio from './components/Bio';
import WorkSamples from './components/WorkSamples';
import Contact from "./components/Contact";


class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        < NavBar />
        < Burger />
        < Splash />
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



document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={store}>
      <Main />
    </Provider>,
    document.getElementById('app')
  );
});
