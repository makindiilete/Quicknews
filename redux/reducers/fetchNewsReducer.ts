import { actionType } from "../actionTypes";

export class ReduxActionModel {
  type: string = "";
  payload: any = {};
}

export type StoreModel<T> = {
  loading: boolean;
  error: string | null;
  data: T;
};

export type NewsReduxModel = StoreModel<any[]>;
export type ReduxStoreModel = {
  news: NewsReduxModel;
};

let newsState: {
  loading: boolean;
  error: string | null;
  data: any[];
} = {
  loading: false,
  error: null,
  data: [],
};

export const fetchNewsReducer = (
  state = newsState,
  action: ReduxActionModel
) => {
  const { type, payload } = action;

  switch (type) {
    case actionType.FETCHING_NEWS:
      state = { ...state, loading: true, error: null };
      return state;
    case actionType.FETCHED_NEWS_SUCCESSFUL:
      state = { ...state, loading: false, error: null, data: payload };
      return state;
    case actionType.FETCHED_NEWS_FAILED:
      state = { ...state, loading: false, error: "Something went wrong" };
      return state;
    default:
      return state;
  }
};
