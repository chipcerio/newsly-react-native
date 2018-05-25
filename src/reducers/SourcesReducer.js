import { SOURCE_LIST, ON_LOADING, ON_ERROR } from '../actions/types'

const INITIAL_STATE = {
  sources: [],
  empty: [],
  onLoading: false,
  onError: '',
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SOURCE_LIST:
      return { ...state, sources: payload }

    case ON_LOADING:
      return { ...state, onLoading: true }

    case ON_ERROR:
      return { ...state, onError: payload }

    default:
      return state
  }
}
