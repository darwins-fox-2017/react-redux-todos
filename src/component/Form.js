import React from 'react';
import { Row, Input, Button } from 'react-materialize';
import { connect } from 'react-redux'
import { fetchTodos } from '../actions';

class Forms extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){

  }

  render(){
    return(
      <Row>
        <form>
          <Input placeholder="Todo" s={6} label="Todo" />
          <Input placeholder="Created At" s={6} label="Created At" />
          <Button>Create</Button>
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
    fetchTodos: () => dispatch(fetchTodos())
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (Forms)
