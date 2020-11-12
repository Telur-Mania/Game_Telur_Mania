<template>
  <div id="login-page">
    <div class="bg-video">
      <video src="../assets/Flying-Birds.mp4" class="bg-video-content" autoplay muted loop>
      </video>
    </div>
    <div class="center">
      <img src="../assets/logotelur.png" style="margin-bottom: 20px">
      <form>
        <div class="form-group">
          <input id="email" class="form-control" type="text" placeholder="Type your nickname..">
        </div>
        <button type="submit" class="btn btn-primary form-control">Play</button>
      </form>
      <p style="font-size: 10px; color: rgba(54, 72, 78, 0.95)">Created By : Kelompok 9</p>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Login'
}
</script>

<style>
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: .6;
}
.bg-video-content {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
#login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.center {
  /* background-color: rgba(245, 246, 250,.8); */
  /* width: 300px; */
  /* height: 300px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.welcome {
  color: white;
  text-shadow: 2px 5px 10px black;
}
</style>
