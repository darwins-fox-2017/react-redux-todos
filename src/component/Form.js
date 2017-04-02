import React from 'react';
import { Row, Input, Button } from 'react-materialize';
import { connect } from 'react-redux'
import { fetchTodos,createTodos } from '../actions';

class Forms extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id:"",
      todos:"",
      completed:"false",
      createdAt:""
    }
  }

  componentDidMount(){

  }

  handleClick(event){
    event.preventDefault()
    this.props.createTodos(this.state)
    this.setState({
      id:"",
      todos:"",
      completed:"false",
      createdAt:""
    })
  }

  render(){
    return(
      <Row>
        <form>
          <Input placeholder="Id" s={6} label="Id" onChange={(event)=>this.setState({id:event.target.value})} />
          <Input placeholder="Todo" s={6} label="Todo" onChange={(event)=>this.setState({todos:event.target.value})} />
          <Input placeholder="Created At" s={6} label="Created At" onChange={(event)=>this.setState({createdAt:event.target.value})} />
          <Button onClick={(event)=>this.handleClick(event)}>Create</Button>
        </form>
      </Row>
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
    createTodos: (data) => dispatch(createTodos(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (Forms)
