import React from 'react';
import { Text, Pressable, StyleSheet} from 'react-native';

export default function Button({onPress, text}) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 16,
    width: 180,
    height: 40,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    alignSelf: 'center',
  },
  buttonText: {color: 'white'},
});
