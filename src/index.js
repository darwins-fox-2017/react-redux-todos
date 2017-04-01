import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import * as ActionTypes from './actions/constants'
// REDUCER
const todosReducer = (state = {
  todos: [{
    task: "jalan - jalan sore",
    id: "8",
    status: ""
}]
}, action) => {
    switch (action.type) {
      case ActionTypes.GET_TODOS: {
        console.log(action.payload);
        return Object.assign({}, state, {todos: action.payload})
      }
      case ActionTypes.ADD_NEW_TODO: {
        let newId = Number(state.todos[state.todos.length-1].id) + 1
        let newTodo = {
          task: action.payload,
          id: newId,
          status: ""
        }
        let newState = state.todos.concat(newTodo)

        fetch("http://localhost:3004/posts/", {
        	method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              		task: action.payload,
              		id: newId,
                  status: ""
              	})
        })
        .then(result => {
          return result.json()
        })
        .then(data => {
          console.log(data)
        })

        return Object.assign({}, state, { todos: newState })
      }
      case ActionTypes.DELETE_ONE_TODO: {
        // COPY OLD ARRAY VALUE INTO NEW ARRAY
        let newState = state.todos.slice();
        var removeIndex = newState.map(function(item) { return item.id; }).indexOf(action.payload);
        newState.splice(removeIndex, 1);
        // DELETE DATABASE
        fetch(`http://localhost:3004/posts/${action.payload}`, {
        	method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({})
        })
        .then(result => {
          return result.json()
        })
        .then(data => {
          console.log(data)
        })
        return Object.assign({}, state, { todos: newState })
      }
      case ActionTypes.UPDATE_ONE_TODO: {
        console.log(`MASUK KE REDUCER!!!!!`);
        console.log(action.payload);
        return state
      }
      default: return state
  }
}

// STORE
const rootReducer = combineReducers({
  todos: todosReducer
})

const store = createStore(rootReducer,applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
