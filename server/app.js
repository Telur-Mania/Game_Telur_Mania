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
    let startGame = new GameBoard(data.name, data.limitPlayer)

    startGame.host = data.host

    rooms.push(startGame)
    console.log({ rooms });
    io.emit('FETCH_ROOM', rooms)
  })

  socket.on('getRooms', () => {
    console.log('kepanggil');
    socket.emit('FETCH_ROOM', rooms)
  })

  socket.on('deleteRoom', (data) => {
    let index = rooms.findIndex(i => i.name === data.name && i.host === data.host)
    console.log(index)
    rooms.splice(index, 1)
    io.emit('FETCH_ROOM', rooms)

    socket.on('joinRoom', (data) => {
      let room = rooms.find(obj => obj.id === data.roomId)
      try {
        if (!room) throw {
          msg: 'room not found!',
          status: false
        }

        let readyJoin = room.players.find(obj => obj.name === data.username)
        let alreadyLose = room.losePlayers.find(obj => obj.name === data.username)
        if (room.players.length >= room.limitPlayer && !readyJoin) throw {
          msg: 'room is full!',
          status: false
        }
        if (room.players.gameOver)
          throw {
            msg: 'game is over!',
            status: false
          }
        if (!readyJoin && !alreadyLose) {
          room.addPlayer(data.username)
        }
        socket.join(data.roomId)
        io.emit('FETCH_ROOM', rooms)
        io.to(data.roomId).emit('UPDATE_ROOM', room)
      } catch (err) {
        console.log(err)
        socket.emit('ERROR_JOIN', err)
      }
    })

    socket.on('startGame', (roomId) => {
      let room = rooms.find(obj => obj.id === roomId)
      let question = room.getRandomQuestionPrep()
      io.to(roomId).emit('prepQuestion', question)
    })
  })
})
