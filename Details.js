import React, { Component } from 'react';
import {
  BackAndroid,
  Text,
  View
} from 'react-native';

class Details extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
  }

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.back);
  }

  render() {
    return (
      <Text>{this.props.thing.title}, by {this.props.thing.from}
        {this.props.thing.desc}
      </Text>
    );
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.back);
  }

  back() {
    this.props.navigator.pop();
    return true;
  }
}

export default Details;
