import { useState } from "react";
import "./AddTaskForm.css";

const AddTaskForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(inputValue);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="taskForm">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Agrega una tarea"/>
        <button type="submit">Agregar</button>
      </form>
        </>
    );
};

export default AddTaskForm;
