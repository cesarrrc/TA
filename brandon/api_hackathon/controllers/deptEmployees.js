const pool = require("../mysql/connection");
const mysql = require("mysql2");

// here we are writting a query to get the information
//from the database of all department employees
//for every controller that is connected to my database there has to be
// an errror handling

const getDeptEmployees = (req, res) => {
  pool.query("SELECT * FROM dept_emp LIMIT 20", (err, rows) => {
    if (err) {
      console.log({ message: "Error occurred" + err });
      return res.status(500).send("An unexpected error occurred");
    }
    res.json(rows);
  });
};

// here we are writting a query to get the information
//from the database of all department employees by their Id
//for every controller that is connected to my database there has to be
// an errror handling

const getDeptEmployeeByID = (req, res) => {
  const DeptEbyId = req.params.id;
  let sql = "SELECT * FROM dept_emp WHERE emp_no = ?";
  const replacements = [DeptEbyId];

  pool.query(sql, replacements, (err, rows) => {
    if (err) {
      console.log({ message: "Error occured:" + err });
      return res.status(500).send("An unexpected error occurred");
    }
    res.json(rows);
  });
};

// here we are writting a query to get the information
//from the database of all department employees by their first name
//for every controller that is connected to my database there has to be
// an errror handling

const getDeptEmployeeByFN = (req, res) => {
  console.log("hello");

  const DeptEmployeeByFirstname = req.params.first_name;
  let sql = `
    SELECT * FROM dept_emp 
    JOIN employees 
    WHERE employees.first_name = ? 
    -- I had to add the "LIMIT 100" to get this to work
    -- apparently there are a lot of people with the name Georgi
    LIMIT 100
    `;

  /* I had to add the 'LIMIT 100' to this query because it kept timing out */

  const replacements = [DeptEmployeeByFirstname];

  pool.query(sql, replacements, (err, rows) => {
    if (err) {
      console.log({ message: "Error occured:" + err });
      return res.status(500).send("An unexpected error occurred");
    }
    res.json(rows);
  });
};

module.exports = {
  getDeptEmployees,
  getDeptEmployeeByID,
  getDeptEmployeeByFN,
};
