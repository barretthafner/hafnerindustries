import React from 'react';
import { Provider } from 'react-redux';

import ProfileApp from './profileApp'
import DevTools from './DevTools';

export default class Root extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <ProfileApp />
          <DevTools />
        </div>
      </Provider>
    );
  }
}
