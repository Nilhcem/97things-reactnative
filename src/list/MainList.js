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
      <TouchableComponent onPress={() => this.props.onItemSelected(thing)}>
        <View>
          <Text style={styles.title}>{thing.title}</Text>
        </View>
      </TouchableComponent>
    );
  }

  fetchData() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(require('../../assets/data.json'))
    });
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 8,
    marginRight: 8
  }
});

export default MainList;
