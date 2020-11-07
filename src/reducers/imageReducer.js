import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR,
} from '../action/types';
const initialState = {
  data: [],
  isSuccess: false,
  isError: false,
  isLoading: false,
};
const images = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_REQUEST:
      return {...initialState, isLoading: true};
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        data:[...action.payload],
        isSuccess: true,
        isLoading: false,
      };
    case FETCH_IMAGES_ERROR:
      return {
        ...state,
        data: {...action.payload},
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default images;
