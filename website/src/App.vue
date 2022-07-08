<template>
  <mq-layout mq="mobile">
    <div id="nav">
    <router-link to="/about"><img src="./assets/about.png"/></router-link>
    </div>
  </mq-layout>
  <mq-layout mq="laptop+">
  <div id="logo">
  <router-link to="/"><img src="./assets/logo.png"/></router-link>
  </div>
  <div id="nav">
    <router-link to="/about"><img src="./assets/about.png"/></router-link>
    <router-link to="/blog"><img src="./assets/blog.png"/></router-link>
    <router-link to="/projects"><img src="./assets/projects.png"/></router-link>
    <router-link to="/podcast"><img src="./assets/podcast.png"/></router-link>
    <router-link to="/todo"><img src="./assets/todo.png"/></router-link>
  </div>
  </mq-layout>
  <router-view />
</template>

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
  color: #2c3e50;
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

</style>