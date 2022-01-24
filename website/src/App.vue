<template>
  <div id="nav">
    <router-link to="/about">About</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/podcast">Podcast</router-link>
    <router-link to="/todo">Todo</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>
