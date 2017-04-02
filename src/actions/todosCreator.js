import * as ActionTypes from './constants.js'

// INIT DISPATCH FROM REDUX
export const getTodos = (results) => ({
  type: ActionTypes.GET_TODOS,
  payload: results
})

export const addTodo = (results) => ({
  type: ActionTypes.ADD_NEW_TODO,
  payload: results
})

export const deleteTodo = (results) => ({
  type: ActionTypes.DELETE_ONE_TODO,
  payload: results
})

export const updateTodo = (results) => ({
  type: ActionTypes.UPDATE_ONE_TODO,
  payload: results
})
