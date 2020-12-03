const express=require("express");
const app=express();
const PORT=process.env.PORT || 8383;
app.get("/",(req,res)=>{
    res.send("hellow world");
})
app.listen(PORT,console.log(`Server start on port ${PORT}`));