import React, { Component } from 'react';
import {
  BackAndroid,
  ScrollView,
  Text
} from 'react-native';

import HTMLView from 'react-native-htmlview'

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
        <HTMLView value={this.props.thing.desc} />
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
