import React from 'react';

export default class AddTodo extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();
    let text = this.refs.todo.value;
    if (text.length > 0) {
      this.props.onAddTodo(text);
      this.refs.todo.value = '';
    }
  }
  render = () => {
    return (
      <div>
        <form className="todo-form" onSubmit={this.onSubmit} ref="form">
          <input type="text" placeholder="Enter a Todo" ref="todo"/>
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddTodo: React.PropTypes.func.isRequired
}
