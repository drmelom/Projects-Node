const http = require('http')
const fs = require('node:fs')

const desiredPort = process.env.RORT ?? 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1> Bienvenido a mi pagina de inicio</h1>')
  } else if (req.url === '/imagen') {
    fs.readFile('./My.jpg', (err, data) => {
      console.log(err)
      if (err) {
        res.statusCode = 500
        res.end('<h1> 500 Internal Server Error </h1>')
      } else {
        res.setHeader('Content-Type', 'image/jpg')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.end('<h1> Bienvenido a mi pagina de contacto </h1>')
  } else {
    res.statusCode = 404
    res.end('<h1> Lo siento, no se encontro la pagina </h1>')
  }
})

server.listen(desiredPort, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${desiredPort}`)
})
