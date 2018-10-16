import { combineReducers, createStore, applyMiddleware } from "redux";
import { keyboardReducer } from "./keyboard";
import { panelReducer } from "./panel";

const rootReducer = combineReducers({
  keyboard: keyboardReducer,
  panel: panelReducer
});

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;
