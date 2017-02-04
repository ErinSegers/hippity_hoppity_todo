var todoApp = {
  todos: [], // our data source/where taskValues are stored
  init: function(){
    this.cacheDom();
    this.addEventListeners();
    this.render();
  },
  cacheDom: function(){
    this.createButton = document.querySelector('#create');
    this.taskInput = document.querySelector('#task');
    this.categoryInput = document.querySelector('#category');
    this.dateInput = document.querySelector('#date');
    this.list = document.querySelector('#list');
  },
  addEventListeners (){
    this.createButton.addEventListener('click', this.addToDo);
  },
  render: function (){
    console.log(todoApp.todos);
    var listItemsFromTodos = this.todos
                                  .map(function(todo){
                                      return `<li>${todo.task}:(${todo.date})[${todo.category}]</li>`; //template literal
                                  })
                                  .join('');
    this.list.innerHTML = listItemsFromTodos;
  },
  addToDo: function (){
    var task = todoApp.taskInput.value; //.value is specific to input fields
    var date = todoApp.dateInput.value;
    var category = todoApp.categoryInput.value;
    var newTodo = createTodo(task, date, category)
    todoApp.todos.push(newTodo);
    todoApp.taskInput.value = '';
    todoApp.categoryInput.value = '';
    todoApp.dateInput.value = '';
    todoApp.render();
  }
};

console.log(todoApp);
todoApp.init(); // will run init
console.log(todoApp);
