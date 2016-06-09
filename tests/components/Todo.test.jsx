import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import Todo from 'Todo';

describe ('<Todo />', () => {
  it ('should exist', () => {
    expect(Todo).toExist();
  });

  it ('should call onToggle prop with id on click', () => {
    let todoData = {
      id: 199,
      text: 'todo test',
      completed: true
    };
    let spy = expect.createSpy();
    let todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);
    let elem = ReactDOM.findDOMNode(todo);
    TestUtils.Simulate.click(elem);
    expect(spy).toHaveBeenCalledWith(199);
  });
});
