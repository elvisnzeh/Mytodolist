import React, { useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import TaskItem from "./TaskItem"; 

const Todo = () => {
  const [task, setTask] = useState("");
  const [add, setAdd] = useState([]);

  const AddItems = () => {
    if (!task) {
      alert("enter something");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: task,
    };
    setAdd((oldList) => [...oldList, item]);
    console.log(item)
    setTask("");

    // const handle = (item) => {
    //   const doku = [...add, item];
    //    console.log(item);
    //    setTask(doku);
    //  }};
  };

  const Delete = (id) => {
    const newArray = add.filter((item) => item.id !== id);
    setAdd(newArray);
  };

  const Edit = (id, newValue) => {
    const updatedList = add.map((item) => {
      if (item.id === id) {
        return { ...item, value: newValue };
      }
      return item;
    });
    setAdd(updatedList);
  };

  const clearAllTasks = () => {
    setAdd([]);
  };

  return (
    <div>
      <div className="container">
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={AddItems} className="btn">
          Add
        </button>
      </div>

      <div className="con">
      <h5 className="task-left">{add.length} Task left</h5>
        <button onClick={clearAllTasks} className="btn4">
          <RiDeleteBin5Line />
        </button>
       
        <div className="con1"></div>
        <ul>
          {add.map((item) => (
            <TaskItem
              key={item.id}
              task={item}
              onDelete={Delete}
              onEdit={Edit}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
