const express=require("express")
const app=express()
const Model=require('./Model/Setup')
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","hbs")

app.get('/',(req,res)=>{
    Model.find((err,data)=>{
        res.render("index",{data})
        console.log(data);

    })
})
app.get('/form',(req,res)=>{
    res.render("Foam")})
    
app.get('/update/:id',(req,res)=>{
    Model.findByIdAndUpdate(req.params.id,req.body,(err,data)=>{
        res.render("update",{
            name:data.Name,
            age:data.Age,
            number:data.number,
            uni:data.Universty,
            email:data.email,
        })
    })
  })

app.post('/form',(req,res)=>{
    const insert=new Model({
        Name:req.body.fname,
        Age:req.body.age,
        Universty:req.body.uni,
        number:req.body.number,
        email:req.body.email
    })
    insert.save()
})
app.get('/delete/:id',(req,res)=>{
    Model.findByIdAndRemove(req.params.id,(err,data)=>{
        console.log(data);
    })
    console.log(req.params.id);
})
const port=process.env.PORT || 4000
app.listen(port,()=>{console.log("running..."+port);})