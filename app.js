const express=require('express');
const app= express();
const mongoose=require("mongoose");
const exhbs=require("express-handlebars");
const placeroutes=require("./routes/places")

const uri="mongodb+srv://baris1234:baris1234@cluster0.epqge.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

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

async function start(){
    try {
        await mongoose.connect(uri,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
    
        
    app.listen(process.env.PORT||port,()=>{
        console.log(`Listening to server: http://localhost:${port}`);

    })
    
    } catch (error) {
        console.log(error)
    }
    
    }
    start()