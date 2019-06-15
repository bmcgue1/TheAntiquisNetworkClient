import React from "react";
import Counter from "./componets/Counter";
import Login from "./componets/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "./storeConfig";
import Navigation from "./componets/common/Navigation";
import Dashboard from "./componets/Dashboard";
//import { loadState, saveState } from "./loclaStorage";

// const persistedstate = loadState();

const store = configureStore();
// store.subscribe(() => {
//   saveState(store.getState());
// });

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Route exact path="/" component={Counter} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dash" component={Dashboard} />
      </Router>
    </Provider>
  );
}

export default App;
