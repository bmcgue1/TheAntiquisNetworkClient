import React from "react";
import Counter from "./componets/Counter";
import Login from "./functionalComponent/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./storeConfig";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Counter} />
        <Route exact path="/login" component={Login} />
      </Router>
    </Provider>
  );
}

export default App;
