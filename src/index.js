import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import App from './components/App';
import '../src/Index.css';
import { searchImages,  } from './redux/reducers/index';
import { createLogger } from 'redux-logger'
import thunkMiddlewear from 'redux-thunk'

const rootReducer = combineReducers({ searchImages });
const logger = createLogger()
const store = createStore(rootReducer, applyMiddleware(thunkMiddlewear, logger));
console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
