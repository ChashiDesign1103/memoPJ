import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class TodoInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>追加</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
  },
  textInput: {
    flex: 3,
    backgroundColor: '#FFF',
    borderRadius: 50,
    marginRight: 5,
    paddingLeft: 12,
  },
  button: {
    flex: 1,
    backgroundColor: '#1D77F2',
    borderRadius: 50,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '500',
  }
});
