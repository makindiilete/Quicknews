import { Dispatch } from "redux";
import { actionType } from "../actionTypes";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.db");
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
      db.transaction((tx) => {
        tx.executeSql(
          `select * from users where email = ?;`,
          [email],
          (_, { rows }) => {
            console.log(rows?._array);
            if (rows?._array.length > 0) {
              dispatch(loggingSuccessful({ email, password }));
            } else {
              dispatch(loggingFailed());
            }
          }
        );
      });
    } catch (error) {
      dispatch(loggingFailed());
    }
  };

const logout = () => ({
  type: actionType.LOG_OUT,
});
export const logoutAction = () => (dispatch: Dispatch) => {
  dispatch(logout());
};
