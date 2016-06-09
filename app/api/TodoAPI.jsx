module.exports = {
  setTodos: function (todos) {
    if (Array.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  getTodos: function () {
    let stringTodos = localStorage.getItem('todos');
    var todos = [];
    try {
      todos = JSON.parse(stringTodos);
    }
    catch (e) {
      console.log("Tried to parse invalid data");
    }

    return Array.isArray(todos) ? todos : [];
  },

  filterTodos: function (todos, showCompleted, searchText) {
    let filteredTodos = todos;
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    if (searchText.length > 0) {
      filteredTodos = filteredTodos.filter((todo) => {
        return todo.text.toLowerCase().indexOf(searchText) > -1;
      });
    }

    /* Non completed Todos should come before completed Todos. */
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) return -1;
      else if (a.completed && !b.completed) return 1;
      else return 0;
    });
    return filteredTodos;
  }
}
