import { createStore, compose, applyMiddleware } from 'redux';
import quizz from '../Middleware/middleware';
import reducer from '../Reducer/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(quizz)
);

const store = createStore(
    reducer,
    enhancers,
);

export default store;