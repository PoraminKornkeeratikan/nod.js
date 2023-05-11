const express = require('express');
const chalk = require('chalk')
const { listen } = require('express/lib/application');
const app = express();
const port = 3000;

app.get("/", (req,res) => {

    res.send('Hello my name is ironman');
})

app.listen(port, ()=>{

    console.log("Listening on port" + chalk.green(" : " + port));
})
