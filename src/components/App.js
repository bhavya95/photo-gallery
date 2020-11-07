import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import PhotoGallery from './PhotoGallery';
const store = createStore(reducers, applyMiddleware(thunk));
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <PhotoGallery/>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
