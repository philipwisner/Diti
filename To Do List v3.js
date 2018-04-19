//TO DO LIST V1

var todos = ['item 1', 'item 2', 'item 3'];

//DISPLAY TO DO LIST
function displayTodos() {
    window.console.log('My Todos:', todos);
}



//ADD TO DO TO LIST
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

//EDIT TO DO IN LIST
function editTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}


//DELETE TODO
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

function runAll() {
    displayTodos();
    addTodo();
    editTodo();
    deleteTodo();
}

runAll();



//TO DO LIST V2
//var todoList = {
//    todos: ['item 1', 'item 2', 'item 3'],
//    displayTodos: function () {
//        window.console.log('My ToDos:', this.todos);
//    },
//    addTodo: function (todo) {
//        this.todos.push(todo);
//        this.displayTodos();
//    },
//    editTodo: function (position, newValue) {
//        this.todos[position] = newValue;
//        this.displayTodos();
//    },
//    deleteTodo: function (position) {
//        this.todos.splice(position, 1);
//        this.displayTodos();
//    }
//};


//TO DO LIST V3
var todoList = {
    todos: [],
    displayTodos: function () {
        window.console.log('My ToDos:', this.todos);
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
