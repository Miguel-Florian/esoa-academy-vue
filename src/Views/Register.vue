<template>
  <nav>
      <router-link to='/'>Accueil</router-link> | 
      <router-link to='/register'>Pas de compte? S'inscrire</router-link>
      <div class="logo"><img src="../assets/esoa-academy.png" alt=""></div>
  </nav>
  
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
  <div class="footer">
      <h4>Copyright &copy; Esoa Academy 2021 - Tous droits réservés &reg;</h4>
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
  font-weight: bold;
}
.first-row .input-title-group .white{
  color:white;
  font-weight: bold;
}
input[type="text"],input[type="password"]{
    width: 95%;
    height: 3em;
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
/*----------Responsive for max-width: 320px ------------*/
@media screen and (max-width: 320px){
  nav{
    margin: 1.2em auto;
    width:100%;
  }
  a{
      font-weight: bold;
      text-decoration: none;
      color: #2c3e50b6;
      font-size: 18px;
  }
  .router-link-active{
    font-weight: bold;
    text-decoration: none;
    color: #EF5A31;
    border-bottom: 2px solid #EF5A31;
  }
  .logo{
    width: 30vw;
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }
  .container{
    display: flex;
    flex-direction: column;
    gap: 2em;
    background-image: url(../assets/tdf2.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 20px;
    padding: 2em;
    height: 100%;
    padding: 1em;
  }
  .column-left{
  border-right:none;
  border-width: none;
  width:95%;
  height:46vh;
  padding: none;
  margin-top: -2em;
}
  .first-row{
    display: flex;
    flex-direction: column;
    gap: 0.2em;
  }
  .input-title-group{
    margin-bottom: 0.4em;
  }
  .input-title-group .input-title{
  display: flex;
  flex-flow: row;
  color: #2c3e50b6;
  font-size: 12px;
}
  .input-title-group .input-title{
  display: flex;
  flex-flow: row;
  margin-bottom: 1em;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  }
  input[type="text"],input[type="password"]{
    width: 95%;
    height: 2em;
    padding-left:1em;
    outline: none;
    border-color:#0062ff;
    border-radius:10px;
}
  .head-column-right{
    color:#EF5A31;
    font-weight: bold;
  }
  .left-bar{
    width: 2em;
    float: left;
  }
  .right-bar{
  width: 2em;
  float: right;
  }
  input[type="button"]{
    width: 95%;
    height: 2em;
    cursor: pointer;
    outline: none;
    border: 0px solid black;
    border-radius: 12px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(170deg, #b070ff 20%,#8ad2ff 69%);
  }
}

/*----------Responsive for max-width 320px-375px ------------*/
@media screen and (max-width: 375px) and (min-width: 321px){
  nav{
    margin: 1.2em auto;
    width:100%;
  }
  a{
      font-weight: bold;
      text-decoration: none;
      color: #2c3e50b6;
      font-size: 18px;
  }
  .router-link-active{
    font-weight: bold;
    text-decoration: none;
    color: #EF5A31;
    border-bottom: 2px solid #EF5A31;
  }
  .logo{
    width: 30vw;
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }
  .container{
    display: flex;
    flex-direction: column;
    gap: 2em;
    background-image: url(../assets/tdf6.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;
    padding: 2em;
    height: 100%;
    padding: 1em;
  }
  .column-left{
  border-right:none;
  border-width: none;
  width:95%;
  height:46vh;
  padding: none;
  margin-top: -2em;
}
  .first-row{
    display: flex;
    flex-direction: column;
    gap: 0.2em;
  }
  .input-title-group{
    margin-bottom: 0.4em;
  }
  .input-title-group .input-title{
  display: flex;
  flex-flow: row;
  color: #2c3e50b6;
  font-size: 12px;
}
  .input-title-group .input-title{
  display: flex;
  flex-flow: row;
  margin-bottom: 1em;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  }
  input[type="text"],input[type="password"]{
    width: 95%;
    height: 2em;
    padding-left:1em;
    outline: none;
    border-color:#0062ff;
    border-radius:10px;
}
  .head-column-right{
    color:#EF5A31;
    font-weight: bold;
  }
  .left-bar{
    width: 4em;
    float: left;
  }
  .right-bar{
  width: 4em;
  float: right;
  }
  input[type="button"]{
    width: 95%;
    height: 2em;
    cursor: pointer;
    outline: none;
    border: 0px solid black;
    border-radius: 12px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(170deg, #b070ff 20%,#8ad2ff 69%);
  }
}
/*----------Responsive for max-width 375px-425px ------------*/
@media screen and (max-width: 425px) and (min-width: 376px){
  nav{
    margin: 1.2em auto;
    width:100%;
  }
  a{
      font-weight: bold;
      text-decoration: none;
      color: #2c3e50b6;
      font-size: 18px;
  }
  .router-link-active{
    font-weight: bold;
    text-decoration: none;
    color: #EF5A31;
    border-bottom: 2px solid #EF5A31;
  }
  .logo{
    width: 30vw;
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }
  .container{
    display: flex;
    flex-direction: column;
    gap: 2em;
    background-image: url(../assets/tdf5.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;
    padding: 2em;
    height: 100%;
    padding: 1em;
  }
  .column-left{
  border-right:none;
  border-width: none;
  width:95%;
  height:46vh;
  padding: none;
  margin-top: -2em;
}
  .first-row{
    display: flex;
    flex-direction: column;
    gap: 0.2em;
  }
  .input-title-group{
    margin-bottom: 0.4em;
  }
  .input-title-group .input-title{
  display: flex;
  flex-flow: row;
  color: #2c3e50b6;
  font-size: 12px;
}
  .input-title-group .input-title{
  display: flex;
  flex-flow: row;
  margin-bottom: 1em;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  }
  input[type="text"],input[type="password"]{
    width: 95%;
    height: 2em;
    padding-left:1em;
    outline: none;
    border-color:#0062ff;
    border-radius:10px;
}
  .head-column-right{
    color:#EF5A31;
    font-weight: bold;
  }
  .left-bar{
    width: 6em;
    float: left;
  }
  .right-bar{
  width: 6em;
  float: right;
  }
  input[type="button"]{
    width: 95%;
    height: 2em;
    cursor: pointer;
    outline: none;
    border: 0px solid black;
    border-radius: 12px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(170deg, #b070ff 20%,#8ad2ff 69%);
  }
}
/*----------Responsive for max-width 425px-768px ------------*/
@media screen and (max-width: 768px) and (min-width: 426px){
  nav{
    margin: 1.2em auto;
    width:100%;
  }
  a{
      font-weight: bold;
      text-decoration: none;
      color: #2c3e50b6;
      font-size: 18px;
  }
  .router-link-active{
    font-weight: bold;
    text-decoration: none;
    color: #EF5A31;
    border-bottom: 2px solid #EF5A31;
  }
  .logo{
    width: 26vw;
    height: 22vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }
  .container{
    display: flex;
    flex-direction: column;
    gap: 2em;
    background-image: url(../assets/tdf6.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;
    padding: 2em;
    height: 100%;
    padding: 1em;
  }
  .column-left{
  border-right:none;
  border-width: none;
  width:95%;
  height:46vh;
  padding: none;
  margin-top: 2em;
}
  .first-row{
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .input-title-group{
    margin-bottom: 0.4em;
  }
  .input-title-group .input-title{
  display: flex;
  flex-flow: row;
  margin-bottom: 1em;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  }
  input[type="text"],input[type="password"]{
    width: 95%;
    height:3em;
    padding-left:1em;
    outline: none;
    border-color:hsl(0, 0%, 100%);
    border-radius:10px;
}
  .head-column-right{
    color:#000;
    font-weight: bold;
    font-size: 20px;
  }
  .left-bar{
    width: 8em;
    float: left;
  }
  .right-bar{
  width: 8em;
  float: right;
  }
  input[type="button"]{
    width: 95%;
    height: 2em;
    cursor: pointer;
    outline: none;
    border: 0px solid black;
    border-radius: 12px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(170deg, #b070ff 20%,#8ad2ff 69%);
  }
}
/*----------Responsive for max-width 769px-1024px ------------*/
@media screen and (max-width: 1024px) and (min-width: 769px){
  nav{
    margin: 1.2em auto;
    width:100%;
  }
  a{
      font-weight: bold;
      text-decoration: none;
      color: #2c3e50b6;
      font-size: 18px;
  }
  .router-link-active{
    font-weight: bold;
    text-decoration: none;
    color: #EF5A31;
    border-bottom: 2px solid #EF5A31;
  }
  .logo{
    width: 30vw;
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }
  .container{
    display: flex;
    flex-direction: column;
    gap: 2em;
    background-image: url(../assets/tdf6.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;
    padding: 2em;
    height: 100%;
    padding: 1em;
  }
  .column-left{
  border-right:none;
  border-width: none;
  width:95%;
  height:46vh;
  padding: none;
  margin-top: -2em;
  margin-bottom: 5em;
}
  .first-row{
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .input-title-group .input-title{
  display: flex;
  flex-flow: row;
  color: #2c3e50b6;
  font-size: 12px;
}
  .input-title-group .input-title{
  display: flex;
  flex-flow: row;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  }
  input[type="text"],input[type="password"]{
    width: 95%;
    height: 4em;
    padding-left:1em;
    outline: none;
    border-color:#0062ff;
    border-radius:10px;
}
  .head-column-right{
    color:#000;
    font-weight: bold;
    font-size: 22px;
  }
  .left-bar{
    width: 16em;
    float: left;
    margin-left: -12px;
  }
  .right-bar{
  width: 16em;
  float: right;
  margin-right: -12px;
  }
  input[type="button"]{
    width: 95%;
    height: 4em;
    cursor: pointer;
    outline: none;
    border: 0px solid black;
    border-radius: 12px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(170deg, #b070ff 20%,#8ad2ff 69%);
  }
}
</style>
        
