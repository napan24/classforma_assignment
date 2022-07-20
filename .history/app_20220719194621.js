const express=require('express');
const app=express();
app.get('/',()=>{
    res.send("ok");
});
app.listen(3000,()=>{
    console.log("connected");
});