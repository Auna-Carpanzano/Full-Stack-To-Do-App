import React, {Component} from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }
  render() {
    return (
     <h1>Todo List</h1>
    )
  }
}

export default TodoList
