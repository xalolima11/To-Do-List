const TaskModel = require("../models/taskModel");

// Create Task
exports.createTask = async (req, res) => {
    try {
        const newTask = new TaskModel(req.body);
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar tarefa" });
    }
};


// Get tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskModel.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar tarefas" });
    }
};

// Marcar Task como concluída
exports.markTaskCompleted = async (req, res) => {
    try {
        const { completed } = req.body;
        
        if (typeof completed !== "boolean") {
            return res.status(400).json({ error: "O campo 'completed' deve ser true ou false" });
        }

        const updatedTask = await TaskModel.findByIdAndUpdate(
            req.params.id,
            { completed },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ error: "Tarefa não encontrada" });
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar o status da tarefa" });
    }
};


// Delete task
exports.deleteTask = async (req, res) => {
    try {
        await TaskModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Tarefa removida com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao remover tarefa" });
    }
};
