import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks"; // Adjust this URL if needed

const getTasks = async () => {
  return await axios.get(API_URL);
};

const createTask = async (task) => {
  return await axios.post(API_URL, task);
};

const updateTask = async (taskId, updatedTask) => {
  return await axios.patch(`${API_URL}/${taskId}`, updatedTask);
};

const deleteTask = async (taskId) => {
  return await axios.delete(`${API_URL}/${taskId}`);
};

// Export the functions properly
const TaskService = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};

export default TaskService;
