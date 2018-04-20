//TO DO LIST V%

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
        
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed) {
                completedTodos++;
            }
        }
    
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
    }
};


var handlers = {
    addTodo: function() {
        var newTodo = document.getElementById('addTodoTextInput')
        todoList.addTodo(newTodo.value);
        newTodo.value = "";
		view.displayTodos();
    },
    editTodo: function() {
        var editedTodoPosition = document.getElementById('editTodoPositionInput');
        var editedTodo = document.getElementById('editTodoTextInput');
        todoList.editTodo(editedTodoPosition.valueAsNumber, editedTodo.value);
        editedTodoPosition.value = '';
        editedTodo.value = '';
		view.displayTodos();
    },
    deleteTodo: function() {
        var deleteTodoPosition = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPosition.valueAsNumber);
        deleteTodoPosition.value = '';
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
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoItem = document.createElement('li');
			var todo = todoList.todos[i];
			var todoTextWithCompletion = '';
			if (todo.completed === true) {
				todoTextWithCompletion = '(x) ' + todo.todoText;
				} else {
				todoTextWithCompletion = '( ) ' + todo.todoText;
				}
			todoItem.id = i;
			todoItem.textContent = todoTextWithCompletion;
			todoItem.appendChild(this.createDeleteButton());
			todoUL.appendChild(todoItem);
        }
    },
	createDeleteButton: function() {
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	}
};
