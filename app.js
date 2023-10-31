const express = require("express")
const app = express()
// ALTERNATIVE 
//   const app = require("express")()

// saying nodejs to set all required config for ejs (to use ejs)

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    const name  = "Manish Basnet"
   res.render("home",{name :name,profession : "I am a student"})
  
})

app.get("/about",(req,res)=>{
    res.render("about.ejs")
})

app.get("/contact",(req,res)=>{
    res.send("bye bye contanct page")
})

app.get("/landing",(req,res)=>{
    res.render("landing.ejs")
})



// 3000 vanney port ma hamro node project run/allocate garyo
app.listen(3000,()=>{
    console.log("Nodejs project has started at port 3000")
})

//test for github

