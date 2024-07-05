//check even or odd

const express=require('express')
const app=express();
const port=3008

app.get('/',(req,res)=>{
    const num=req.query.num*1;
    const result=num%2===0?'even':'odd'
    res.send(`the num is${num} and result is ${result}`)
})


app.listen(port,()=>{
    console.log("server is running");
 })


lklklk agshgas
ajsjas As