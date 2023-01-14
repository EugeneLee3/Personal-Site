// const {PythonShell} = require('python-shell');

// let options = {
//     scriptPath: "./script",
//     args: ["AAPL", 45]
// }

// PythonShell.run("test.py", options, (err,res) => {
//     if (err) console.log(err)
//     if (res) console.log(res)
// })


const express = require('express');
const app = express();
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost', 
    user: 'root',
    password: 'password',
    database: 'PersonalSiteDatabase'
})


app.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO blog_comments (blogPost, blogComment) VALUES ('test', 'test v2');";
    db.query(sqlInsert, (err, result) => {
        res.send("test 123");
    });
    console.log('bye');
});

app.listen(3001, () => {
    console.log("running on port 3001");
});