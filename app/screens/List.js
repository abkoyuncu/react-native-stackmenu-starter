import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';

import axios from 'axios';
import ListItem from '../components/ListItem';

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 1,
          title: 'item1',
          description: 'item1',
          thumbnail: 'https://img.jpg'
        },
        {
          id: 2,
          title: 'item2',
          description: 'item2',
          thumbnail: 'https://img.jpg'
        },
        {
          id: 3,
          title: 'item3',
          description: 'item3',
          thumbnail: 'https://img.jpg'
        }
      ]
    }
  }



  _renderItem = ({item}) => (
    <ListItem
      id={item.id}
      title={item.name}
      author={item.team}
      thumbnail={item.thumbnail}
    />
  );

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <FlatList
          data={this.state.items}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});