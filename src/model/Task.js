const {Schema, model} = require('mongoose');

const taskSchema = new Schema({
    // _id: {type: Number,required:true},
    title: {type: String, required:true},
    description: {type: String, required:true, maxlength: 500},
    isDone: {type: Boolean, default:false},
    isUrgent: {type: Boolean, default:false},
    cost: {type: Number, default:null},
},
{timestamps:true}
);

const taskModel = model("tasks", taskSchema);

module.exports = taskModel;