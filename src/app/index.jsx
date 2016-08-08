import React from 'react';
import ReactDOM from 'react-dom';

import { MiddleBoxes } from './contentData';

import { Header, Burger, Footer } from  './Navigation';
import { Splash, Bio, Contact } from './StaticContent';
import WorkSamples from './WorkSamples';


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
          < WorkSamples content={ MiddleBoxes } />
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










