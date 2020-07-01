import React from 'react';
import { Provider } from 'react-redux';

import Sidebar from '../src/components/Sidebar';
import Player from '../src/components/Player';

import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Player />
        <Sidebar />
      </Provider>
    );
  }
}

export default App;
