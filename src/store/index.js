import {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers';
import rootSaga from '../sagas';

export const history = createBrowserHistory();
const connectRouterHistory = connectRouter(history);
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

function configureStoreProd(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    sagaMiddleware,
    reactRouterMiddleware,
  ];
  const persistedReducer = persistReducer(persistConfig, createRootReducer(history));

  sagaMiddleware.run(rootSaga);

  const store = createStore(
    persistedReducer, // persisted reducer with router state
    initialState,
    compose(applyMiddleware(...middlewares))
  );
  const persistor = persistStore(store);

  return { store, persistor };
}

function configureStoreDev(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    reduxImmutableStateInvariant(),
    sagaMiddleware,
    reactRouterMiddleware,
  ];
  const persistedReducer = persistReducer(persistConfig, createRootReducer(history));

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(
    persistedReducer, // persisted reducer with router state
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  const persistor = persistStore(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(connectRouterHistory(nextRootReducer));
    });
  }

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
