import React, {Component} from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: ""};
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
        />
        <button>Add Todo</button>
      </div>
    )
  }
}

export default TodoForm
