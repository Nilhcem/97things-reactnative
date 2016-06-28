import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TouchableComponent from '../core/TouchableComponent';

class MainList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };

    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        initialListSize={97}
        renderRow={this.renderRow}
      />
    );
  }

  renderRow(thing) {
    return (
      <TouchableComponent onPress={() => this.pressRow(thing)}>
        <View>
          <Text style={styles.title}>{thing.title}</Text>
        </View>
      </TouchableComponent>
    );
  }

  pressRow(thing) {
    this.props.navigator.push({
      name: 'Details',
      passProps: {
        thing: thing
      }
    })
  }

  fetchData() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(require('../../assets/data.json'))
    });
  }
}

const styles = StyleSheet.create({
  title: {
    margin: 4
  }
});

export default MainList;
