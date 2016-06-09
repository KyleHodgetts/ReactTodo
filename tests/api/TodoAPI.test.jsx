import expect from 'expect';
import TodoAPI from 'TodoAPI';

describe ('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it ('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe ('setTodos', () => {
    it ('should set valid todos array', () => {
      let todos = [{
        id: 123,
        text: 'test text',
        completed: false
      }];
      TodoAPI.setTodos(todos);
      let actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });

    it ('should not set invalid todos array', () => {
      let badTodo = {
        id: 123,
        text: 'bad todo',
        completed: false
      };
      TodoAPI.setTodos(badTodo);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe ('getTodos', () => {
    it ('should return empty array for bad localStorage data', () => {
      let actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it ('should return todo if valid array in localStorage', () => {
      let todos = [{
        id: 123,
        text: 'good todo to test',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      expect(TodoAPI.getTodos()).toEqual(todos);
    });
  });
});
