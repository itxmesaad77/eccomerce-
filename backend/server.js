const express = require('express');
const app = express();
const PORT=5000;

app.get('/',(req,res)=>{
res.send('My name is Saad');
});

app.listen(PORT,()=>{
    console.log(`Server Is Listening on Port: ${PORT}`);
});