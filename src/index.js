const express = require('express')
const app = express()
const port = 5000
const connection = require('./db/connection')
const Users = require('./model/users')

app.use(express.json()) // to change body(objects prolly) coming from express into json.

app.post('/register', (req, res) => {
    Users.create(req.body)
    res.send("collection created")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
