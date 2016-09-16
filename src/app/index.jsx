import React from 'react';
import ReactDOM from 'react-dom';

import { Header, Burger, Footer } from  './Navigation';

import Splash from './Splash';
import Bio from './Bio';
import WorkSamples from './WorkSamples';
import Contact from "./Contact";


class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        < Header />
        < Burger />
        < Splash />
        <div className="content-wrapper">
          < Bio />
          < WorkSamples />
          < Contact />
          < Footer />
        </div>
      </div>
    );
  }
};



document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Main />,
    document.getElementById('app')
  );
});
