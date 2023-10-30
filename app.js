const express = require("express")
const app = express()
// ALTERNATIVE 
//   const app = require("express")()

app.get("/",(req,res)=>{
   res.send("<mark> hello world </mark>")
})

app.get("/about",(req,res)=>{
    res.send("About page")
})

app.get("/contact",(req,res)=>{
    res.send("Contact page")
})



// 3000 vanney port ma hamro node project run/allocate garyo
app.listen(3000,()=>{
    console.log("Nodejs project has started at port 3000")
})

