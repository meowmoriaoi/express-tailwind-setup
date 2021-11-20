const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.set('x-powered-by', false)

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', async function (req, res) {
  res.send('Index Page')
})

app.listen(5000)