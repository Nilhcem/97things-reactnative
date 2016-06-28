import React, { Component } from 'react';
import {
  BackAndroid,
  Navigator,
  StyleSheet,
  View
} from 'react-native';

import Toolbar from '../core/Toolbar';
import Details from './Details';

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
  }

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.back);
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          title={this.props.thing.title}
          navIcon={require('../../assets/arrow_back.png')}
          onIconClicked={this.back} />
        <Details content={this.props.thing.desc} />
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default DetailsScreen;
