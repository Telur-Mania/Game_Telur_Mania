<template>
  <div>
    <div id="player">
      <audio controls autoplay hidden>
        <source
          src="../assets/sounds/108 theme of prontera.mp3"
          type="audio/mpeg"
        />
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
    <div id="gameboard">
      <!-- {{myrooms}} -->
      <div class="center2">
        <div
          v-for="(user, i) in myrooms"
          :key="i"
          class="card"
          style="background-color: #fcf876; margin: 10px"
        >
          <img @click="button1(i)" class="egg" :src="image" />
          <h5>{{ user.username }}</h5>
          {{ user.count1 }}
        </div>
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
      image: require("../assets/Egg/tenor-0000.jpg"),
      imageCounter: 0,
    };
  },
  // computed: {
  //   rooms() {
  //     return this.$store.state.rooms;
  //   },
  // },
  computed: {
    myrooms: function () {
      const room = this.$store.state.rooms.filter(el => el.name === localStorage.getItem('myRoom'))
      console.log({room});
      return room[0].players
    },
    // ...mapState(["username", "onlineUsers", "rooms"]),
  },
  sockets: {
    count1(count1Left) {
      this.onlineUsers[count1Left.index].count1 = count1Left.count1;
    },
  },
  methods: {
    button1(i, sound) {
      this.onlineUsers[i].count1--;
      this.$socket.emit("count1", {
        count1: this.onlineUsers[i].count1,
        index: i,
      });

      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
      this.imageCounter++;
      if (this.imageCounter < 10) {
        this.image = require(`../assets/Egg/tenor-000${this.imageCounter}.jpg`);
      } else {
        this.image = require(`../assets/Egg/tenor-00${this.imageCounter}.jpg`);
      }
    },
    imageCounter(imageCounter4left) {
      this.imageCounter = imageCounter4left;
    },
    image(imageleft) {
      this.image = imageleft;
    },
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