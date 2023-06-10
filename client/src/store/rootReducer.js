import { combineReducers } from "redux";

import { authReducer } from "./Auth/AuthReducer";

import postReducer from "./Post/postReducer";

export const reducers = combineReducers({
  authReducer,
  postReducer,
});
