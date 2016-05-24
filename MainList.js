import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import F8Touchable from './F8Touchable.js';
import Things from './assets/data.json';

class MainList extends Component {
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
        renderRow={this.renderRow}
      />
    );
  }

  renderRow(thing) {
    return (
      <F8Touchable
        onPress={() => console.log("OK")}
      >
        <View>
          <Text style={styles.title}>{thing.title}</Text>
        </View>
      </F8Touchable>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    margin: 4
  }
});

export default MainList;
