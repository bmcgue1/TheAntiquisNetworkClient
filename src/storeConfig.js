import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import logger from "redux-logger";
import { loadState, saveState } from "./loclaStorage";

const persistedstate = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(thunk, logger, reduxImmutableStateInvariant())
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, persistedstate);
  store.subscribe(() => {
    saveState(store.getState());
  });
  return store;
}
