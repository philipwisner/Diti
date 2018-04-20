//TO DO LIST 54

//Using an object, but adding a completed section to todos array

var todoList = {
    todos: [],
    displayTodos: function () {
        console.log('My ToDos:')
        if (this.todos.length === 0) {
            console.log('You have no todos')
        } else {            
            for (var i=0; i < this.todos.length; i++) {
                if (this.todos[i].completed) {
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    console.log('( )', this.todos[i].todoText);
                }
          }
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
    toggleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function () {
        var totalTodos = this.todos.length;
        var completedTodos = 0;;
        
        for (var i=0; i < totalTodos; i++) {
            if (this.todos[i].completed) {
                completedTodos++;
            }
        }
    
        if (completedTodos === totalTodos) {
            for (var i=0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (var i=0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
// If evertyhing is true (completed), make everything false
// Otherwise making everything true
};


var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
    },
    addTodo: function() {
        todoList.addTodo();
    }
}
