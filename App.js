/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import Inputs from './input.js';


export default class App extends Component<{}> {
  render() {
    return (
      <View >
      <Inputs />
      </View>
      );
    }
}
