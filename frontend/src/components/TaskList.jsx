import { useEffect, useState } from "react";
import TaskService from "../services/TaskService";
import Task from "./Task";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Função para carregar as tarefas
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await TaskService.getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error("Erro ao buscar tarefas", error);
    }
  };

  // Função para adicionar uma nova tarefa
  const handleAddTask = async () => {
    if (!newTask.trim()) return;

    try {
      const response = await TaskService.createTask({ title: newTask, completed: false });
      setTasks([...tasks, response.data]);
      setNewTask("");
    } catch (error) {
      console.error("Erro ao adicionar tarefa", error);
    }
  };

  // Função para concluir uma tarefa
  const handleToggleTask = async (taskId, completed) => {
    await TaskService.updateTask(taskId, { completed });
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task._id === taskId) {
          return { ...task, completed }; 
        }
        return task;
      })
    );
  };

  // Função para deletar uma tarefa
  const handleDeleteTask = async (taskId) => {
    try {
      await TaskService.deleteTask(taskId);
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Erro ao deletar tarefa", error);
    }
  };

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <div>
        <input
          type="text"
          className="input-box"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask} className="button button-add">
          Adicionar
        </button>
      </div>
      {tasks.map((task) => (
        <Task
          key={task._id}
          task={task}
          onToggle={handleToggleTask}
          onDelete={handleDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
