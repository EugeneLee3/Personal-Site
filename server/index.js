const express = require('express');
const app = express();

//https://www.youtube.com/watch?v=3YrOOia3-mo

app.get('/', (req, res) => {
    res.send("hlod");
});

app.listen(3001, () => {
    console.log("running on port 3001");
});