import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  View
} from 'react-native';

import Toolbar from '../core/Toolbar';
import MainList from './MainList';

class MainListScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar title="97 things" />
        <MainList {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default MainListScreen;
