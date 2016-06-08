import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import TodoSearch from 'TodoSearch';

describe ('<TodoSearch />', () => {
  it ('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it ('should call onSearch with entered input text', () => {
    const SEARCHTEXT = 'Dog';
    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
    todoSearch.refs.searchText.value = SEARCHTEXT;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(false, 'Dog');
  });

  it ('should call onSearch with proper checked value', () => {
    const SEARCHTEXT = 'Dog';
    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
    todoSearch.refs.searchText.value = SEARCHTEXT;
    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(true, 'Dog');
  });
});
