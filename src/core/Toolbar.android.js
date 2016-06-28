import React, { Component } from 'react';
import {
  StyleSheet,
  ToolbarAndroid
} from 'react-native';

import Colors from './Colors';

class Toolbar extends Component {
  render() {
    return (
      <ToolbarAndroid titleColor="white" style={styles.toolbar} {...this.props}>
        {this.props.children}
      </ToolbarAndroid>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: Colors.primary,
    height: 60,
  }
});

export default Toolbar;
