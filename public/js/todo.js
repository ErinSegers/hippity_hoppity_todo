// factory function    putting these items into an object
function createTodo(task, date, category) {
  var todo = {};
  todo.task = task;
  todo.date = date;
  todo.category = category;
  return todo;
}
