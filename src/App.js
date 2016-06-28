import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

import MainListScreen from './list/MainListScreen';
import DetailsScreen from './detail/DetailsScreen';

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
        return <MainListScreen navigator={navigator} />
      case 'Details':
        return <DetailsScreen navigator={navigator} {...route.passProps} />
    }
  }
}

export default App;
