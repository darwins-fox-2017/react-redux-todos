import * as ActionTypes from './constants'
import axios from 'axios'

export const getTodos = results => ({
  type: ActionTypes.GET_TODOS,
  payload: results
});

export const putTodos = results => ({
  type: ActionTypes.POST_TODOS,
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

// export const editTodos = () => {
//   return (dispatch) => {
//     axios.put('http://localhost:2000/todos',{
//
//     })
//     .then(function (response) {
//       dispatch(putTodos(response.data));
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }
// }

export const removeTodos = (id) => {
  console.log('disini');
  return (dispatch) => {
    axios.delete('http://localhost:2000/todos/'+id)
    .then(function (response) {
      dispatch(fetchTodos());
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
