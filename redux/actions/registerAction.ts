import { Dispatch } from "redux";
import { actionType } from "../actionTypes";
import { loggingSuccessful } from "./loginAction";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.db");

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
  (email: string, password: string) => async (dispatch: Dispatch) => {
    dispatch(registering());

    try {
      db.transaction((tx) => {
        tx.executeSql("insert into users (email, password) values (?, ?)", [
          email,
          password,
        ]);
        tx.executeSql("select * from users", [], (_, { rows }) => {
          console.log(rows?._array);
          const registeredUser = rows?._array.find(
            (value) => value.email === email
          );
          if (registeredUser) {
            dispatch(registeringSuccessful({ email, password }));
            dispatch(loggingSuccessful({ email, password }));
          } else {
            dispatch(registeringFailed());
          }
        });
      });
    } catch (error) {
      console.log(error);
      dispatch(registeringFailed());
    }
  };
