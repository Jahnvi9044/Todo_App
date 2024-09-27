const express = require('express');
const app = express();
const {schema1,schema2} = require('./types');
const {Todo}  = require('./db');



app.use(express.json());

app.post("/todo",async function(req,res){
    // add todos
    
    const data = req.body;
    const result = schema1.safeParse(data);
    if(!result.success)
    {
         res.status(411).json(
         {msg:"Invalid Input"});
         return ;
    }

    //Put it in mongodb
    const title = data.title;
    const description = data.description;
    const completed = data.completed;  
     await Todo.create({
       title,
       description,
       completed
     });
     res.status(200).json({message:"Todo Successfully added! "});   

   });
app.get("/todos", async function(req,res){
    // view all added todos 

    const todos = await Todo.find({});
    res.json({
        todos:todos
    });
});

app.put("/completed",async function(req,res){
     //marked a todo completed 
     const data = req.body;
     const result = schema2.safeParse(data);
     console.log(data);
    if(!result.success)
    {
        res.json({msg:"Invalid Input"});
        return ;
    }
    //mark the todo as done 
      
    const list  = await Todo.updateMany(
    //    { title : data.title } ,
    // { $set: {completed : true}}
    // todos are removed according to _id

    { _id : req.body.id },
    { completed : true }
    );
    res.json({message:"Updated "});
   
});

app.listen(3000);

//1 basic boiler plate 
//2 routes 
//3 zod
//4 Mongodb - tablr creation

