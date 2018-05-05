//TO DO LIST V5


/*
1. Need to display delete button only when you hover over list item
2. Have an actual button to toggle complete or incomplete for the todo items
3. Create a clear all completed button on the button
4. Link to database - to save name of list/date and todo list items
*/


var todoList = {
    todos: [],
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    editTodo: function (position, newText) {
        this.todos[position].todoText = newText;
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function () {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        
        this.todos.forEach(function(todo) {
            if (todo.completed) {
                completedTodos++;
            }
        });
        
        this.todos.forEach(function(todo) {
            if (completedTodos === totalTodos) {
                todo.completed = false;
            } else {
                todo.completed = true;
            }
        });
    }
};

var handlers = {
    addTodo: function() {
        var newTodo = document.getElementById('addTodoTextInput')
        if (newTodo.value != "") {
                    todoList.addTodo(newTodo.value);
        newTodo.value = "";
		view.displayTodos();
        }
    },
    editTodo: function() {
        var editedTodoPosition = document.getElementById('editTodoPositionInput');
        var editedTodo = document.getElementById('editTodoTextInput');
        todoList.editTodo(editedTodoPosition.valueAsNumber, editedTodo.value);
        editedTodoPosition.value = '';
        editedTodo.value = '';
		view.displayTodos();
    },
    deleteTodo: function(position) {
        todoList.deleteTodo(position);
		view.displayTodos();
    },
    toggleCompleted: function() {
        var completedTodoPosition = document.getElementById('toggleTodoPositionInput');		todoList.toggleCompleted(completedTodoPosition.valueAsNumber);
        completedTodoPosition.value = '';
		view.displayTodos();
    },
	toggleAll: function() {
		todoList.toggleAll();
		view.displayTodos();
    }
};


var view = {
    displayTodos: function() {
		var todoUL = document.getElementById('todoList');
		todoUL.innerHTML = '';
        todoList.todos.forEach(function(todo, position) {
            var todoItem = document.createElement('li');
            var todoTextWithCompletion = '';
            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }
			todoItem.id = position;
			todoItem.textContent = todoTextWithCompletion;
			todoItem.appendChild(this.createDeleteButton());
			todoUL.appendChild(todoItem);
        }, this);
    // To refactor the display todos everything stays the same but inorder to give the li items an id, we have to pass the position argument in the callback. Then the this.createDeleteButton() function does not work because 'this' is now refering to the forEach, not the view object. So we pass this as another argument in the forEach, outside the callback.
    },
	createDeleteButton: function() {
		var deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        deleteButton.textContent = 'x';
//        var deleteIcon = document.createElement('span');
//		deleteIcon.className = "fa fa-trash";
//        deleteButton.appendChild(deleteIcon);
		return deleteButton;
	},
    createToggleComplete: function() {
        var toggleComplete = document.createElement('button');
        toggleComplete.className = 'toggleComplete';
        toggleComplete.textContent = '( )';
        return toggleComplete;
    },
	setUpEventListeners: function() {
        document.addEventListener('DOMContentLoaded', function() {
            var todosUl = document.querySelector('ul');
            todosUl.addEventListener('click', function(event) {
                var elementClicked = event.target;
                if (elementClicked.className === 'deleteButton') {
                    var positionId = parseInt(elementClicked.parentNode.id);
                    handlers.deleteTodo(positionId);
                }
            });
            
            var todoInput = document.getElementById('addTodoTextInput');
            todoInput.addEventListener("keyup", function(event) {
                event.preventDefault();
                if (event.keyCode === 13) {
                    handlers.addTodo();
                }
            })
        });
	}
};



view.setUpEventListeners();



