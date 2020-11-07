import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Button from './Button';
export default function ErrorView({errorMsg, onPress}) {
  return (
    <>
      <Text style={styles.errorText}>{errorMsg}</Text>
      <Button onPress={onPress} text="Try Again" />
    </>
  );
}
const styles = StyleSheet.create({
  errorText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'tomato',
    textAlign: 'center',
    marginVertical: 30,
  },
});
