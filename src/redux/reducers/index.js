import { CHANGE_SEARCH_FIELD } from '../constants/index';

const initialState = {
  searchField: '',
};

export const searchImages = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload.searchField };
    default:
      return state;
  }
};
