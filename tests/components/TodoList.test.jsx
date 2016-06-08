import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import TodoList from 'TodoList';
import Todo from 'Todo'

describe ('<TodoList />', () => {
  it ('should exist', () => {
    expect(TodoList).toExist();
  });

  it ('should render one Todo component for each todo item', () => {
    const TODOS = [
      {
        id: 1,
        text: 'something'
      },
      {
        id: 2,
        text: 'do something else'
      }
    ];

    let todoList = TestUtils.renderIntoDocument(<TodoList todos={TODOS} />);
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    expect(todosComponents.length).toBe(TODOS.length);
  });
});
