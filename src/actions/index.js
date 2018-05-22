import axios from 'axios'
import { NEWS_API } from 'react-native-dotenv'
import { NEWS_LIST, EMPTY_LIST, ON_LOADING, ON_ERROR, SOURCE_LIST } from './types'

export const getArticles = () => {
  return dispatch => {
    dispatch({ type: ON_LOADING })

    axios
      .get(`https://newsapi.org/v2/everything?sources=bloomberg&page=1&apiKey=${NEWS_API}`)
      .then(response => {
        dispatch({ type: NEWS_LIST, payload: response.data.articles })
      })
      .catch(() => {
        dispatch({ type: ON_ERROR, payload: 'Error in loading articles' })
      })
  }
}

export const emptyList = () => {
  return {
    type: EMPTY_LIST,
    payload: [],
  }
}

export const getSources = () => {
  return dispatch => {
    dispatch({ type: ON_LOADING })

    axios
      .get(`https://newsapi.org/v2/sources?apiKey=${NEWS_API}`)
      .then(response => {
        dispatch({ type: SOURCE_LIST, payload: response.data.sources })
      })
      .catch(() => {
        dispatch({ type: ON_ERROR, payload: 'Error in loading sources' })
      })
  }
}
