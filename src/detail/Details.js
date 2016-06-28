import React, { Component } from 'react';
import {
  ScrollView,
  Text
} from 'react-native';

import HTMLView from 'react-native-htmlview'

class Details extends Component {
  render() {
    return (
      <ScrollView>
        <HTMLView value={this.props.content} />
      </ScrollView>
    );
  }
}

export default Details;
