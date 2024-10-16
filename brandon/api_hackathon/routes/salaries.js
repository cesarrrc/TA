// Create a router and make GET routes for /, /:id

const express = require("express")
const salaries = require("../controllers/salaries")
const router = express.Router()

// Route for /salaries
router.get("/salaries", salaries.getSalaries); 

// Route to get salaries by ID
router.get("/salary/:id", salaries.getSalaryById);


//Route to get salary by first_name
router.get("/salary/firstname/:first_name", salaries.getSalarybyFirstname)


module.exports = router