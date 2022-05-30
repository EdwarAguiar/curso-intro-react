import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    markCompleteTodo,
    deleteTodo,
}) {
    return (
        <React.Fragment>
        <TodoCounter 
          total={totalTodos}
          completed={completedTodos}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

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

        <CreateTodoButton />
    </React.Fragment>

    );
}

export { AppUI };