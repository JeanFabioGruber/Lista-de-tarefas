const connection = require("./connection")

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const creatdTask = async (task) => {
    const { title } = task;

    const dateUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)';

    const [creatdTask] = await connection.execute(query, [title, 'pendente', dateUTC])
    return { insertId: creatdTask.insertId };
};

const deleteTask = async (id) => {
    const deleteTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id])
    return deleteTask;

}

const updateTask = async (id, task) => {
    const { title, status } = task;
    const updateTask = await connection.execute('UPDATE tasks SET title = ?, status = ? WHERE id = ?', [title, status, id]);
    return updateTask;

}

module.exports = {
    getAll,
    creatdTask,
    deleteTask,
    updateTask,
}