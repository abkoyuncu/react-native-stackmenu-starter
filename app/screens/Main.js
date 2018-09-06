import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text>
0.5          </Text>
        </View>
        <View style={styles.box2}>
          <Text>
2 column          </Text>
        </View>
        <View style={styles.box3}>
          <Text>
4 column          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start', //replace with flex-end or center
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  box: {
    width: 100,
    height: 100
  },
  box1: {
    flex: .5,
    backgroundColor: '#2196F3'
  },
  box2: {
    flex: 2,

    backgroundColor: '#8BC34A'
  },
  box3: {
    flex: 4,

    backgroundColor: '#e3aa1a'
  }
});