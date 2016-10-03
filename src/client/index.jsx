import React from 'react';
import { render } from 'react-dom';

import store from './store';
import Root from './containers/Root';

document.addEventListener('DOMContentLoaded', function() {
  render(
    <Root store={store} />,
    document.getElementById('root')
  );
});
