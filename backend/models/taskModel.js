const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false }
}, {versionKey: false });

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = TaskModel;