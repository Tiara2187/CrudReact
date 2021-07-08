const express = require('express')
const router = require('./routers/routes')
const mongooseConnect = require('./config/connect')
const bodyParser = require('body-parser')
const cors = require("cors")

mongooseConnect()
const app = express()
const port = 3030

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(router)
app.use(express.json())
app.listen(port, () => {
    console.log(`App Run on http://localhost:${port}`)
})
