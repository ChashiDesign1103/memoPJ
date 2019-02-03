import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const Button = (props) => {
  const {
    onPress,
    children,
    style,
    textStyle
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
    >
      <Text style={[styles.textStyle, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#008080',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
  },
});

export default Button;
