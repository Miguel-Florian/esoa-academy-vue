<template>
  <router-view> </router-view>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Helvetica&display=swap');
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-link-active{
  font-weight: bold;
    text-decoration: none;
     color: #EF5A31;
     border-bottom: 2px solid #EF5A31;
  }
</style>
