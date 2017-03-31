import React from 'react'
import { Table, Button } from 'react-materialize';
import { connect } from 'react-redux'
import { fetchTodos } from '../actions';


class Tables extends React.Component {
  constructor(props){
    super(props)
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
                  <td><Button>Update</Button><Button>Delete</Button></td>
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
    fetchTodos: () => dispatch(fetchTodos())
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (Tables)
