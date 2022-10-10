/* eslint-disable comma-dangle */

import { actionType } from "../actionTypes";

let logInState: {
  loading: boolean;
  error: string | null;
  isLoggedIn: boolean;
  email: string;
} = {
  loading: false,
  error: null,
  isLoggedIn: false,
  email: "",
};

export const loginReducer = (
  state = logInState,
  action: { type: string; payload: { email: string; password: string } }
) => {
  switch (action.type) {
    case actionType.LOGGING_IN:
      state = { ...state, loading: true, error: null };
      return state;
    case actionType.LOGGING_IN_SUCCESSFUL:
      state = {
        ...state,
        loading: false,
        error: null,
        isLoggedIn: true,
        email: action.payload.email,
      };
      return state;
    case actionType.LOGGING_IN_FAILED:
      state = { ...state, loading: false, error: "Something went wrong" };
      return state;
    case actionType.LOG_OUT:
      state = { ...state, loading: false, error: null, isLoggedIn: false };
      return state;
    default:
      return state;
  }
};
