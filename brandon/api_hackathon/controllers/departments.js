const pool = require('../mysql/connection')
const mysql = require("mysql2")

const getDepartments = (req, res) => {
    pool.query('SELECT * FROM departments', (err, rows) =>{
        if(err) {
            console.log({'message': 'Error occurred: ' + err})
            return res.status(500).send('An unexpected error occurred')
        }
        res.json(rows)
    })
}

const getDepartmentsByID = (req, res) => {
    const departmentID = req.params.id
    let sql = "SELECT * FROM departments WHERE dept_no = ?"
    const replacements = [departmentID]

    pool.query(sql, replacements, (err, rows) => {
        if(err) {
            console.log({message: 'Error occurred: ' + err})
            return res.status(500).send('An unexpected error occurred')
        }
        res.json(rows)
    })
}

const getDepartmentsByName = (req, res) => {
    const departmemtName = req.params.dept_name
    let sql = "SELECT * FROM departments WHERE dept_name = ?"

    pool.query(sql, departmemtName, (err, rows) => {
        if(err) {
            console.log({message: "Error occurred: " + err})
            return res.status(500).send("An unexpected error occurred")
        }
        res.json(rows)
    })
}

module.exports = {
    getDepartments,
    getDepartmentsByID,
    getDepartmentsByName
}
