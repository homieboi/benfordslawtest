const { getNumbersArray } = require('../helpers/helperFunctions')
const NumberSet = require('../models/NumberSet')
const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.send(true)
})

router.get('/getDefaultNumberSet', (req, res, next) => {
    console.log('getNumberSet ...')

    res.send(getNumbersArray())
})

router.get('/getAllNumberSets', async (req, res, next) => {
    console.log('getAllNumberSets ...')

    const numberSets = await NumberSet.find({})

    res.send(numberSets)
})

router.post('/createNumberSet', async (req, res, next) => {
    const { username, numbers } = req.body
    const newNumberSet = new NumberSet({ username, numbers })

    await newNumberSet.save()

    console.log('createNumberSet ...')
})

module.exports = router