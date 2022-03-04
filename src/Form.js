import React from "react";

function Form({ text, setText, todoList, setTodoList }) {
  function addHandler(e) {
    e.preventDefault();
    setTodoList([...todoList, text]);
    console.log(todoList);
    setText("");
  }
  return (
    <div className=' mb-5 m-auto text-center'>
      <h1 className='text-4xl pb-8 font-bold'>To-do App</h1>
      <input
        className='bg-slate-600 border-2 border-slate-400 rounded mr-4 py-2 px-3 text-white font-bold'
        type='text'
        name='text'
        placeholder='todo...'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className='bg-blue-700 px-6 hover:bg-blue-800 rounded py-2 '
        onClick={addHandler}
      >
        Add
      </button>
    </div>
  );
}

export default Form;
