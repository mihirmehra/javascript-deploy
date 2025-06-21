const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook', (req, res) => {
  res.send('mihirmehra')
})

app.get('/login', (req, res) => {
  res.send('<h1>login page</h1>')
})

app.get('/chai', (req, res) => {
  res.send('<h1>chai page</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})