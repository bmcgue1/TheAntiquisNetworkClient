import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import logger from "redux-logger";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk, logger, reduxImmutableStateInvariant())
    )
  );
}
