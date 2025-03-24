import "./Task.css";

const Task = ({ task, deleteTask, changeTaskStatus }) => {
  return (
    <li className="task">
      <div
        onClick={() => changeTaskStatus(task.id)}
        style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
        className="task-text"
      >
        {task.text}
      </div>
      <button className="delete-button" onClick={() => deleteTask(task.id)}>Eliminar</button>
    </li>
  );
};

export default Task;
