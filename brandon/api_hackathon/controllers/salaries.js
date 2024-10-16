const pool = require('../mysql/connection')
const mysql = require("mysql2")


// here we are writting a query to get the information
//from the database for all the salaries
//for every controller that is connected to my database there has to be
// an errror handling

const getSalaries = (req,res) =>{

  pool.query('SELECT * FROM salaries LIMIT 20', (err, rows) => {
    if (err) {
      console.log({ 'message': 'Error occurred: ' + err })
      return res.status(500).send('An unexpected error occurred')
    }
    res.json(rows)
  });
}
  /// salaries ids for testing 10001 or 10002 
const getSalaryById = (req,res)=>{
    const salaryId = req.params.id;
    let sql = "SELECT * FROM salaries WHERE emp_no = ?";
    const replacements = [salaryId];
  
    pool.query(sql, replacements, (err, rows) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(rows);
    });

}

//salaries by their first_name "testing using chirstian"

const getSalarybyFirstname = (req,res)=> {
  const salaryByFirstname = req.params.first_name;

  /* I had to add the "LIMIT" in the sql statement here because there was too many results */

  let sql = "SELECT * FROM salaries JOIN employees WHERE employees.first_name = ? LIMIT 100";
  const replacements = [salaryByFirstname];

  pool.query(sql, replacements, (err, rows) => {
    if(err) {
      console.log({message: "Error occured:" + err});
      return res.status(500).send("An unexpected error occurred")
    }
    res.json(rows);
  })
}

module.exports = {
    getSalaries,
    getSalaryById,
    getSalarybyFirstname

}