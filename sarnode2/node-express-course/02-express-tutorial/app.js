const express = require("express");
const app = express();  
let { people } = require('./data.js')
   
app.use(express.static('./methods-public')) 
app.use(express.urlencoded({ extended: false}))  
app.use(express.json())
//middleware
console.log("Fj")  

app.get('/api/postman/people', (req,res) => { 
  res.status(200).json({success: true, data: req.body})
}) 
  
app.post('/api/postman/people', (req,res) => {  
  console.log(req.body)
  const { name } =req.body  
  const { na } =req.body 
  if (!name){ 
    return res.status(400).json({success:false, msg:"please away mr postman"})
  } 
  res.status(201).json({success:true, person:name, surname:na })
}) 

app.post('/login', (req, res) => { 
  const { name }  = req.body  
  if(name){ 
    return res.status(200).send(`welcome ${name}`)
  }  
  res.status(401).send(`please provide credentials`)
  
}) 
                       

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});