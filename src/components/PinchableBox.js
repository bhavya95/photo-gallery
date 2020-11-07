import React, {useRef} from 'react';
import {Animated, Platform, View, StyleSheet} from 'react-native';
import {
  gestureHandlerRootHOC,
  PinchGestureHandler,
  State,
} from 'react-native-gesture-handler';

function PinchableBox({imageUrl}) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPinchEvent = Animated.event(
    [
      {
        nativeEvent: {scale: scale},
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  const onPinchStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.imageContainer}>
      <PinchGestureHandler
        onGestureEvent={onPinchEvent}
        onHandlerStateChange={onPinchStateChange}>
        <Animated.Image
          source={{uri: imageUrl}}
          style={{
            width: '75%',
            height: '75%',
            transform: [{scale: scale}],
          }}
        />
      </PinchGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {justifyContent: 'center', alignItems: 'center'},
});

export default PinchableWrapper =
  Platform.OS === 'ios' ? PinchableBox : gestureHandlerRootHOC(PinchableBox);
