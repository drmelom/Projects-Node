const http = require('http')
const { findAvailablePort } = require('./free-port.js')

const server = http.createServer((req, res) => {
  console.log('Hola desde el servidor')
  res.end('Hola mundo')
})

findAvailablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`)
  })
})
