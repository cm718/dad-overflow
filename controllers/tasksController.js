const db = require("../models");
/*
todos/tasks schema:
body
isComplete
ref to Users
*/

module.exports = {

    getUserTasks: function (req, res) {
        db.Tasks.find()
            .then(tasks => json(tasks))
            .catch(err => json(err));
    },

    createNewTask: function (req, res) {
        const body = req.body;

        db.Tasks.create(body)
            .then(newTask => json(newTask))
            .catch(err => json(err));
    },


    // update a user's task by user's and task's id 
    updateOneTask: function (req, res) {
        const userId = req.params.userId;
        const body = req.body;

        db.Tasks.updateOne(
            { userId },
            {
                $set:
                {
                    body: body.body,
                    isComplete: body.isComplete
                }
            }
        ).then(userTasks => res.json(userTasks))
            .catch(err => res.json(err));

    },
    deleteOneTask: function (req, res) {
        const taskId = req.params.taskId;
        const userId = req.params.userId;

        db.Tasks.deleteOne({ _id: taskId, userId })
        // returns http code for success 
            .then(() => res.send())
            .catch(err => json(err));
    }
};