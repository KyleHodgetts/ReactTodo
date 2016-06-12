import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import TodoApp from 'TodoApp';

describe ('<TodoApp />', () => {
  it ('should exist', () => {
    expect(TodoApp).toExist();
  });

  it ('should add Todo to the todos state on handleAddTodo', () => {
    let todoText = 'Test';
    let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({
      todos: []
    });
    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it ('should toggle completed value when handleToggle called', () => {
    let todoData = {
      id: 11,
      text: 'Test feature',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  // Test that when toggle from true to false, completedat gets removed
  it ('should removed completed at timestamp when todo is unchecked', () => {
    let todoData = {
      id: 11,
      text: 'Test feature',
      completed: true,
      createdAt: 0,
      completedAt: 1
    };
    let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });

});
