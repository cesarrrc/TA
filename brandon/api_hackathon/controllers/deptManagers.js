const pool = require("../mysql/connection")
const mysql = require("mysql2")

// here we are writting a query to get the information
//from the database of all department managers
//for every controller that is connected to my database there has to be
// an errror handling


const getDeptManagers = (req,res) => {
    pool.query ("SELECT * FROM dept_manager LIMIT 20", (err, rows)=>{
        if(err){
            console.log({message: "Error occurred" + err})
            return res.status(500).send("An unexpected error occurred") 
        }
        res.json(rows)
    })

}

// here we are writting a query to get the information
//from the database of all department managers by their Id
//for every controller that is connected to my database there has to be
// an errror handling


const getDeptManagerById = (req,res) => {
    const getDeptMbyId = req.params.id
    let sql = "SELECT * FROM dept_manager WHERE emp_no = ?";
    const replacements = [getDeptMbyId];

    pool.query(sql, replacements, (err, rows) => {
        if(err) {
          console.log({message: "Error occured:" + err});
          return res.status(500).send("An unexpected error occurred")
        }
        res.json(rows);
      })
}

module.exports = {
    getDeptManagers,
    getDeptManagerById
}