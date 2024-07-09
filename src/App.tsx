import React from 'react';
import './App.scss';
import TodoList from "./Components/TodoList";

const App: React.FC = () => {
  return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList/>
      </div>
  );
};

export default App;
