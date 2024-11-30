const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
    email: { 
        type: String,
       
    },
    password: {
        type: String,
       
    },
    name: {
        type: String,
        
    },
    phone:{
        type: String,
     
    }
}, {timestamps: true});

module.exports = mongoose.model('notes', userSchema);
