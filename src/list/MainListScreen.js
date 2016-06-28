import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  View
} from 'react-native';

import Colors from '../core/Colors';
import Toolbar from '../core/Toolbar';
import MainList from './MainList';

class MainListScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar title="97 things" />
        <MainList onItemSelected={this.onItemSelected.bind(this)} />
      </View>
    );
  }

  onItemSelected(item) {
    this.props.navigator.push({
      name: 'Details',
      passProps: {
        thing: item
      }
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  }
});

export default MainListScreen;
