const express = require('express');
const cors = require('cors');
const http = require('http');
const connectToMongo = require('./db');
const app = express();




app.set('view engine','ejs')
app.use(express.static('public'))

const PORT = process.env.PORT || 4000 ;


// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectToMongo();

// Routes
app.use('/api/auth', require('./routes/auth'));

const User = require('./models/User');


app.post("/", async (req, res)=>{
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);

})


  // Start the server
app.listen(PORT, () => {
console.log(`Server is running on port http://localhost:${PORT}`);
});
