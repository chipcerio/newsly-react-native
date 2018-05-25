import { NEWS_LIST, EMPTY_LIST, ON_LOADING, ON_ERROR } from '../actions/types'

const INITIAL_STATE = {
  articles: [],
  empty: [],
  onLoading: false,
  onError: false,
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case NEWS_LIST:
      return { ...state, articles: payload }

    case EMPTY_LIST:
      return { ...state, empty: payload }

    case ON_LOADING:
      return { ...state, onLoading: true, onError: '' }

    case ON_ERROR:
      return { ...state, onLoading: false, onError: payload }

    default:
      return state
  }
}
