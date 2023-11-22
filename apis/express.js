const express = require('express')
const ditto = require('./pokemon/ditto.json')
const app = express()

const PORT = process.env.PORT ?? 3000

app.use(express.json())

app.get('/pokemon/ditto', (req, res) => {
    res.json(ditto)
})

app.post('/pokemon', (req, res) => {
    res.status(201).json(req.body)
})

app.use((req, res) => {
    res.status(404).send('<h1> 404 </h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
