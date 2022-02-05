<template>
    <h1> Blog </h1>
    <div class="blog">
      <Blog />
    </div>
</template>

<script>
import Blog from "@/components/BlogHome.vue";

export default ({
  Name: "Blog",
  components: {
    Blog,
  },
})

</script>

<style scoped>

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

h1 {
  position: fixed;
  top: 4%;
  left: 40%;
  transform: translate(-50%, -50%);
}

.blog {
  position: fixed;
  height: 700px;
  overflow-y: auto;
  top: 45%;
  left: 40%;
  transform: translate(-50%, -50%);
}
</style>
