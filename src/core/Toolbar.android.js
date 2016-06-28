import React, { Component } from 'react';
import {
  ToolbarAndroid
} from 'react-native';

class Toolbar extends Component {
  render() {
    return (
      <ToolbarAndroid {...this.props}>
        {this.props.children}
      </ToolbarAndroid>
    );
  }
}

export default Toolbar;
