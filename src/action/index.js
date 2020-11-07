import * as actionTypes from './types';

export const fetchImages = () => async (dispatch) => {
  try {
    dispatch({type: actionTypes.FETCH_IMAGES_REQUEST});
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const response = await res.json();
    dispatch({type: actionTypes.FETCH_IMAGES_SUCCESS, payload: response});
  } catch (error) {
    dispatch({type: actionTypes.FETCH_IMAGES_ERROR,payload:{message:error.message}});
  }
};
