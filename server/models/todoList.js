const mongoose = require('mongoose');

const TodoListSchema = mongoose.Schema({
    list: Array,
    Date:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('TodoList', TodoListSchema)



