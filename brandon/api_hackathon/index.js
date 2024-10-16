const express = require('express')
const app = express()
const employees = require("./routes/employees")
const salaries = require("./routes/salaries")
const departments = require("./routes/departments")
const titles = require("./routes/titles")
const deptManagers = require("./routes/deptManagers")
const deptEmployees = require("./routes/deptEmployees")

const database = require("./mysql/connection")

const port = process.env.PORT || 4001;

app.use(employees)
app.use(salaries)
app.use(departments)
app.use(titles)
app.use(deptManagers)
app.use(deptEmployees)

app.get(database)

// app.get('/', (req, res) => {
//   // aControllerFile.js
//   database.execute('SELECT * FROM employees', (err, rows) => {
//     if (err) {
//       console.log({ 'message': 'Error occurred: ' + err })
//       return res.status(500).send('An unexpected error occurred')
//     }
//     res.json(rows)
//   });
//   // res.send('Welcome to our API')
// })

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});