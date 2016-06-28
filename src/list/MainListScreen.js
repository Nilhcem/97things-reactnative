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
        <Toolbar title="97 things" style={styles.toolbar} />
        <MainList {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  toolbar: {
    backgroundColor: '#03A9F4',
    height: 60,
  }
});

export default MainListScreen;
