import React from "react";
import { Provider } from "react-redux";
import store from "./reducers";
import { Page } from "./components/Page";

import "./styles.css";

export const App = () => (
  <Provider store={store}>
    <Page />
  </Provider>
);
