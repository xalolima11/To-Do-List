import { useEffect, useState } from "react";
import TaskService from "../services/TaskService";
import Task from "./Task";

const TaskList = () => {
  // Estado para armazenar as tarefas
  const [tasks, setTasks] = useState([]);
  // Estado para armazenar o valor do input
  const [newTask, setNewTask] = useState("");

  // Função para carregar as tarefas ao montar o componente
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
    if (!newTask.trim()) return; // Evita adicionar tarefas vazias

    try {
      const response = await TaskService.createTask({ title: newTask, completed: false });
      setTasks([...tasks, response.data]); // Atualiza a lista de tarefas
      setNewTask(""); // Limpa o input
    } catch (error) {
      console.error("Erro ao adicionar tarefa", error);
    }
  };

  // Função para alternar o status de concluído
  const handleToggleTask = async (taskId, completed) => {
    await TaskService.updateTask(taskId, { completed });
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === taskId ? { ...task, completed } : task
      )
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
