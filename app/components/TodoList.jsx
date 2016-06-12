import React from 'react';
import Todo from 'Todo';

export default class TodoList extends React.Component {
  render = () => {
    let { todos } = this.props;
    let renderTodos = () => {
      if (todos.length === 0) {
        return <p className="container__message">It seems you have nothing to do...</p>;
      }
      else {
        return todos.map((todo) => {
          return (
            <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
          );
        });
      }
    }
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
  onToggle: React.PropTypes.func.isRequired
};
