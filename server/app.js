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
  let count1 = []
  let count2;
  let count3;

  io.on('connection', (socket) => {
      console.log('a user connected')
      socket.on('userLogin', (username) => {
        console.log(username, 'ini username server')
        onlineUsers.push(username)
        io.emit('userLogin', onlineUsers)
      } )
      socket.on('count1', (objCount1) => {
        console.log(objCount1, 'ini username count1')
        // count1 = objCount1.count1

        io.emit('count1', count1)
      } )
      socket.on('count2', (objCount2) => {
        console.log(objCount2, 'ini username count2')
        count2 = objCount2.count2
        io.emit('count2', count2)
      } )
      socket.on('count3', (objCount3) => {
        console.log(objCount3, 'ini username count3')
        count3 = objCount3.count3
        io.emit('count3', count3)
      } )
  })

  http.listen(PORT, () => {
    console.log(`Telor Pecah app listening at http://localhost:${PORT}`)
  })