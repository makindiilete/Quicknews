/* eslint-disable comma-dangle */

import { actionType } from "../actionTypes";
import { Alert } from "react-native";

let registerState: {
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

export const registerReducer = (
  state = registerState,
  action: { type: string; payload: { email: string; password: string } }
) => {
  switch (action.type) {
    case actionType.REGISTERING_IN:
      state = { ...state, loading: true, error: null };
      return state;
    case actionType.REGISTERING_IN_SUCCESSFUL:
      state = {
        ...state,
        loading: false,
        error: null,
        isLoggedIn: true,
        email: action.payload.email,
      };
      return state;
    case actionType.REGISTERING_IN_FAILED:
      state = { ...state, loading: false, error: "Something went wrong" };
      Alert.alert("Sorry", "Something went wrong");
      return state;
    default:
      return state;
  }
};
