import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import rootReducer from "./redux/reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { fetchMemes } from "./redux/actions";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log("store", store.getState()));
store.dispatch(fetchMemes());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
