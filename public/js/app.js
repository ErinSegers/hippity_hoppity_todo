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
    this.list = document.querySelector('#list');
  },
  addEventListeners (){
    this.createButton.addEventListener('click', this.addToDo);
  },
  render: function (){
    var listItemsFromTodos = this.todos
                                  .map(function(todo){
                                      return '<li>'+ todo + '</li>';
                                  })
                                  .join('');
    this.list.innerHTML = listItemsFromTodos;
  },
  addToDo: function (){
    var taskValue = todoApp.taskInput.value; //.value is specific to input fields
    todoApp.todos.push(taskValue);
    todoApp.render();
  }
};

console.log(todoApp);
todoApp.init(); // will run init
console.log(todoApp);
