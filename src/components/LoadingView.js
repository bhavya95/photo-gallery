import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function LoadingView() {
  return <Text style={styles.loadingText}>Loading...</Text>;
}

const styles = StyleSheet.create({
  loadingText: {
    marginVertical: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ccc',
    textAlign: 'center',
  },
});
