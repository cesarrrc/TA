const express = require("express")
const departments = require("../controllers/departments")
const router = express.Router()

// Route for /departments
router.get("/departments", departments.getDepartments)

// // Route for departments by ID
router.get("/departments/:id", departments.getDepartmentsByID)

// // Route for departments by name
router.get("/department/name/:dept_name", departments.getDepartmentsByName)

module.exports = router
