import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import UUID from 'node-uuid';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: UUID(),
          text: 'Walk the dog',
          completed: false
        },
        {
          id: UUID(),
          text: 'Clean the yard',
          completed: true
        },
        {
          id: UUID(),
          text: 'Do some more React',
          completed: false
        },
        {
          id: UUID(),
          text: 'Wash the dishes',
          completed: true
        }
      ]
    };
  }

  handleAddTodo = (text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: UUID(),
          text: text,
          completed: false
        }
      ]
    });
  }


  handleSearch = (showCompleted, searchText) => {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  handleToggle = (id) => {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  render = () => {
    let { todos } = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}
