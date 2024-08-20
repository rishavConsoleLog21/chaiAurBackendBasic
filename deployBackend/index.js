require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
  res.send('<h1>Login to see posts</h1>')
})
app.get('/signup', (req, res) => {
  res.send('<h2>Signup to explore us!!</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})