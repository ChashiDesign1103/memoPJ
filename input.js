import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.ref = {};
  }

  _onPress = () => {
    this.props.onPress(this.ref._lastNativeText);
    this.ref.setNativeProps({ text:''});
  }


  render() {
    const {
      onPress,
    } = this.props;

    return (
      <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            ref={(ref) => {this.ref = ref; }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this._onPress}
          >
            <Text style={styles.buttonText}>追加</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  textInput: {
    flex: 3,
    backgroundColor: '#FFF',
    borderRadius: 50,
    marginRight: 10,
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
