import React from "react";
import { useState } from "react";

function App() {
   const [addModal, setAddModal] = useState(false);
   const [tasks, setTasks] = useState([]);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">task tracker</h1>
      <p>
        Click
        <button
          className="px-2 py-1 m-1 tracking-wide text-white bg-blue-500 rounded-md hover:bg-blue-700"
          onClick={() => setAddModal(true)}
        >
          +add
        </button>
        to add new task
      </p>
      {addModal && 
      <>
      <div className="fixed z-50 flex flex-col items-center justify-center w-1/2 bg-white border border-gray-300 rounded-md md:w-1/4">
        <div className="flex justify-between w-full p-4 bg-white rounded-md ">
          <p className="text-lg font-bold">Add new task</p>
          <button className="text-gray-500 hover:text-gray-900" onClick={() => setAddModal(false)}>X</button>
        </div>
        <form action="" className="w-full p-4 rounded-md ">
          <label htmlFor="project name" className="mb-1 text-sm tracking-wider" >Task Name</label>
          <input type="text" className="w-full p-1 mb-2 border border-gray-300 rounded-md bg-slate-200 focus:outline-none focus:bg-white"/>
          <label htmlFor="project Description" className="mb-1 text-sm tracking-wider" >Task Description</label>
          <textarea name="" id="" className="w-full p-2 mb-2 border border-gray-300 rounded-md bg-slate-200 focus:outline-none focus:bg-white"></textarea>
          <button className="px-2 py-1 m-1 tracking-wide text-white bg-blue-500 rounded-md hover:bg-blue-700">add task</button>
        </form>

        </div>
        
      
      </>}
    </div>
  );
}

export default App;
