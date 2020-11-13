const cors = require('cors')
const express = require('express')
const app = express()
const PORT = 3000
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

let rooms = []
let onlineUsers = []
let count1 = 100

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('userLogin', (username) => {
    console.log(username, 'ini username server')
    onlineUsers.push({ username: username, count1: count1 })
    io.emit('userLogin', onlineUsers)
  })
  socket.on('count1', (objCount1) => {
    console.log(objCount1, 'ini username count1')
    io.emit('count1', objCount1)
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

  socket.on('joinGame', (data) => {
    // console.log(data, "dataa join")
    // console.log(rooms, 'ini roommss');
    rooms.map(room => {
      console.log(room, "ini roommm")
      if (room.name === data.nameRoom) {
        // console.log({ AAA: data.playerJoin });
        let pos = room.players.map(function (e) { return e.username; }).indexOf(data.playerJoin);
        console.log({ pos });
        if (pos === -1) {
          room.players.push({
            username: data.playerJoin,
            count: 100
          })
        }
      }
      return room
    })
    console.log(rooms, "ini roomm");
    io.emit('FETCH_ROOM', rooms)
  })

  socket.on('userJoinRoom', (data) => {
    let filtered = rooms.filter(el => el.name === data.nameRoom)
    io.emit('MY_ROOM', rooms.players)
  })
})

http.listen(PORT, () => {
  console.log(`Telor Pecah app listening at http://localhost:${PORT}`)
})
