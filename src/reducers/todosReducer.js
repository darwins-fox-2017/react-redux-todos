import * as ActionTypes from '../actions/constants'


const todosReducer = (state = [], action) => {
    switch (action.type) {
      case ActionTypes.GET_TODOS:
        return action.payload
      case ActionTypes.POST_TODOS:
        return [...state, action.payload]
      case ActionTypes.PUT_TODOS:
      case ActionTypes.DELETE_TODOS:
      default: return state
  }
}

export default todosReducer;
