// IMPORT NPM
import React, {Component} from 'react'
import {connect} from 'react-redux'

// FUNCTION
import {getData} from '../helper/getData.js'
import {getTodos, addTodo, deleteTodo, updateTodo} from '../actions/todosCreator.js'

class Todos extends Component {
  constructor (props) {
    super(props)
    this.state = {
      newTodoTask: '',
      temporaryDataTodoForUpdate: {}
    }
  }

  componentDidMount () {
    // CALLBACK
    let saveData = (data) => {
      console.log(data)
      this.props.getTodos(data)
    }
    getData('http://localhost:3004/posts', saveData)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.addTodo(this.state.newTodoTask)
  }

  handleChange (event) {
    this.setState({newTodoTask: event.target.value})
  }

  handleUpdateData (todo) {
    this.setState({temporaryDataTodoForUpdate: todo})
  }

  handleChangeUpdateTodo (event) {
    this.props.updateTodo(this.state.temporaryDataTodoForUpdate)
  }

  render () {
    return (
      <div>
        <label>Add new todo</label>
        <form onSubmit={(event) => { this.handleSubmit(event) }}>
          <input type='text' onChange={(event) => this.handleChange(event)} />
          <input type='submit' value='Gotcha!' />
        </form>
        <br />
        <table id='example' className='table table-striped table-bordered' width='50%'>
          <thead>
            <tr>
              <th>No</th>
              <th>Task</th>
              <th>Command</th>
            </tr>
          </thead>
          <tbody>
            {this.props.todos.todos.map((todo, index) => {
              return (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td> {todo.task} </td>
                  <td>
                    <button type='button' className='btn btn-danger' onClick={() => { this.props.deleteTodo(todo.id) }}>
                      Delete
                    </button>
                    <button
                      type='button'
                      className='btn btn-warning'
                      data-toggle='modal'
                      data-target='#myModal'
                      onClick={() => { this.handleUpdateData(todo) }}>
                      Update
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {/* <!-- Modal --> */}
        <div className='modal fade' id='myModal' role='dialog'>
          <div className='modal-dialog'>
            {/* <!-- Modal content--> */}
            <div className='modal-content'>
              <div className='modal-header'>
                <button type='button' className='close' data-dismiss='modal'>&times</button>
                <h4 className='modal-title'>Update Coy</h4>
              </div>
              <div className='modal-body'>
                <form onSubmit={(event) => { this.handleSubmit(event) }}>
                  <input
                    type='text'
                    value={this.state.temporaryDataTodoForUpdate.task}
                    onChange={(event) => this.handleChangeUpdateTodo(event)} />
                  <input type='text' value='Gotcha!' />
                </form>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: (results) => dispatch(getTodos(results)),
    addTodo: (results) => dispatch(addTodo(results)),
    deleteTodo: (results) => dispatch(deleteTodo(results)),
    updateTodo: (results) => dispatch(updateTodo(results))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
