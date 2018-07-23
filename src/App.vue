<template>
  <div id="app">
    <HelloWorld/>
    <Body/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Body from './components/Body.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Body
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
