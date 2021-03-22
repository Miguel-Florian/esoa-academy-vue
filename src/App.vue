<template>
  <nav>
    <router-link to='/'>Accueil</router-link> | 
    <router-link to='/register'>Pas de compte? S'inscrire</router-link>
  </nav>
  <router-view> </router-view>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a{
    font-weight: bold;
    text-decoration: none;
     color: #2c3e50b6;
}
.router-link-active{
  font-weight: bold;
    text-decoration: none;
     color: #EF5A31;
     border-bottom: 2px solid #EF5A31;
  }
</style>
