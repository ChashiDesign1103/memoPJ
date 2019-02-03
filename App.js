/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  } from 'react-native';
import Input from './input.js';
import MemoItem from './item.js';


export default class App extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  _delete = (index) => () => {
    const list = [].concat(this.state.list);
    list.splice(index, 1);

    this.setState({
      list,
    });
  }

  _onPress = (text) => {
    const list = [].concat(this.state.list);

    list.push({
      key: Date.now(),
      text: text,
      done: false,
      });

    this.setState({
      list,
    });
  }

  render() {
    const {
      list,
    } = this.state;

      return (
      <View style={styles.container}>
          <View style={styles.main}>
            <Input onPress={this._onPress} />
            <View style={styles.listContainer}>
              <FlatList
                style={styles.memoList}
                data={list}
                renderItem={({ item, index }) => (
                  <MemoItem
                    onDelete={this._delete(index)}
                    {...item}
                  />
                )}
               />
            </View>
          </View>
      </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingTop: 40,
    alignItems: 'center',
  },
  main: {
    flex: 1,
    maxWidth: 400,
    alignItems: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    flex: 1,

  },
  memoList: {
    borderRadius: 16,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
