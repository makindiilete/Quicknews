import { Dispatch } from "redux";
import { actionType } from "../actionTypes";
import { loggingSuccessful } from "./loginAction";
const registering = () => ({
  type: actionType.REGISTERING_IN,
});

const registeringSuccessful = (payload: {
  email: string;
  password: string;
}) => ({
  type: actionType.REGISTERING_IN_SUCCESSFUL,
  payload,
});

const registeringFailed = () => ({
  type: actionType.REGISTERING_IN_FAILED,
});

export const registerAction =
  (email: string, password: string) => (dispatch: Dispatch) => {
    dispatch(registering());
    try {
      console.log(email, password);
      setTimeout(() => {
        dispatch(registeringSuccessful({ email, password }));
        dispatch(loggingSuccessful({ email, password }));
      }, 2000);
    } catch (error) {
      console.log(error);
      dispatch(registeringFailed());
    }
  };
