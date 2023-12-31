const express =require('express');
const cors =require('cors');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
app.use(cors());
app.use(express.urlencoded());
app.use(express.json())


app.use('/', require('./route'));

// app.use('/', require('./routes')); 

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});