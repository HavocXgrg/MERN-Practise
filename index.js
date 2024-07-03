const express = require('express')
const app = express()
const port = 5000

app.use(express.json()) // to change body(objects prolly) coming from express into json.


app.post('/register', (req, res) => {
    
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})