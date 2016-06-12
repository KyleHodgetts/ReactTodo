import React from 'react';

export default class AddTodo extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let text = this.refs.todo.value;
    if (text.length > 0) {
      this.refs.todo.value = '';
      this.props.onAddTodo(text);
    }
    else {
      this.refs.todo.focus();
    }
  }
  render = () => {
    return (
      <div className="container__footer">
        <form className="todo-form" onSubmit={this.handleSubmit} ref="form">
          <input type="text" placeholder="Enter a Todo" ref="todo"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddTodo: React.PropTypes.func.isRequired
}
