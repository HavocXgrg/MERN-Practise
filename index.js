const express = require('express')
const app = express()
const port = 5000

//  a code that return item which first letter starts with s. it is shown in postman app.
// const users = ['ram','shyam','gopal', 'narayan']
// app.get('/users', (req, res) => {
//     const filteredUser = users.filter((item,id)=>{
//         if (item[0]===req.query.startswith){
//             return item
//         }
//     })
//   res.send(filteredUser)
// })
const users = [
    {id: 444 , name:'ramos', address:'madrid'},
    {id: 333 , name:'yamal', address:'barca'},
    {id: 717 , name:'kevin', address:'mancity'},
    {id: 100 , name:'messi', address:'miami'},
    {id: 777 , name:'mbappe', address:'psg'}
]
app.get('/users/:id', (req, res) => {
    const userID = parseInt(req.params.id,10) //base 10 of number after string -> int   
    // Find the user with the matching id
    const result = users.find(item=> item.id === userID)
    
    // Check if the user was found
    if(result){
        res.send(result)
    } else {
        res.send("Error, There is no such user: ")
    }
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})