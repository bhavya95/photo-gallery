import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';
const {width: DEVICE_WIDTH} = Dimensions.get('window');

export default function ImageCard({onPress, isGridView, url, title}) {
  return (
    <View style={styles.imageCard}>
      <TouchableOpacity onPress={onPress}>
        <FastImage
          style={isGridView ? styles.gridImage : styles.verticalImage}
          source={{uri: url}}
          resizeMode={FastImage.resizeMode.contain}
          fallback={Platform.OS === 'android'}
        />
      </TouchableOpacity>
      <Text style={styles.imageTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageCard: {
    flex: 1,
    marginVertical: 10,
    alignItems: 'center',
  },
  imageTitle: {
    width: '70%',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 8,
  },
  gridImage: {
    width: DEVICE_WIDTH / 2.5,
    height: DEVICE_WIDTH / 2.5,
  },
  verticalImage: {
    width: DEVICE_WIDTH * 0.6,
    height: 300,
  },
});
