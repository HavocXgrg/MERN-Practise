const express = require('express')
const app = express()
const port = 5000

//  a code that return item which first letter starts with s. it is shown in postman app.
const users = ['ram','shyam','gopal', 'narayan']
app.get('/users', (req, res) => {
    const filteredUser = users.filter((item,id)=>{
        if (item[0]===req.query.startswith){
            return item
        }
    })
  res.send(filteredUser)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})