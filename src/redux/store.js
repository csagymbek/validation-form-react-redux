import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { formReducer } from "./formReducer";

export const store = createStore(
  formReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
