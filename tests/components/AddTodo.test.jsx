import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import AddTodo from 'AddTodo';

describe ('<AddTodo />', () => {
  it ('should exist', () => {
    expect(AddTodo).toExist();
  });

  describe ('adding a Todo', () => {
    it ('should add a Todo when valid text is entered', () => {
      let spy = expect.createSpy();
      let addTodoForm = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
      addTodoForm.refs.todo.value = 'test';
      let form = TestUtils.findRenderedDOMComponentWithClass(addTodoForm, 'todo-form');
      TestUtils.Simulate.submit(form);
      expect(spy).toHaveBeenCalledWith('test');
    });

    it ('should not add a Todo when invalid text is entered', () => {
      let spy = expect.createSpy();
      let addTodoForm = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
      addTodoForm.refs.todo.value = '';
      let form = TestUtils.findRenderedDOMComponentWithClass(addTodoForm, 'todo-form');
      TestUtils.Simulate.submit(form);
      expect(spy).toNotHaveBeenCalled();
    });
  });
});
