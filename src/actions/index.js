import {
  NEWS_LIST,
  EMPTY_LIST,
  ON_LOADING,
  ON_ERROR,
} from './types'

export const newsList = () => {
  return {
    type: NEWS_LIST,
    payload: '',
  }
}

export const emptyList = () => {
  return {
    type: EMPTY_LIST,
    payload: [],
  }
}

export const loadingList = () => {
  return {
    type: ON_LOADING,
    payload: '',
  }
}

export const errorList = () => {
  return {
    type: ON_ERROR,
    payload: '',
  }
}
