import axios from 'axios';
import { NEWS_API } from 'react-native-dotenv';
import { NEWS_LIST, ON_LOADING, ON_ERROR, SOURCE_LIST } from './types';

export const getArticles = () => async dispatch => {
  try {
    dispatch({ type: ON_LOADING });
    const response = await axios.get(
      `https://newsapi.org/v2/everything?sources=bloomberg&page=1&apiKey=${NEWS_API}`,
    );
    dispatch({ type: NEWS_LIST, payload: response.data.articles });
  } catch (error) {
    dispatch({ type: ON_ERROR, payload: 'Error in loading articles' });
    throw new Error(error);
  }
};

export const getSources = () => async dispatch => {
  try {
    dispatch({ type: ON_LOADING });
    const response = await axios.get(`https://newsapi.org/v2/sources?apiKey=${NEWS_API}`);
    dispatch({ type: SOURCE_LIST, payload: response.data.sources });
  } catch (error) {
    dispatch({ type: ON_ERROR, payload: 'Error in loading sources' });
    throw new Error(error);
  }
};
