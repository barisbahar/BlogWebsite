const express=require('express');
const app= express();
const mongoose=require("mongoose");
const exhbs=require("express-handlebars");
const placeroutes=require("./routes/places")

const uri="mongodb+srv://baris:baris1@cluster0.epqge.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const hbs = exhbs.create({
    defaultLayout:'main',
    extname:'hbs'
    })
    app.engine('hbs',hbs.engine)
    app.set('view engine', 'hbs');
    app.set('views', './views');
    app.use(express.urlencoded({extended:true}))
    app.use(express.static(__dirname+"/public"));
    app.use("/",placeroutes);

const port=3000;
app.listen(port);
console.log(`Listening to server: http://localhost:${port}`);

async function start(){
    try {
        await mongoose.connect(uri,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
    
        
    app.listen(PORT,()=>{
        console.log("Server Running")
    })
    
    } catch (error) {
        console.log(error)
    }
    
    }
