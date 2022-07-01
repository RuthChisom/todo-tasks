const { model } = require("mongoose");
const Task = require("../model/Task")

// get all tasks
exports.getAllTasks = async(req, res) => {
    try{
        let listed = await Task.find();
        if(listed.length === 0){
            return res.status(404).json({
                success: false,
                message: "No Task was found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Tasks Found!",
            tasks: listed
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Internal Server Error!",
            error: error.message
        })
    }
}

// get single task
exports.getTask = async(req, res) => {
    try{
        let id = {_id: req.params.id};
        let found = await Task.findOne(id);
        if(!found){
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }
        res.status(200).json({
            success: true,
            id:id,
            message: "Task Found!",
            task: found
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Internal Server Error!",
            error: error.message
        })
    }
}

// create a task
exports.createTask = async(req, res) => {
    try{
        let taskObj = await req.body;
        let created = await Task.create(taskObj);
        if(!created){
            return res.status(404).json({
                success: false,
                message: "Task Creation Failed"
            });
        }
        res.status(201).json({
            success: true,
            message: "Task Created Successfully!",
            task: created
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Internal Server Error!",
            error: error.message
        })
    }
}

// update a task
exports.updateTask = async(req, res) => {
    try{
        let id = {_id: req.params.id};
        let taskObj = req.body;
        let updated = await Task.findOneAndUpdate(id, taskObj,{new: true});
        if(!updated){
            return res.status(404).json({
                success: false,
                message: "Task not Updated"
            });
        }
        res.status(200).json({
            success: true,
            message: "Task Updated!",
            task: updated
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Internal Server Error!",
            error: error.message
        })
    }
}

// delete task
exports.deleteTask = async(req, res) => {
    try{
        let id = {_id: req.params.id};
        let deleted = await Task.findOneAndRemove(id);
        if(!deleted){
            return res.status(404).json({
                success: false,
                message: "Task not Deleted"
            });
        }
        res.status(200).json({
            success: true,
            message: "Task Successfully Deleted!",
            task: deleted
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Internal Server Error!",
            error: error.message
        })
    }
}