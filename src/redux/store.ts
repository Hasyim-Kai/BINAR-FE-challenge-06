import { legacy_createStore as createStore, applyMiddleware, Store, compose, combineReducers } from 'redux'
import persistReducer from 'redux-persist/lib/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk'
import userReducer from './user/userReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  user: userReducer
})

const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store: Store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
)

const persistor = persistStore(store)

export { store, persistor }