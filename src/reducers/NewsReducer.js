import {
  NEWS_LIST,
  EMPTY_LIST,
  ON_LOADING,
  ON_ERROR,
} from '../actions/types'

const INITIAL_STATE = {
  list: [],
  empty: [],
  onLoading: false,
  onError: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEWS_LIST:
      return { ...state, list: action.payload }

    case EMPTY_LIST:
      return { ...state, empty: action.payload }

    case ON_LOADING:
      // update the state
      // shallow cloning, spread syntax
      return { ...state, onLoading: action.payload }

    case ON_ERROR:
      return { ...state, onError: action.payload }

    default:
      return state
  }
}
