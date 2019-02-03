import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Button from './button.js';

const MemoItem = (props) => {
  const {
    text,
    onDelete,

  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.text} >{text}</Text>
      </View>
      <Button
        style={styles.button_delete}
        onPress={onDelete}
        >
          Delete
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    backgroundColor: '#FFF',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    paddingRight: 6,
    marginBottom: 10,
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#333',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button_delete: {
    borderRadius: 4,
    backgroundColor: '#FF3B30',
  },
})

export default MemoItem;
