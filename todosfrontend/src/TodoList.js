import React, {Component} from "react";
const APIURL = "/api/todos";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentWillMount() {
    fetch(APIURL)
    .then(data => data.json())
    .then(todos => this.setState({todos}));
  }

  render() {
    return (
     <h1>Todo List</h1>
    )
  }
}

export default TodoList
