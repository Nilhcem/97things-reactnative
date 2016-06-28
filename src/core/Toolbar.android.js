import React, { Component } from 'react';
import {
  StyleSheet,
  ToolbarAndroid
} from 'react-native';

class Toolbar extends Component {
  render() {
    return (
      <ToolbarAndroid style={styles.toolbar} {...this.props}>
        {this.props.children}
      </ToolbarAndroid>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#03A9F4',
    height: 60,
  }
});

export default Toolbar;
