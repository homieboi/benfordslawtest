const { Router } = require("express")
const router = Router()

const nodemailer = require("nodemailer")

const myEmail = "benfordslawtest@gmail.com"
const pass = "namru5-xebfep-jydpAj"

var transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: myEmail,
    pass: pass,
  },
})

router.get("/", (req, res) => {
  res.send(true)
})

router.post("/sendEmail", async (req, res) => {
  try {
    const { email, content } = req.body
    const mailOptions = {
      from: email,
      to: "cheluskintsev@icloud.com, kondrashina.og@gmail.com",
      subject: "Benfords Law Test",
      attachments: [{ filename: `Result_from_${email}.csv`, content }],
    }

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        console.log("Email sent: " + info.response)
      }
    })

    res.send(true)
  } catch (err) {
    console.log("ERROR:", err)
  }
})

module.exports = router
