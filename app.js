import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

import MainList from './MainList.js';
import Details from './Details.js';

class App extends Component {
  render() {
    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ name: 'Main' }}
        renderScene={ this.renderScene } />
    );
  }

  renderScene(route, navigator) {
    switch (route.name) {
      case 'Main':
        return <MainList navigator={navigator} />
      case 'Details':
        return <Details navigator={navigator} {...route.passProps} />
    }
  }
}

export default App;
