const express = require("express");

//Initioalization
const booky = express();

booky.get("/", (req, res) =>{
    
});

booky.listen(3000, () => console.log("Hey! server is running!"));