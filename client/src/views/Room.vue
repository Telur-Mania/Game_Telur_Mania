<template>
  <div class="container">
    <div class="row" style="min-height: 100vh">
      <div class="col-md-5 d-one d-sm-block">
        <div class="d-flex align-items-center" style="height: 100%">
          <div class="rounded p-2">
            <h1
              style="z-index; 2; position: relative;"
              class="text-center mt-4 text-uppercase"
            ></h1>
            <img src="" alt="" class="img-fluid" style="margin-top: -35px" />
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <h5 class="mt-3">
          <b>list Room</b>
          <button class="btn-warning btn-sm float-right" @click="createRoom">
            Create Room
          </button>
        </h5>
        <div class="row mt-5" v-if="rooms.length">
          <RoomCard v-for="(room, i) in rooms" :key="i" :room="room" />
        </div>
        <div class="text-center" v-else>
          ROOM GAME
          <span class="text-muted"> </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RoomCard from "../components/RoomCard.vue";
import Swal from "sweetalert2";
// import io from 'socket.io-client'

export default {
  name: "Room",
  components: {
    RoomCard,
  },
  data() {
    return {
      // socket: io('http://localhost:3000')
    }
  },
  // watch: {
  //   "$store.state.room"() {
  //     if (this.$store.state.room.id) {
  //       this.$router.push({
  //         name: "Game",
  //         params: {
  //           id: this.$store.state.room.id,
  //         },
  //       });
  //     }
  //   },
  // },
  computed: {
    rooms() {
      return this.$store.state.rooms;
    },
  },
  methods: {
    createRoom() {
      Swal.mixin({
        input: "text",
        confirmButtonText: "Next &rarr;",
        showCancelButton: true,
        progressSteps: ["1", "2", "3"],
      })
        .queue([
          {
            title: "Nama Room",
            text: "Masukan Nama room disini",
          },
          {
            title: "Limit Pemain",
            input: "number",
            text: "jumlah maksimal pemain",
          }
        ])
        .then((result) => {
          if (result.value) {
            const answer = result.value;
            if (answer) {
              this.$socket.emit("createRoom", {
                name: answer[0],
                limitPlayer: answer[1],
                host: localStorage.username,
              });
              Swal.fire({
                title: "All done!",
                html: `
                    Your answers:
                    <p>ROOM: ${answer[0]}<p>
                    <p>LIMIT: ${answer[1]}</p>
                `,
                confirmButtonText: "Lovely!",
              });
            }
          }
        });
    },
    getRooms() {
      this.$socket.emit("getRooms");
    },
    checkAuth() {
      if (!localStorage.username) {
          console.log('sesuatu')
        this.$router.push({ name: "Login" });
      } else {
          console.log('sesuatu di else')
        this.getRooms();
      }
    },
  },
  created () {
      this.checkAuth()
  },
  mounted() {
   this.socket.on('FETCH_ROOM', data => {
      console.log({AAAA: data})
    })
  }
};
</script>

<style>
</style>