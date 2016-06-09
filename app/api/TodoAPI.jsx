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
  }
}
