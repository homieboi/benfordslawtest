const { Router } = require('express')
const router = Router()

const nodemailer = require('nodemailer')

const myEmail = 'benfordslawtest@gmail.com'
const pass = 'namru5-xebfep-jydpAj'

var transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: myEmail,
        pass: pass,
    }
  })

router.get('/', (req, res) => {
    res.send(true)
})

router.post('/sendEmail', async (req, res) => {
    try {        
        const { emailAddress, text } = req.body

        const mailOptions = {
            from: emailAddress,
            to: 'cheluskintsev@icloud.com',
            subject: 'Benfords law test',
            text: text,
        }

        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.response)
            }
        })
        
        res.send('ok')
    } catch (err) {
        console.log('ERROR:', err)
    }
})

module.exports = router