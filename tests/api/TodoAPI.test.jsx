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

  describe ('filterTodos', () => {
    let todos = [
      {
        id: 1,
        text: 'some text',
        completed: true
      },
      {
        id: 2,
        text: 'other text',
        completed: false
      },
      {
        id: 3,
        text: 'more stuff',
        completed: false
      }
    ];

    it ('should return all items if show completed is true', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it ('should return non-completed items if show completed is false', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(2);
    });

    it ('should sort by completed status (non-completed first)', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it ('should filter todos by search text', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, 'text');
      expect(filteredTodos.length).toBe(2);
    });

    it ('should return all items if search text is empty', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
});
