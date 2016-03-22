import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
//import Reducers from '../reducers/index';

const middleware = [logger()];

export default () => {
  return compose(
    applyMiddleware(...middleware)
  )(createStore)(Reducers);
};
