var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
    res.send([1234, 2345, 9876, 8765])
})

module.exports = router