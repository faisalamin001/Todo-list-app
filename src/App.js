import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

function App() {
  const [text, setText] = useState("");
  let [todoList, setTodoList] = useState([]);

  return (
    <div className='bg-slate-900 text-white text-center pt-10 h-screen w-full m-auto'>
      <Form
        text={text}
        setText={setText}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList
        setText={setText}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </div>
  );
}

export default App;
