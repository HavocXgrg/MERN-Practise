const express = require('express')
const app = express()
const port = 5000

app.use(express.json()) // to change body(objects prolly) coming from express into json.

const mongoose = require('mongoose');

const connection = async() => {
    
    //handling promise with async and await
    const isConnected = await mongoose.connect('mongodb://127.0.0.1:27017/test');
    if(isConnected){
        console.log("connection success")
    } else {
        console.log("connection failed")
        
    }
}
connection()

app.post('/register', (req, res) => {
    
    
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})