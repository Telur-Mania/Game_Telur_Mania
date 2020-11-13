<template>
  <!-- <div class="container">
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
  </div> -->

  <div>
    <div id="player">
      <audio controls autoplay hidden>
        <source src="../assets/sounds/108 theme of prontera.mp3" type="audio/mpeg" />
      </audio>
    </div>
    <div class="bg-video">
      <video
        src="../assets/Flying-Birds.mp4"
        class="bg-video-content"
        autoplay
        muted
        loop
      ></video>
    </div>
    <!-- harusnya dipisah ke komponen lagi biar cardnya sejumlah player yg masuk -->
    <div id="gameboard" v-for="(user, i) in onlineUsers" :key="i">
      <div class="center2">
        <div class="card" style="background-color: #fcf876; margin: 10px">
          <img
            @click="button1"
            class="egg"
            src="../assets/Egg/tenor-0000.jpg"
          />
          <h5>{{ user }}</h5>
          {{ count1 }}
        </div>
        <!-- <div
          @click="button2"
          class="card"
          style="background-color: #cee397; margin: 10px"
        >
          <img class="egg" src="../assets/Egg/tenor-0000.jpg" />
          <h5>{{ user }}</h5>
          {{ count2 }}
        </div>
        <div
          @click="button3"
          class="card"
          style="background-color: #8bcdcd; margin: 10px"
        >
          <img class="egg" src="../assets/Egg/tenor-0000.jpg" />
          <h5>{{ user }}</h5>
          {{ count3 }}
        </div>
        <div
          @click="button4"
          class="card"
          style="background-color: #3797a4; margin: 10px"
        >
          <img class="egg" src="../assets/Egg/tenor-0000.jpg" />
          <h5>{{ user }}</h5>
          {{ count4 }}
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Dashboard",
  data() {
    return {
      count1: 100
      // ,
      // count2: 100,
      // count3: 100,
      // count4: 100,
    };
  },
  computed: mapState(["username", "onlineUsers"]),
  sockets: {
    count1(count1Left) {
      this.count1 = count1Left;
      console.log(this.onlineUsers)
      // console.log(count1Left)
    }
    // ,
    // count2(count2Left) {
    //   this.count2 = count2Left;
    //   // console.log(count1Left)
    // },
    // count3(count3Left) {
    //   this.count3 = count3Left;
    //   // console.log(count1Left)
    // },
    // count4(count4Left) {
    //   this.count4 = count4Left;
    //   // console.log(count1Left)
    // }
  },
  methods: {
    button1() {
      this.count1--;
      this.$socket.emit("count1", { count1: this.count1 });
    }
    // ,
    // button2() {
    //   this.count2--;
    //   this.$socket.emit("count2", { count2: this.count2 });
    // },
    // button3() {
    //   this.count3--;
    //   this.$socket.emit("count3", { count3: this.count3 });
    // },
    // button4() {
    //   this.count4--;
    //   this.$socket.emit("count4", { count4: this.count4 });
    // }
  },
};
</script>

<style>
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.6;
}

.bg-video-content {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

#gameboard {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.center2 {
  background-color: rgba(245, 246, 250, 0.8);
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.494);
  width: 80vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
}
.egg {
  width: 15vw;
  margin: 10px;
  cursor: pointer;
}
</style>