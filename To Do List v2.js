//TO DO LIST V2

//Change from seperate functions into an object with methods

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function () {
        window.console.log('My To-Dos:', this.todos);
    },
    addTodo: function (todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    editTodo: function (position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};


