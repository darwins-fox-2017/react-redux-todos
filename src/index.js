import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import * as ActionTypes from './actions/constants'
import { newTodo, deleteTodo } from './actions/fetchData'
import App from './App'
import './index.css'

// REDUCER
const todosReducer = (state = {
  todos: [{
    task: 'jalan - jalan sore',
    id: '1'
  }]
}, action) => {
  switch (action.type) {
    case ActionTypes.GET_TODOS: {
      return Object.assign({}, state, {todos: action.payload})
    }
    case ActionTypes.ADD_NEW_TODO: {
      let newId = Number(state.todos[state.todos.length - 1].id) + 1
      let input = {
        task: action.payload,
        id: newId
      }
      let newState = state.todos.concat(input)
      newTodo(input)
      return Object.assign({}, state, { todos: newState })
    }
    case ActionTypes.DELETE_ONE_TODO: {
      // COPY OLD ARRAY VALUE INTO NEW ARRAY
      let newState = state.todos.slice()
      var removeIndex = newState.map((item) => { return item.id }).indexOf(action.payload)
      newState.splice(removeIndex, 1)
      deleteTodo(action.payload)
      return Object.assign({}, state, { todos: newState })
    }
    case ActionTypes.UPDATE_ONE_TODO: {
      console.log(`MASUK KE REDUCER!!!!!`)
      console.log(action.payload)
      return state
    }
    default: return state
  }
}

// STORE
const rootReducer = combineReducers({
  todos: todosReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
