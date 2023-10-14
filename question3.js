const express = require("express")
const hostname = 'localhost'
const port = 5007
const app = express()
app.get('/',(req,res)=>{
    res.send(' I am homepage ')
    res.statusCode = 200
    res.setHeader('text-type','text-plain')
})
app.get('/about',(req,res) =>{
    res.send(' I am about page ')
    res.statusCode = 200
    res.setHeader('content-type','text-plain')
})
app.get('/contact',(req,res) =>{
    // construct html tag for snding email
    const mail = '<a href="mailto:aman2562004@gmail.com">sendEmail</a>'
    res.send((mail))
    res.statusCode = 200
    res.setHeader('content-type','html-text')
    
})
app.listen(port,()=>{
    console.log(`server is runing at ${hostname}:${port}`)
})