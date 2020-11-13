const cors = require('cors')
const express = require('express')
const app = express()
const PORT = 3000
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const GameBoard = require('./gameBoard')

let rooms = []
let onlineUsers = []
let count1;
let count2;
let count3;


http.listen(PORT, () => {
  console.log(`Telor Pecah app listening at http://localhost:${PORT}`)
})
// myArray.map(function(e) { return e.hello; }).indexOf('stevie');
io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('userLogin', (username) => {
    console.log(username, 'ini username server')
    onlineUsers.push(username)
    io.emit('userLogin', onlineUsers)
  })
  socket.on('count1', (objCount1) => {
    console.log(objCount1, 'ini username count1')
    count1 = objCount1.count1
    io.emit('count1', count1)
  })
  socket.on('count2', (objCount2) => {
    console.log(objCount2, 'ini username count2')
    count2 = objCount2.count2
    io.emit('count2', count2)
  })
  socket.on('count3', (objCount3) => {
    console.log(objCount3, 'ini username count3')
    count3 = objCount3.count3
    io.emit('count3', count3)
  })

  socket.on('createRoom', (data) => {
    console.log(data);
    rooms.push(data)
    console.log(rooms)
    io.emit('FETCH_ROOM', rooms)
  })

  socket.on('getRooms', () => {
    console.log('kepanggil');
    socket.emit('FETCH_ROOM', rooms)
  })
})
