const express = require("express")
const router = express.Router()

// All authors route
router.get('/', (req, res)=>{
    res.render('authors/index')
})

// New Author route
router.get('/new', (req, res)=>{
    res.render('authors/new')
})

router.post('/', (req, res)=>{
    req.send('Create new author')
})

module.exports = router