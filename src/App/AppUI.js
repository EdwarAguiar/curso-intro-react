import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI() {
    return (
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />

        <TodoContext.Consumer>
          {({
            error, 
            loading, 
            searchedTodos, 
            markCompleteTodo, 
            deleteTodo,
           }) => (
            <TodoList> 
              {error && <p>Desafortunadamente hubo un error...!</p>}
              {loading && <p>Por favor espere, estamos cargando la informacion...!</p>}
              {(!loading && !searchedTodos.length) && <p>¡Crea tu primera tarea!</p>}
  
              {searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text} 
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => markCompleteTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
            ))}
          </TodoList>
          )}
        </TodoContext.Consumer>

        <CreateTodoButton />
    </React.Fragment>

    );
}

export { AppUI };