  const express = require('express')

  const cors = require('cors')
  const app = express()
  const http = require('http').createServer(app)
  const io = require('socket.io')(http)
  const PORT = 3000

  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  let onlineUsers = []

  io.on('connection', (socket) => {
      console.log('a user connected')
      socket.on('userLogin', (username) => {
        console.log(username, 'ini username server')
        onlineUsers.push(username)
        io.emit('userLogin', onlineUsers)
      } )
  })

  http.listen(PORT, () => {
    console.log(`Telor Pecah app listening at http://localhost:${PORT}`)
  })