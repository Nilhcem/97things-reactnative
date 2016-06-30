import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Colors from './Colors';

class Toolbar extends Component {
  render() {
    return (
      <View style={[styles.header, this.props.style]}>
          <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        backgroundColor: Colors.primary
    },
    title: {
        textAlign: 'center',
        color: 'white',
        paddingTop: 28,
        paddingBottom: 14
    }
});

export default Toolbar;
