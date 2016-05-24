import React, { Component } from 'react';
import {
  BackAndroid,
  ScrollView,
  Text
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
      <ScrollView>
        <Text>{this.props.thing.title}, by {this.props.thing.from}
          {this.props.thing.desc}
        </Text>
      </ScrollView>
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
