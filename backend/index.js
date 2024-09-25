const express = require('express');
const app = express();
const {schema1,schema2} = require('./types');

app.use(express.json());

app.post("/todo",function(req,res){
    // add todos 
    const result = schema1.safeParse(todo);
    if(result.success)
    {
        
    }
    else 
    {
        res.json({msg:"Invalid Input"});
    }
});
app.get("/todos",function(req,res){
    // view all added todos 
});

app.put("/completed",function(req,res){
     //marked a todo completed 
     const result = schema1.safeParse(todo);
    if(result.success)
    {
        
    }
    else 
    {
        res.json({msg:"Invalid Input"});
    }
});


//1 basic boiler plate 
//2 routes 
//3 zod

