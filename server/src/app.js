const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(cors())
app.use(express.json())


app.get('/status', (req, res) => {
    res.send({
        message: 'hello world'
    })
})

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! Your user was registered! Have fun!`
    })
})

app.listen(process.env.PORT || 8081)
