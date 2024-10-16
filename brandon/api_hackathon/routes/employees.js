// Create a router and make GET routes for /, /:id, firstname/:first_name

const express = require("express")
const employees = require("../controllers/employees")
const router = express.Router()

// Route for /employees
router.get("/employees", employees.getEmployees) 

// Route to get employee by ID
router.get("/employee/:id", employees.getEmployeesById)

// Route to get employee by firstname /first_name
router.get("/employee/firstname/:first_name", employees.getEmployeesByFirstName)

module.exports = router