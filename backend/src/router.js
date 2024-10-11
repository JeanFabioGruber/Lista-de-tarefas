const express = require("express");
const tasksController = require("./controllers/tasksController")
const middlawares = require("./middlewares/tasksMiddleware")

const router = express.Router();

router.get("/tasks", tasksController.getAll);
router.post("/tasks", middlawares.validateBody, tasksController.creatdTask);
router.delete("/tasks/:id", tasksController.deleteTask);
router.put("/tasks/:id", middlawares.validadePutBody, tasksController.updateTask);



module.exports = router;
