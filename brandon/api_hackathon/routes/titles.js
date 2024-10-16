// Create a router to GET information from the Titles table

const express = require("express")
const titles = require("../controllers/titles")
const router = express.Router()

// Route for /title
router.get("/titles", titles.getTitles)

// Route to get title by employeed number
router.get("/titles/:id", titles.getTitlesByID)

// Route to get titles by specified title
router.get("/titles/name/:titleName", titles.getTitlesByName)

module.exports = router