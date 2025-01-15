const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
  
    name: {
        type: String,
        
    },
    phone:{
        type: String,
     
    },
    email: { 
        type: String,
       
    },
    password: {
        type: String,
       
    }
}, {timestamps: true});

module.exports = mongoose.model('users', userSchema);
