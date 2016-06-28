import React, { Component } from 'react';
import {
  Navigator,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

import Colors from './core/Colors';
import MainListScreen from './list/MainListScreen';
import DetailsScreen from './detail/DetailsScreen';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.primaryDark} barStyle="light-content" />
        <Navigator
          style={{ flex:1 }}
          initialRoute={{ name: 'Main' }}
          renderScene={ this.renderScene } />
      </View>
    );
  }

  renderScene(route, navigator) {
    switch (route.name) {
      case 'Main':
        return <MainListScreen navigator={navigator} />
      case 'Details':
        return <DetailsScreen navigator={navigator} {...route.passProps} />
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
