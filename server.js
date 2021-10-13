const express = require('express')
const app= express()
const connectDB = require('./config/connectDB')
const USER = require('./models/USER')
connectDB()
app.use(express.json())


// get all users
app.get('/all', (req,res)=> {
    USER.find()
    .then(users => res.send(users))
    .catch(err => console.log(err))
})
// add a new user

app.post('/add',async (req,res)=>{
    const {name, age, email, phone }= req.body
    const newUser= new USER({
        name,age,email,phone
    })
    await newUser.save()
    .then(user=>res.send(user))
    .catch((err=>console.log(err))) 
  })

// edit a user by id

app.put('/edit/:_id',(req,res)=>{
    const {_id}=req.params
    const {name,age,email,phone}=req.body
    USER.findByIdAndUpdate ({_id},{$set:{name,age,email,phone}})
    .then(users=>res.send(users))
    .catch((err=>console.log(err)))
  })

  //  delete a user by id
  
   app.delete('/delete/:_id',(req,res)=>{
    const {_id}=req.params
    USER.findByIdAndRemove ({_id})
    .then(users=>res.send(users))
    .catch((err=>console.log(err)))
  })








const Port=5000
app.listen(Port,(err)=>{err?console.log(err):console.log(`the server is running on the ${Port}`);
})