import React from 'react';
import { Modal, StyleSheet, View} from 'react-native';
import Button from './Button'
import PinchableBox from './PinchableBox';

const ImageModal = ({open, toggleModal, imageUrl}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={toggleModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalBlock}>
          <Button onPress={toggleModal} text="Close" />
          <PinchableBox imageUrl={imageUrl} />
        </View>
      </View>
    </Modal>
  );
};

export default ImageModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#00000080',
  },
  modalBlock: {
    width: '100%',
    height: '80%',
    backgroundColor: 'white',
    marginTop: 100,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    padding: 16,
  },
});
