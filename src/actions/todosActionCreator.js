import * as ActionTypes from './constants'
import axios from 'axios'

export const getTodos = results => ({
  type: ActionTypes.GET_TODOS,
  payload: results
});

export const putTodos = results => ({
  type: ActionTypes.PUT_TODOS,
  payload: results
});

export const deleteTodos = results => ({
  type: ActionTypes.DELETE_TODOS,
  payload: results
});

export const postTodos = results => ({
  type: ActionTypes.POST_TODOS,
  payload: results
});

export const fetchTodos = () => {
  return (dispatch) => {
    axios.get('http://localhost:2000/todos')
    .then(function (response) {
      dispatch(getTodos(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export const createTodos = (data) => {
  return (dispatch) => {
    axios.post('http://localhost:2000/todos', data)
    .then(function (response) {
      dispatch(postTodos(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export const editTodos = (todo) => {
  return (dispatch) => {
    axios.put('http://localhost:2000/todos/'+todo.id,{
      todos: todo.todos,
      completed: todo.completed
    })
    .then(function (response) {
      console.log(response.data);
      dispatch(putTodos(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export const removeTodos = (todo) => {
  console.log('disini');
  return (dispatch) => {
    axios.delete('http://localhost:2000/todos/'+todo.id)
    .then(function (response) {
      dispatch(deleteTodos(todo));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
