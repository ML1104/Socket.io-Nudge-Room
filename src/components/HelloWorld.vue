<template>
  <div class="hello">
    <img src="../assets/socketio.png">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

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

.hello {
  width: 100%;
  height: 290px;
  background-color: gray;
  border: 1px solid gray;
}


</style>
