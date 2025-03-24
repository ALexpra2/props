import { useState } from "react";
import "./App.css";
import Task from "./components/Task";
import AddTaskForm from "./components/AddTaskForm";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Hacer la compra", completed: false },
    { id: 2, text: "Llamar al médico", completed: true },
    { id: 3, text: "Hacer ejercicio", completed: false }
  ]);

  const addTask = (text) => {
    if (!text.trim()) return; // Evita agregar tareas vacías

    const newTask = {
      id: tasks.length + 1,
      text,
      completed: false
    };

    setTasks([...tasks, newTask]); //Agrego los task a los ya existentes
  };

  const deleteTask = (taskId) => {
    const taskFilter= tasks.filter(task => task.id !== taskId)
    setTasks(taskFilter);
  };
  
  const changeTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
  
    setTasks(updatedTasks);
  };

  return (
    <div className="taskContainer">
      <h1>Lista de tareas</h1>
      <AddTaskForm addTask={addTask} />
      <ul className="tasList">
        {tasks.map((task) => (
          <Task key={task.id} task={task} deleteTask={deleteTask} changeTaskStatus={changeTaskStatus} />
        ))}
      </ul>
    </div>
  );
};

export default App;
