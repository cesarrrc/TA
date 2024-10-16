const express = require("express");
/** CC
 * "deptEmployees" variable was not being used, but needed to be.
 */

const deptEmployees = require("../controllers/deptEmployees");

/** CC
 * either that or you could use object destructuring to not have to
 * use dot notation for every function: "deptEmployees.[some function]"
 * Alternative example below:
 * const { getDeptEmployeeByID, getDeptEmployeeByID, getDeptEmployeesByFN } = require("../controllers/deptEmployees")
 *
 * By doing this, you would eliminate the redundancy of having to refer to the whole object "deptEmployees"
 */

const router = express.Router();

// Route for all department employees: root/departmentEmployees

/** CC
 * I had to add "deptEmployees." before every callback function
 */

router.get("/departmentEmployees", deptEmployees.getDeptEmployees);

// Route for getting department employees by ID
router.get("/departmentEmployee/:id", deptEmployees.getDeptEmployeeByID);

// Route for gettign department employees by first name

/**
 *
 */
router.get(
  /* the route was missing the "/" at the beginning */
  "/departmentEmployee/first_name/:first_name" /* I had to add "first_name* to this route */,
  deptEmployees.getDeptEmployeeByFN /* I had to change the spelling here */
  /* spelling was originally plural "getDeptEmployeesByFN" */
);

module.exports = router;
