//TO DO LIST V1

var todos = ['item 1', 'item 2', 'item 3'];

//DISPLAY TO DO LIST
function displayTodos() {
    console.log('My Todos:', todos);
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


