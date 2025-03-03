const taskRepository = require("../repositories/taskRepository");

class TaskService {
    async getTasks() {
        return await taskRepository.getAllTasks();
    }

    async getTask(id) {
        return await taskRepository.getTaskById(id);
    }

    async addTodo(taskData) {
        return await taskRepository.createTask(taskData);
    }

    async updateTask(id, taskData) {
        return await taskRepository.updateTask(id, taskData);
    }

    async removeTask(id) {
        return await taskRepository.deleteTask(id);
    }
}

module.exports = new TaskService();
