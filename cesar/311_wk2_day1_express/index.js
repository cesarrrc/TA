
const express = require('express')
const bodyParser = require(`body-parser`)
const app = express()
const port = process.env.PORT || 4000
//this is part of the middleware, and how to use bodyparser
// I need bodyparser for everytime i create an express server
app.use(bodyParser.json())
// this is also another way to use bodyparser with express without installing
//bodyparser

// CC - This should be the preferred method below
// app.use(express.json()) ^from above

const { users } = require('./state')
let counter = users.length 

/* BEGIN - create routes here */
//get users

// CC - Working Route
app.get("/users", (req, res) => {
  res.json(users)
})

// CC - Working Route - Can get a user by id
//get user/1
app.get('/users/:id', (req, res) => {
  const userId = req.params.id
  // all Higher order functions require a callback function like below
  const foundUser = users.find((user)=>{
    return user._id == userId
    
  }) 
  res.json(foundUser)
})

// CC - Working Route - Can create a new user and add it to the array
//post users
app.post("/users", (req, res) => {
  const userB = { name: req.body.name , age: req.body.age , _id: counter +1 }
  users.push(userB)
  // -1 returns the last element in an array
  return res.json(users[ users.length -1])
})

// CC - Working Route - Can edit a user in the list using an ID
//Put users/1
// we establish the end points on path by adding the name then colon then followed by key name
// Give your server the ability to respond to a PUT request with a path "/users/1" 
//and just change any key value (ex. name, occupation) on the first user object in the users array in state.js. 
//Use `res.json()` to send this user back to the client.
app.put("/users/:userId", (req, res) => {
  const userId = req.params.userId
  const foundIndex = users.findIndex((user)=>{
    return user._id == userId
    
  }) 
  users[foundIndex].name = "Bob"
  return res.json(users[foundIndex])
})

// CC - Working Route - Can delete a user in the list using an ID
//DELETE

// * Give your server the ability to respond to a DELETE request 
//with a path "/users/1" 
//and remove the first item from the users array. 
//Use `res.send()` to send back a messsage, "deleted"

app.delete("/users/:userId", (req, res) => {
  const userId = req.params.userId

  const foundIndex = users.findIndex((user)=>{
    return user._id == userId

  }) 
  users[foundIndex].isActive = false
  
  res.send("deleted")
})



/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))