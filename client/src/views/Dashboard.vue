<template>
  <div class="container">
    <h1>This is an about page</h1>
    <div
      v-for="(user, i) in onlineUsers"
      :key="i"
    >
      <h5>{{user}}</h5>
    </div>

    <div class="row">
      <div class="col-4">
        {{count1}}
        <button @click="button1" class="btn btn-primary" type="button" >dor 1</button>
      </div>
      <div class="col-4">
        {{count2}}
        <button @click="button2" class="btn btn-warning" type="button">dor 2</button>
      </div>
      <div class="col-4">
        {{count3}}
        <button @click="button3" class="btn btn-danger" type="button">dor 3</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Dashboard',
  data () {
    return {
      count1: 100,
      count2: 100,
      count3: 100
    }
  },
  computed: mapState([
    'username',
    'onlineUsers'
  ]),
  sockets: {
    count1(count1Left) {
      this.count1 = count1Left
      // console.log(count1Left)
    }
    ,
    count2(count2Left) {
      this.count2 = count2Left
      // console.log(count1Left)
    }
     ,
    count3(count3Left) {
      this.count3 = count3Left
      // console.log(count1Left)
    }
  },
  methods: {
    button1() {
      this.count1--
      this.$socket.emit('count1', {count1: this.count1})
    },
    button2() {
      this.count2--
      this.$socket.emit('count2', {count2: this.count2})
    },
    button3() {
      this.count3--
      this.$socket.emit('count3', {count3: this.count3})
    }
  }
}
</script>

<style>

</style>