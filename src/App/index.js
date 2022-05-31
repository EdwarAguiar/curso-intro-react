import React from "react";
import { TodoProvider } from '../TodoContext';
import { AppUI } from "./AppUI";

//import './App.css';

function App(props) {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
