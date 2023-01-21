<template>
  <!-- <mq-layout mq="mobile">
    <div id="nav">
    <router-link to="/about"><img src="./assets/about_off.png"/></router-link>
    </div>
  </mq-layout> -->
  <mq-layout mq="laptop+">
  <div id="logo">
  <router-link to="/"><img src="./assets/logo.png"/></router-link>
  </div>
  <div id="nav">
    <router-link to="/about"><img :src="require(''+imgURL)" @click="changeImage"/></router-link>
    <router-link to="/blog"><img src="./assets/blog_off.png"/></router-link>
    <router-link to="/projects"><img src="./assets/projects_off.png"/></router-link>
    <router-link to="/podcast"><img src="./assets/podcast_off.png"/></router-link>
    <router-link to="/todo"><img src="./assets/todo_off.png"/></router-link>
  </div>
  </mq-layout>
  <router-view />
</template>

<script>
export default {
  data: () => {
    return {
      imgURL: "./assets/about_off.png"
    }
  },
  methods: {
    changeImage: function() {
      if(this.imgURL==="./assets/about_off.png") {
        this.imgURL="./assets/about_on.png"
      } else {
        this.imgURL="./assets/about_off.png"
      }
    }
  }
};
</script>

<style>
#logo {
  position: fixed;
  top: 3%;
  left: 98%;
  transform: translate(-50%, -50%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;

  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #264666;
}

#nav {
  position: fixed;
  width: 300px;
  top: 30%;
  left: 90%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  width: 50%;
  float: left;
}

#nav a.router-link-exact-active {
  color: #42b983;
  transform: scale(105%, 105%)
}

* {
  background-color: black;
}

</style>