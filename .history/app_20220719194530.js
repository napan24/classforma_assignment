const express=require('express');
const app=express();
app.get('/',()=>{
    console.log("ok");
});
app.listen(3000,()=>{
    console.log("connected");
});