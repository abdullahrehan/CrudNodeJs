const moongose=require("mongoose")

moongose.connect("mongodb+srv://Rehan:123@qwerty@testing.hv5ln.mongodb.net/test",{useNewUrlParser:true,useUnifiedTopology:true})


const Schema=new moongose.Schema({
    Name:String,
    Age:Number,
    Universty:String,
    number:Number,
    email:String
})
const Model=new moongose.model("P-table",Schema)


module.exports=Model