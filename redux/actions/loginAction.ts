import { Dispatch } from "redux";
import { actionType } from "../actionTypes";
const loggingIn = () => ({
  type: actionType.LOGGING_IN,
});

export const loggingSuccessful = (payload: {
  email: string;
  password: string;
}) => ({
  type: actionType.LOGGING_IN_SUCCESSFUL,
  payload,
});

const loggingFailed = () => ({
  type: actionType.LOGGING_IN_FAILED,
});

export const loginAction =
  (email: string, password: string) => (dispatch: Dispatch) => {
    dispatch(loggingIn());
    try {
      console.log(email, password);
      setTimeout(() => {
        dispatch(loggingSuccessful({ email, password }));
      }, 2000);
    } catch (error) {
      console.log(error);
      dispatch(loggingFailed());
    }
  };

const logout = () => ({
  type: actionType.LOG_OUT,
});
export const logoutAction = () => (dispatch: Dispatch) => {
  dispatch(logout());
};
