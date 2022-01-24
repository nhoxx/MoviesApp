import rootReducer from '../reducers/rootReducer';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import ReduxPersist from '../../config/ReduxPersist';
import createSagaMiddleware from 'redux-saga';
const persistedReducer = persistReducer(ReduxPersist.storeConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);
const runSaga = sagaMiddleware.run;
const persistor = persistStore(store);

export {store, persistor, runSaga};
