<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div
      v-for="(user, i) in onlineUsers"
      :key="i"
    >
      <h5>{{user}}</h5>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Dashboard',
  data () {
    return {
      // onlineUsers: []
    }
  },
  computed: mapState([
    'username',
    'onlineUsers'
  ]),
  sockets: {
    // userLogin(onlineUsers) {
    //   console.log(onlineUsers)
    //   this.onlineUsers = onlineUsers
    // }
  }
}
</script>

<style>

</style>