import React, { Component } from 'react';
import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HTMLView from 'react-native-htmlview'

class Details extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <HTMLView
              value={this.props.content}
              onLinkPress={(url) => Linking.openURL(url).catch(err => console.error('Error opening url: ' + url, err))}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 8
  }
});

export default Details;
