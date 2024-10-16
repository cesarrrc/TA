const pool = require("../mysql/connection")
const mysql = require("mysql2")

const getTitles = (req, res) => {
    pool.query('SELECT * FROM titles', (err, rows) => {
        if(err) {
            console.log({'message': 'Error occurred: ' + err})
            return res.status(500).send('An unexpected error occurred')
        }
        res.json(rows)
    })
}

const getTitlesByID = (req, res) => {
    const employeeId = req.params.id
    let sql = "SELECT * FROM titles WHERE emp_no = ?"
    
    pool.query(sql, employeeId, (err, rows) => {
        if(err) {
            console.log({message: "Error occurred: " + err})
            return res.status(500).send("An unexpected error occurred")
        }
        res.json(rows)
    })
}

const getTitlesByName = (req, res) => {
    const titleName = req.params.titleName
    console.log(req.params)
    let sql = "SELECT * FROM titles WHERE title = ?"

    pool.query(sql, titleName, (err, rows) => {
        if(err) {
            console.log({message: "Error occurred: " + err})
            return res.status(500).send("An unexpected error occurred")
        }
        res.json(rows)
    })
}

module.exports = { 
    getTitles,
    getTitlesByID,
    getTitlesByName
}