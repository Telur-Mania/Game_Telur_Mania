<template>
  <div class="col-3">
    <div class="card">
      <img class="card-img-top" src="" alt="" height="250"/>
      <div class="card-body">
        <h5 class="card-title">player join {{room.length}}</h5>
        <p class="card-text">host {{room.username}}</p>
        
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