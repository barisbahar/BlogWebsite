const {Schema,model} = require('mongoose');
const schema = new Schema({

    title: {
        type:String,
        required : true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    completed : {
        type:Boolean,
        default:false,
    }
})

module.exports=model('Place',schema)