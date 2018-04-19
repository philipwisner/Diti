//TO DO LIST V3

//Using an object, but adding a completed section to todos array

var todoList = {
    todos: [],
    displayTodos: function () {
        for (var i=0; i < todos.length; i++) {
            console.log(todos[i].todoText);
        }
    },
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false,
        });
        this.displayTodos();
    },
    editTodo: function (position, newText) {
        this.todos[position].todoText = newText;
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
