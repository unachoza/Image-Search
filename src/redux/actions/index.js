import { CHANGE_SEARCH_FIELD } from '../constants/index';
import { ON_SEARCH_SUBMIT } from '../constants/index';
import axios from 'axios';

export const onSearchSubmit = (e, state) => async dispatch => {
  e.preventDefault()
  console.log(state)
  
  let response = await axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
      Authorization: 'Client-ID 6b7198ae94debdaaa4a572ff5548c06da0c748f53dd039de22f8d80eb85188b7',
    },
    params: {
      query:  state,
    },
  });
  console.log(  response.data)
  response = response.data

  dispatch({
    type: ON_SEARCH_SUBMIT,
    payload: {
      images: response,
    },
  });
};

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: {text}
});
