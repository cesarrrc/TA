const pool = require('../mysql/connection')
const mysql = require("mysql2")


// here we are writting a query to get the information
//from the database for all employees
//for every controller that is connected to my database there has to be
// an errror handling

const getEmployees = (req,res) => {

  pool.query('SELECT * FROM employees', (err, rows) => {
    if (err) {
      console.log({ 'message': 'Error occurred: ' + err })
      return res.status(500).send('An unexpected error occurred')
    }
    res.json(rows)
  });
}
  /// employees number begin at 10001  
const getEmployeesById = (req,res)=>{
    const employeeId = req.params.id;
    let sql = "SELECT * FROM employees WHERE emp_no = ?";
    const replacements = [employeeId];
  
    pool.query(sql, replacements, (err, rows) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(rows);
    });

}

const getEmployeesByFirstName = (req,res)=>{
    const employeeFirstName = req.params.first_name;
    let sql = "SELECT * FROM employees WHERE first_name = ? LIMIT 20";
    const replacements = [employeeFirstName];

    pool.query(sql, replacements, (err,rows)=> {
        if (err) {
            console.log({ message: "Error occurred: " + err });
            return res.status(500).send("An unexpected error occurred");
          }
          res.json(rows);
        
    });
}

module.exports = {
    getEmployees,
    getEmployeesById,
    getEmployeesByFirstName

}