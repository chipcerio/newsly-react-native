import { SOURCE_LIST, ON_LOADING, ON_ERROR } from '../actions/types'

const INITIAL_STATE = {
  sources: [],
  empty: [],
  onLoading: false,
  onError: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SOURCE_LIST:
      return { ...state, sources: action.payload }

    case ON_LOADING:
      return { ...state, onLoading: true }

    case ON_ERROR:
      return { ...state, onError: action.payload }

    default:
      return state
  }
}
