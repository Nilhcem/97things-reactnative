import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

import HTMLView from 'react-native-htmlview'

class Details extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <HTMLView value={this.props.content} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF'
  }
});

export default Details;
