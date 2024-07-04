const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const connection = require('./db/connection')
const Users = require('./model/users')

app.use(express.json()) // to change body(objects prolly) coming from express into json.

//POST method where user data in postman(register page) is sent to db
app.post('/register', async (req, res) => {
    await Users.create(req.body)
    res.send("collection created")
})

//GET method to get users data in list
app.get('/users', async (req,res) => {
  const list = await Users.find()
  if(list) res.json({list})
})

//DELETE method where a targeted id can be deleted after an id is given after /users/..... in postman
app.delete('/users/:id', async (req,res) => {
  try{
    const result = await Users.findByIdAndDelete(req.params.id)
    if(result){
      res.json({msg:`ID ${req.params.id} deleted successfully`})
    }
  } catch(err){
    console.log(err)
  }
})

// PUT method to edit the user collection
app.put('/users/:id', async (req,res) => {
  try{
    const result = await Users.findByIdAndUpdate(req.params.id, req.body)
    if(result){
      res.json({msg:`ID ${req.params.id} updated successfully`})
    }
  } catch(err){
    console.log(err)
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
