const express = require("express")
const deptManagers = require("../controllers/deptManagers")
const router = express.Router()

// Route for /all department managers
router.get("/departmentManagers", deptManagers.getDeptManagers);

//Route for department manager by id

router.get("/departmentManager/:id", deptManagers.getDeptManagerById)

/** You are missing one route here. You can use the same example you used 
 * in the "deptEmployees" controller file to search by "first_name"
 */

module.exports = router