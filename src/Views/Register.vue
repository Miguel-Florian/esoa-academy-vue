<template>
  <nav>
      <router-link to='/'>Accueil</router-link> | 
      <router-link to='/register'>Pas de compte? S'inscrire</router-link>
  </nav>
  <div class="logo"><img src="../assets/esoa-academy.png" alt=""></div>
  <div class="container">
    <div class="column-left">

      <div class="first-row">
        <div class="input-title-group offset">
          <div class="input-title white ">Nom :</div>
          <input type="text" class="name" id="name" placeholder="Enter your name"/>
        </div>
        <div class="input-title-group offset">
          <div class="input-title">Prenom :</div>
          <input type="text" class="surname" id="surname" placeholder="Enter your surname"/>
        </div>
      </div>

      <div class="first-row">
        <div class="input-title-group">
          <div class="input-title white">Mot de passe :</div>
          <input type="password" class="password" id="password" placeholder="Enter your password"/>
        </div>
        <div class="input-title-group">
          <div class="input-title">Confirmer le mot de passe :</div>
          <input type="password" class="password" id="password" placeholder="Confirm your password"/>
        </div>
      </div>

    </div>
    <div class="column-right">
      <div class="head-column-right">
        <hr class="left-bar"> Ou s'inscrire avec <hr class="right-bar">
      </div>
      <div class="input-google-sign-in">
        <input type="button" value="Google" id="gradient">
      </div>
    </div>
  </div>
 
</template>
    <script>
    export default {
    name: "Register"
    };
    </script>
    
<style scoped>
nav{
  margin-top: 1em;
  margin-bottom: 1em;
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
.logo{
    width: 12vw;
    height: 22vh;
    margin: 2em auto;
    margin-bottom: 2em;
  }
  .logo img{
    width: 100%;
    height: 100%;
}
.container{
  display: grid;
  grid-template-columns: repeat(2,4fr);
  gap: 1em;
  background-image: url(../assets/b2.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 20px;
  padding: 2em;
}
.column-left{
  border-right:2px solid #2c3e50b6;
  border-width: 2px;
  width:auto;
  height:46vh;
  padding: 1em;
}
.first-row{
  display: grid;
  grid-template-columns: repeat(2,4fr);
  margin: 3em 1em 3em 1em;
  gap:6em;
  justify-content: center;
  align-content:center;
}
.first-row .off{
  margin-left:-2em;
}

.input-title-group{
  display: flex;
  flex-direction: column;
}
.input-title-group .input-title{
  display: flex;
  flex-flow: row;
  margin-bottom: 1em;
  color: #2c3e50b6;
  font-size: 18px;
}
.first-row .input-title-group .white{
  color:white;
}
input[type="text"],input[type="password"]{
    width: 95%;
    height: 2em;
    padding-left:1em;
    outline: none;
    border-color:#0062ff;
    border-radius:10px;
}
input[type="text"]:hover,input[type="password"]:hover{
 border-color:#0062ff;
 transition:0.2s;
 outline-width: 6px;
}
.column-right{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:auto;
  height:40vh;
}
.head-column-right{
  margin-top: 4em;
  display: flex;
  flex-direction: row;
}
.left-bar{
  width: 14em;
  float: left;
}
.right-bar{
  width: 14em;
  float: right;
}
.input-google-sign-in{
  margin-top: 2em;
}
input[type="button"]{
  width: 95%;
  height: 3em;
  cursor: pointer;
  outline: none;
  border: 0px solid black;
  border-radius: 12px;
  color:white;
  font-size:18px;
  font-weight: bold;
  background: linear-gradient(170deg, #b070ff 20%,#8ad2ff 69%);
}
</style>
        
