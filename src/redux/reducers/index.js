import { CHANGE_SEARCH_FIELD } from '../constants/index';
import { ON_SEARCH_SUBMIT } from '../constants/index';

const initialState = {
  searchField: '',
};

export const searchImages = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload.text };
    case ON_SEARCH_SUBMIT:
      return { ...state, images: action.payload.images };
    default:
      return state;
  }
};
