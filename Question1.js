const { json } = require("express")
const http = require("http")

// host name 
const HOSTNAME = 'localhost'


// port 
const PORT = 8032
// ++++++++++++++++++++++++++++ men products
const menProducts= [ {id:1,name:" Shirst",color:"Blcak",size:"M",price:300},
                   {id:2,name:'shoes',color:' red',size:7,price:600,Brand:" Addidas"},
            { id:3, name:" T- shirt" ,color:" yellow",size:" S",price:300},

         {id:4,name:' Denims Jackets' , color:" Brown",size:" L",price:600}, { id:5,name:"Kurta",size:"XL",price:900,color:" pink" , brand:"Addidas"},
         {id:6,name:" smartWatch",price:2000,color:" black" , conectvity:" Thorough Mobile"},
         { id:7, name: "Jeans",catageory:" Demese",price:"1200",color:" balck"},
         { id:8 , name: " cargopants",size:" L" , price: 600,color:" black"},
         { id:9,name:" Formal Trousers", size:" LM",price: 800, color:" red"},
         { id : 10,name:" Sweater", size:" M " , price:500, color:" Black and white "}

]
//++++++++++++++++++++ women products 
const womenProduct = [
    
    {id:1,name:"Lakme Eyeconic Kazal",price:100, expireDate:" Before use 2025-10-4"},
{ id:2 , name: " HImalaya Furifying Neem facewash",price: 175,expireDate:" 2024-12-10" , Brand:" Himalaya"},
{ id: 3,name:" Dove Hair Fall Shampoo", price: 200,expireDate:" use before 2025",brand:" Dove"},
{ id:4,name:" sunsilk black shine shampoo" , price: 350, expireDate:" before use 2024 " , brand: " sunsilk"}, 
{ id:5, name:" Dupattas" ,color:" yellow",price: 50} , { id:6, name:"sandals" , type:" heals" , price:" 1500", color:" black and white", brand:" bata"} 
,{ id:6,name:"sarees" , type:" Banarashi saree", price: 2000, color:" purple"}
 ,{id:7 , name:" salwar patiala" , price : 2000,color:" voilet green" },{ id:8,name:"Soap " , catageory:" Lux white jaismin", price:200}
  , { id:9 , name:" Perfume" , catageory:"Park Avenue Original deo", price: 200} ,
  { id :10 ,name:"Skirts " , catageory:"Zwerlon" , price:399}

]
// ++++++++++++++++++++++++++++++++++++++++++++++// 

 ///// node js http server ///////////
const productServer = http.createServer((req,res) =>{
    if(req.url == '/'){
       
        res.end(" Welcome to men & women dummy data")
        res.statusCode = 200;
        res.setHeader(' content-type','application/json')
    } else if( req.url == '/men'){
        res.end(JSON.stringify(menProducts.slice(0.10)))
        res.statusCode = 200;
        res.setHeader(' content-type','application/json')
    } else if(req.url == '/women'){
        res.end(JSON.stringify(womenProduct.slice(0,10)))
    } else if(req.url != '/men'&&'/women'){
        res.end(" page not found ")
        res.statusCode = 200;
        res.setHeader(' content-type','application/json')
    }
})

productServer.listen( PORT,()=>{
    console.log(` products server is runing at ${ HOSTNAME}:${ PORT}`)
})