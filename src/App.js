import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import MainList from './list/MainList.js';
import Details from './detail/Details.js';

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

AppRegistry.registerComponent('nsthings', () => App);
