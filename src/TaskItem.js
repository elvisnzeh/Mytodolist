import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";


const TaskItem = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(task.value);

  const handleSave = () => {
    onEdit(task.id, editedValue);
    setIsEditing(false);
  };

  return (
    <li className="three">
      {isEditing ? (
        <input
  className="full-width-input four"
  type="text"
  value={editedValue}
  onChange={(e) => setEditedValue(e.target.value)}
  style={{ width: "83%", left: "-1%",  border:"1px solid black"}} 
/>
      ) : (
        task.value
      )}
      {isEditing ? (
    <>
      <button className="btn3" onClick={handleSave}>
        Save
      </button>
    </>
  ) : (
    <>
      <button className="btn5" onClick={() => setIsEditing(true)}>
        <FaRegEdit />
      </button>
      <button className="btn2" onClick={() => onDelete(task.id)}>
        <RiDeleteBin5Line />
      </button>
    </>
  )}
</li>
    
  );
};

export default TaskItem;
