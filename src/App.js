import React, {useState} from "react";

import './style.css'

const App = () => {
  const [todo_count, setCount] = useState(0)
  const [inputHandler, setInput] = useState("");
  const [todos, setTodos] = useState([])
  const newTodo = () => {
    if(inputHandler != ""){
      setCount(todo_count + 1);
      setTodos([...todos, {
        "title": inputHandler,
        "completed": false,
        "id": todo_count
      }])
      setInput("");
    }
  }
  const handleInput = (event) => {

    setInput(event.target.value)
  }
  const handleKeyDown = (event) => {

    if (event.key === 'Enter' & inputHandler != ""){
      setCount(todo_count + 1);
      setTodos([...todos, {
        "title": inputHandler,
        "completed": false,
        "id": todo_count
      }])
      setInput("");
    }
  }
  const deleteTodo = (id) => {
      setTodos(todos.filter((item) => (item.id != id) && item))
  }

  const markCompleted = (id) =>{
    const new_todos = []
    todos.forEach((value) => {
      if(value.id === id){
        value.completed = true;
      }
      new_todos.push(value)
    })
    setTodos(new_todos)
  }

  return (
    <div className="App">
      <h2>Simple Todo application</h2>
      <div className="AddTodo">
        <input type="text" placeholder="I will study...." onChange={handleInput} value={inputHandler} onKeyDown={handleKeyDown}/>
        <button className="btn add" onClick={newTodo}>ADD</button>
      </div>
      <div className="todos">
        <ul>
          {todos.map((value, index) => {
            return (
              <li key={index}>{value.completed ? <strike>{value.title}</strike>: <>{value.title}</>}
                <div className="actions">
                  <button className="btn complete" onClick={()=>markCompleted(value.id)}>Completed</button>
                  <button className="btn remove" onClick={()=>deleteTodo(value.id)}>Remove</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
