const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div className="task">
      <span className={task.completed ? "completed" : ""}>
        {task.title} {task.completed ? "(Concluído)" : ""}
      </span>
      <div>
        <button
          onClick={() => onToggle(task._id, !task.completed)}
          className="button button-toggle"
          disabled={task.completed} // Disable button when task is completed
          style={{ backgroundColor: task.completed ? "gray" : "blue" }}
        >
          {task.completed ? "Concluído" : "Concluir"}
        </button>
        <button onClick={() => onDelete(task._id)} className="button button-delete">
          Excluir
        </button>
      </div>
    </div>
  );
};

export default Task;

