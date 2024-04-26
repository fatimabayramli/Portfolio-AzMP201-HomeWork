import React,{useState} from "react";

const ToDoApp = () => {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const addTodo = () => {
      setTodos([...todos, inputValue]);
      setInputValue('');
    };
  
    const deleteTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  
    const editTodo = (index, newValue) => {
      const newTodos = [...todos];
      newTodos[index] = newValue;
      setTodos(newTodos);
    };
  
    return (
      <div className="todo-app">
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={addTodo}>Add</button>
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <input value={todo} onChange={(e) => editTodo(index, e.target.value)} />
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }

export default ToDoApp