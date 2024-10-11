const taskModel = require("../models/tasks.Models")

const getAll = async (req, res) => {
    const tasks = await taskModel.getAll();
    return res.status(200).json(tasks);

}

const creatdTask = async (req, res) => {
    const creatdTask = await taskModel.creatdTask(req.body);
    return res.status(201).json(creatdTask);
}

const deleteTask = async (req, res) => {
    const { id } = req.params;
    const deleteTask = await taskModel.deleteTask(id);
    return res.status(204).json(deleteTask);
}

const updateTask = async (req, res) => {
    const { id } = req.params;
    await taskModel.updateTask(id, req.body);
    return res.status(204).json();
}

module.exports = {
    getAll,
    creatdTask,
    deleteTask,
    updateTask,
}