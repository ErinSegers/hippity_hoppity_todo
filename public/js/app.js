var todoApp = {
  todos: [], // our data source/where values are stored
  init: function(){
    this.cacheDom();
    this.addEventListeners();
    this.render();
  },
  cacheDom: function(){ //grabs the elements in the DOM   this(todoApp).variable is part of the caching process
    this.createButton = document.querySelector('#create');
    this.taskInput = document.querySelector('#task');
    this.categoryInput = document.querySelector('#category');
    this.dateInput = document.querySelector('#date');
    this.list = document.querySelector('#list');
  },
  addEventListeners: function(){ //waits for the click on the create button
    this.createButton.addEventListener('click', this.addToDo); //this.addToDo - run this function
  },
  render: function (){
    console.log(todoApp.todos);
    var listItemsFromTodos = this.todos
                                  .map(todoApp.createListItem) //maps string from function below
                                  .join('');
    this.list.innerHTML = listItemsFromTodos; //interprets HTML in javascript versus reading it as text (innerText)
    var deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(function(button){
      button.addEventListener('click', todoApp.removeTodo);
    });
  },
  createListItem: function(todo, index){ //transforms the original array into a string
    //data tags are ignored by html rendering  data-index is storing the index data
    return `<li data-index='${index}'>${todo.task}: (${todo.date}) [${todo.category}]
    <button class="delete">x</button>
    </li>`; //template literal - this is a single string
  },
  addToDo: function (){
    var task = todoApp.taskInput.value; //.value is specific to input fields
    var date = todoApp.dateInput.value;
    var category = todoApp.categoryInput.value;
    var newTodo = createTodo(task, date, category)
    todoApp.todos.push(newTodo);
    todoApp.taskInput.value = ''; //these clear the form after you click the create button
    todoApp.categoryInput.value = '';
    todoApp.dateInput.value = '';
    todoApp.render();
  },
  removeTodo: function(){ //will run the delete button is clicked
    var element = this; //only refers to the element because we are in an event handler, referencing the element that was clicked
    var parent = element.parentNode; //grabs the parent element, because data-index is applied to the <li> not the button itself
    var index = parent.dataset.index; //.dataset gives us access to anything that starts with a data- (data attributes) - do not store sensitive data in the html
    todoApp.todos.splice(index, 1); //remove at position index exactly 1 element
    todoApp.render(); //the data has changed, so we should render the application again
  }
};

todoApp.init(); // will run init
