import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Toolbar extends Component {
  render() {
    return (
      <View style={[styles.header, this.props.style]}>
          <Text>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
    },
});

export default Toolbar;
