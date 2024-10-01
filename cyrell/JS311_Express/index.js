const express = require("express");
// const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 4000;

// CC - Good use of express.json() here. There is no need to use the "body-paser" module here because express comes with its own body parser under the hood.
app.use(express.json());

const { users } = require("./state");
let counter = users.length;

/* BEGIN - create routes here */
// CC - Working Route
app.get("/users", (req, res) => {
  return res.json(users);
});

// CC - Working Route
app.get("/users/:id", (req, res) => {
  return res.json(users.find((user) => parseInt(req.params.id) === user._id));

  /** CC - Alternatively, you can save the results of the ".find()" method into a variable and return that for cleaner looking code
 
 const foundUser = users.find((user) => parseInt(req.params.id) === user._id)
 return res.json(foundUser)

   */
});

// CC - Working Route
app.post("/users", (req, res) => {
  counter++;
  const user = { ...req.body, _id: counter };
  console.log(user, "this is the user object");
  users.push(user);
  console.log(req.body, "this is the request body");
  
  return res.json(users[users.length - 1]);
});

// CC - Working Route - Can edit user with a given ID
app.put("/users/:usersId", (req, res) => {
  const index = users.findIndex((user) => {
    return user._id == req.params.usersId;
  });

  users[index].name = req.body.name;
  users[index].occupation = req.body.occupation;
  
  return res.json(users);
});

// CC - Working Route - Can delete user with a given ID
app.delete("/users/:usersId", (req, res) => {
  // console.log(req, "These are your parameters")
  const index = users.findIndex((user) => {
    return user._id == req.params.usersId;
  });
  const deletedUser = users.splice(index, 1);

  console.log("code ran");
  return res.json({
    message: "User Deleted",
    user: deletedUser,
  });
});
/* END - create routes here */

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
