<template>
  <div class="welcome">
    <h2>
       A nice welcome message goes here.
    </h2>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.welcome {
  position: fixed;
  top: 35%;
  left: 35%;
  transform: translate(-50%, -50%);
}
</style>
