import { Dispatch } from "redux";
import { actionType } from "../actionTypes";
import axios from "axios";

const fetchingNews = () => ({
  type: actionType.FETCHING_NEWS,
});

const fetchedNewsSuccessful = (payload: any[]) => ({
  type: actionType.FETCHED_NEWS_SUCCESSFUL,
  payload,
});

const fetchedNewsFailed = () => ({
  type: actionType.FETCHED_NEWS_FAILED,
});
const getStory = async (id: string) => {
  const response = await axios.get(
    "https://hacker-news.firebaseio.com/v0/item/" + id + ".json"
  );
  return response.data;
};

export const fetchNewsAction =
  (refresh: boolean, newsCount: number) => async (dispatch: Dispatch) => {
    dispatch(fetchingNews());
    try {
      let response = await axios.get(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      );
      const storyIds = response.data;
      const stories = await Promise.all(
        storyIds.slice(0, newsCount).map((storyId: string) => getStory(storyId))
      );
      dispatch(fetchedNewsSuccessful(stories));
    } catch (error) {
      dispatch(fetchedNewsFailed());
    }
  };
