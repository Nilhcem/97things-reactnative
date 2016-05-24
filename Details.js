import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

class Details extends Component {
  render() {
    return (
      <Text>{this.props.thing.title}, by {this.props.thing.from}
        {this.props.thing.desc}
      </Text>
    );
  }
}

export default Details;
