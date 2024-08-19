const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
  res.send('<h1>Login to see posts</h1>')
})
app.get('/signup', (req, res) => {
  res.send('<h2>Signup to explore us!!</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})