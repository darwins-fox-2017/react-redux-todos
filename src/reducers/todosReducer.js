import * as ActionTypes from '../actions/constants'


const todosReducer = (state = [], action) => {
    switch (action.type) {
      case ActionTypes.GET_TODOS:
        return action.payload
      case ActionTypes.POST_TODOS:
        return [...state, action.payload]
      case ActionTypes.PUT_TODOS:
        return state.map(todo => todo.id === action.payload.id ? Object.assign({}, todo, {title: action.payload.title}) :todo)
      case ActionTypes.DELETE_TODOS:
        return state.filter(todo => todo !== action.payload)
      default: return state
  }
}

export default todosReducer;
