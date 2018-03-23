import {
  NEWS_LIST,
  EMPTY_LIST,
  ON_LOADING,
  ON_ERROR,
} from '../actions/types'

const INITIAL_STATE = {
  articles: [],
  empty: [],
  onLoading: false,
  onError: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEWS_LIST:
      return { ...state, articles: action.payload }

    case EMPTY_LIST:
      return { ...state, empty: action.payload }

    case ON_LOADING:
      return { ...state, onLoading: true, onError: '' }

    case ON_ERROR:
      return { ...state, onLoading: false, onError: action.payload }

    default:
      return state
  }
}
