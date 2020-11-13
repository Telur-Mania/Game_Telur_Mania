<template>
  <div class="col-4">
    <div class="card">
      <img class="card-img-top" src="https://media.suara.com/pictures/653x366/2020/01/07/21177-blackpink-allkpop.jpg" alt="room"/>
      <div class="card-body">
        <h5 class="card-title">Room {{room.name}}</h5>
        <p class="card-text">host {{room.host}}</p>
        
        <button @click="joinGame" class="btn btn-primary">join</button>
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

      }
  }
};
</script>

<style>
</style>