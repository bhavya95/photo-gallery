import React, { useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchImages} from '../action';
import Button from './Button';
import ErrorView from './ErrorView';
import ImageCard from './ImageCard';
import ImageModal from './ImageModal';
import LoadingView from './LoadingView';

export default function PhotoGallery() {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);
  const [isGridView, setView] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [openModal, setModal] = useState(false);

  useEffect(() => {
    getImages();
  }, []);

  const onPressImage = (url) => {
    setImageUrl(url);
    setModal(true);
  };

  const getImages = () => {
    dispatch(fetchImages());
  };

  const renderListItem = ({item}) => (
    <ImageCard
      onPress={() => onPressImage(item.url)}
      isGridView={isGridView}
      url={item.url}
      title={item.title}
    />
  );

  const toggleModal = () => setModal((currentState) => !currentState);

  const toggleView = () => setView((changed) => !changed);

  const gridKeyExtractor = (item) => `${item.id}`;

  const verticalKeyExtractor = (item) => item.title;

  return (
    <>
      <Text style={styles.headerText}>PhotoGallery</Text>

      {images.isLoading && <LoadingView />}

      {images.isError && (
        <ErrorView onPress={getImages} errorMsg={images.data.message} />
      )}
      {images.isSuccess && (
        <>
          <Button
            onPress={toggleView}
            text={`Change to ${isGridView ? 'Vertical' : 'Grid'} View`}
          />

          {isGridView ? (
            <FlatList
              data={images.data}
              numColumns={2}
              renderItem={renderListItem}
              keyExtractor={gridKeyExtractor}
              key="-"
              initialNumToRender={10}
            />
          ) : (
            <FlatList
              key="#"
              data={images.data}
              numColumns={1}
              renderItem={renderListItem}
              keyExtractor={verticalKeyExtractor}
              initialNumToRender={10}
            />
          )}
          <ImageModal
            open={openModal}
            toggleModal={toggleModal}
            imageUrl={imageUrl}
          />
        </>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    textAlign: 'center',
  },
});
