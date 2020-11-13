<template>
  <div class="col-4">
    <div class="card">
      <img class="card-img-top" src="https://media.suara.com/pictures/653x366/2020/01/07/21177-blackpink-allkpop.jpg" alt="room"/>
      <div class="card-body">
        <h5 class="card-title">Room {{room.name}}</h5>
        <p class="card-text">host {{room.host}}</p>
        
        <button v-if="this.room.players.length < this.room.limitPlayer" @click="joinGame" class="btn btn-primary">join</button>
        <button v-else class="btn btn-primary">room penuh</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomCard',
  props: ['room'],
  methods: {
      joinGame () {
        localStorage.setItem("myRoom", this.room.name)
        console.log(this.room)
        this.$socket.emit('joinGame', {nameRoom: this.room.name, playerJoin: localStorage.getItem('username')})
        this.$router.push({ name: "Dashboard" });
      }
  }
};
</script>

<style>
</style>