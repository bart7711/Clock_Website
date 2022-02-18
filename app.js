const express = require("express");
const app = express();

app.get("/",(req,res) =>{
    res.sendFile(__dirname+"/public/main.html")
})

app.listen(8080, () =>{
    console.log("The countdown app has started.");
});