import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Things from './assets/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(Things)
    });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderListRow}
      />
    );
  }

  renderListRow(thing) {
    return (
      <View>
        <Text style={styles.title}>{thing.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    margin: 4
  }
});

export default App;
