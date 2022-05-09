const express=require('express');
const app= express();
const mongoose=require("mongoose");
const exphbs=require("express-handlebars");

const uri="mongodb+srv://baris:baris1@cluster0.epqge.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.use(express.static(__dirname+"/public"));

app.set("view engine","hbs");
app.engine('hbs',exphbs.engine({
    extname:'hbs',
    defaultLayout:'index',
    layoutsDir:__dirname+'/views/layouts',
    partialsDir:__dirname+'/views/partials',
}));

const port=3000;
app.listen(port);
console.log(`Listening to server: http://localhost:${port}`);

app.get('/',(req,res)=>{
    res.send("Hello World")
})