import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AppData from './assets/data.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      things: AppData
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.things[0].title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default App;
