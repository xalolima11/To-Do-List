const Task = require("../domain/task");

class TodoRepository {
    async getAll() {
        return await Task.find();
    }

    async getById(id) {
        return await Task.findById(id);
    }

    async add(taskData) {
        const task = new Task(taskData);
        return await task.save();
    }

    async update(id, taskData) {
        return await Task.findByIdAndUpdate(id, taskData, { new: true });
    }

    async remove(id) {
        return await Task.findByIdAndDelete(id);
    }
}

module.exports = new TodoRepository();
