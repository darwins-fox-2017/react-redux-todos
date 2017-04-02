import React from 'react'
import { Table, Button, Modal, Input } from 'react-materialize';
import { connect } from 'react-redux'
import { fetchTodos, removeTodos, editTodos } from '../actions';


class Tables extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id:"",
      todos:"",
      completed:"",
    }
  }

  componentDidMount(){
    this.props.fetchTodos()
  }

  render(){
    return(
      <div>
        <Table>
          <thead>
            <tr>
              <th data-field="id">Id</th>
              <th data-field="todo">Todo</th>
              <th data-field="completed">Completed</th>
              <th data-field="action">Action</th>
            </tr>
          </thead>
          <tbody>
          {
            this.props.todos.map((item,index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.todos}</td>
                  <td>{item.completed}</td>
                  <td>
                    <Modal
                      header='Update'
                      bottomSheet
                      trigger={
                        <Button waves='light'>Update</Button>
                    }
                    >
                      <Input s={6} label="Title" onChange={(event)=>this.setState({todos:event.target.value, id:item.id})} />
                      <Input s={6} label="Completed" onChange={(event)=>this.setState({completed:event.target.value})} />
                      <Button waves='light' onClick={()=>this.props.editTodos(this.state)}>Update</Button>
                    </Modal>
                    <Button onClick={()=>this.props.removeTodos(item)}>Delete</Button></td>
                </tr>
              )
            })
          }
          </tbody>
        </Table>
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
    fetchTodos: () => dispatch(fetchTodos()),
    removeTodos: (todo) => dispatch(removeTodos(todo)),
    editTodos: (todo) => dispatch(editTodos(todo))
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (Tables)
