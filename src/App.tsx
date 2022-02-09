import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [array, setArray] = useState<Todo[]>([]);

  const handleAdd = (e:React.FormEvent) =>{
    e.preventDefault();

    if(todo){
      setArray([
        ...array,
        {
          id: Date.now(),
          todo,
          isDone: false
        }
      ])
      setTodo("")
    }
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList array={array} setArray={setArray}/>
    </div>
  );
}

export default App;