import React from "react";

function TodoList({ todoList, setTodoList, setText }) {
  function closeHandler(id) {
    const filterData = todoList.filter((item, index) => {
      return index !== id;
    });
    setTodoList(filterData);
  }
  function edithandler(todo, id) {
    const filterData = todoList.filter((item, index) => {
      return index !== id;
    });
    setText(todo);
    setTodoList(filterData);
  }
  return (
    <>
      {todoList.map((todo, index) => {
        return (
          <div
            className=' m-auto flex items-center justify-around w-1/2'
            key={index}
          >
            <span className='bg-white text-slate-900 font-bold px-2 rounded-full'>
              {index + 1}
            </span>
            <span className='bg-slate-600 flex-grow ml-2 my-2 px-4 rounded hover:bg-slate-700 py-2 '>
              {todo}
            </span>
            <div>
              <button
                className='bg-green-700 ml-4 my-2 px-4 hover:bg-green-800 rounded py-2'
                onClick={() => edithandler(todo, index)}
              >
                <i className='fas fa-pen mr-1'></i> Edit
              </button>{" "}
              <button
                className='bg-red-700 ml-2 my-2 hover:bg-red-800 px-4 rounded py-2'
                onClick={() => closeHandler(index)}
              >
                <i className='fas fa-trash mr-1'></i> Delete
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TodoList;
