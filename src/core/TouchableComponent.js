import React, {
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

const TouchableComponent =
  Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight;

module.exports = TouchableComponent;
