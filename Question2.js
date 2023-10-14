const express = require('express')
const app = express()
// Host  define
const HOSTNAME =  ' localhost'
const  PORT =  3046;
let counter = 0
app.get('/' , function(req,res){
    res.json(`counter:${counter}`)
})
// get the Increment response
app.get('/Increment', function( req,res){
    counter++;
    res.json(`counter Increment by 1 :${counter}`)
})
// get the Decrement response
app.get('/Decrement',function(req,res){
counter--;
res.json(`counter Decrement by 1:${counter}`)
}
)
app.get('/restcounter',function(req,res){
    counter = 0
    res.json(` countern rest by 0 :${ counter} `)
})
app.listen(PORT,()=>{
    console.log(` express counter server is running at ${ HOSTNAME}:${PORT}`)
})