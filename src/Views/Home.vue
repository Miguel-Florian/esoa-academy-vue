<template>
  <nav>
      <router-link to='/'>Accueil</router-link> | 
      <router-link to='/register'>Pas de compte? S'inscrire</router-link>
  </nav>
  <div class="container">
    <div class="logo"><img src="../assets/esoa-academy.png" alt=""></div>
    <div class="content-form">
      <div class="title"><h2>Connexion</h2></div>

      <form action="">
        <div class="input-title-group">
          <div class="input-title">Nom d'utilisateur :</div>
          <input type="text" class="username" id="username" placeholder="Enter username" v-model="nom"/>
        </div>

        <div class="input-title-group">
          <div class="input-title">Mot de passe :</div>
          <input type="password" class="password" id="password" placeholder="Enter password" v-model="password"/>
        </div>

        <div class="input-check">
          <input type="checkbox" class="checkbox" id="checkbox" />
          <label class="form-check-label" for="checkbox">Remember me</label>
        </div>

        <button type="submit">Login</button>
      </form>

    </div>
    <div class="footer">
      <h4>Copyright &copy; Esoa Academy 2021 - Tous droits réservés &reg;</h4>
    </div>
  </div>
  
</template>
 <script>
    export default {
    name: "Home", 
    data:()=>{
      return {
        nom:"",
        password:""
      }
    }
    }
</script>




<style scoped>
.router-link-active{
  font-weight: bold;
    text-decoration: none;
     color: #EF5A31;
     border-bottom: 2px solid #EF5A31;
  }
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
  margin-top: 2em;
}
.content-form{
  border: 0px solid black;
  padding: 2em;
  width: 30%;
  height: 50vh;
  margin: 0 auto;
  background-image: url(../assets/tdf5.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
}
.title h2{
  text-align: center;
  color: #fff;
  font-weight: bold;
}
form{
  display: flex;
  flex-direction: column;
  gap: 1.2em;
}
.input-title-group{
  display: flex;
  flex-direction: column;
}
.input-title-group .input-title{
  display: flex;
  flex-flow: row;
  margin-bottom: 1em;
  color: #fff;
  font-size: 18px;
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
::-webkit-input-placeholder,:-moz-placeholder,::-moz-placeholder,:-ms-input-placeholder /* WebKit, Blink, Edge */
 {
  color: #a8a4a4;
  font-size: 12.4px;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans -serif;
  font-weight: 400px; 
  }
.input-check .form-check-label{
    color:#EF5A31;
    font-size: 18px;
    font-weight: 700;
    text-decoration: underline;
  }
button{
    width: 100%;
    height: 2em;
    background-color: #213F6B;
    border-radius: 20px;
    color: #EF5A31;
    font-weight: bold;
    font-size:16px;
    cursor: pointer;
    outline: none;
    border-color:#213F6B
}
button:hover{
  border-color:#e0291c;
  background-color: #e0291c;
  color: #FFFFFF;
}
/*----------Responsive for max-width: 320px, width 320px-375px ------------*/
@media   screen and (max-width: 320px), (max-width:375px) and (min-width: 321px) {
  nav{
    margin-top:2em;
  }
  .logo{
    width: 40vw;
    height: 22vh;
    margin: 0 auto;
    margin-bottom: 1em;
    border-radius: 100%;
  }
  .logo img{
    border-radius: 100%;
    width: 10%;
    height: 10%;
  }
  .content-form{
    width: 80%;
    padding: 1em;
    height: 60vh;
    background-image: url(../assets/tdf4.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  } 
  .input-check .form-check-label {
    font-size: 16px;
    color: #fff;
  }
}
/*-------------Responsive for width 320px-375px -------*/
@media screen and (max-width:375px) and (min-width: 321px){
  .logo{
    width: 30vw;
    height: 22vh;
    margin: 0 auto;
    margin-bottom: 1em;
  }
  .logo img{
    width: 100%;
    height: 100%;
  }
}
/*-----------Responsive for width 375px-425px --------------*/
@media screen and (max-width:425px) and (min-width: 376px){
  nav{
    margin-top:2em;
  }
  .logo{
    width: 38vw;
    height: 28vh;
    margin: 0 auto;
    margin-bottom: 1em;
  }
  .logo img{
    width: 100%;
    height: 100%;
  }
  .content-form{
    width: 80%;
    padding: 1em;
    height: 60vh;
    background-image: url(../assets/tdf4.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  } 
  .input-check .form-check-label {
    font-size: 16px;
    color: #fff;
  }

}
/** Responsive de 425px à 768px */
@media screen and (max-width:768px) and (min-width: 426px) {
  nav{
    margin-top:2em;
  }
  .logo{
    width: 26vw;
    height: 22vh;
    margin: 1em auto;
    margin-bottom: 1em;
  }
  .logo img{
    width: 100%;
    height: 100%;
  }
  .content-form{
    width: 80%;
    padding: 1em;
    height: 60vh;
    background-image: url(../assets/tdf3.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  } 
  .input-check .form-check-label {
    font-size: 16px;
    color: #fff;
  }
  .input-title-group .input-title{
    display: flex;
    flex-flow: row;
    margin-bottom: 1em;
    color: #fff;
    font-size: 22px;
}
input[type="text"], input[type="password"] {
    width: 95%;
    height: 3em;
    padding-left: 1em;
    outline: none;
    border-color: #0062ff;
    border-radius: 10px;
}
.input-check .form-check-label {
    font-size: 22px;
    color: #fff;
}
button{
    width: 100%;
    height: 3em;
    background-color: #213F6B;
    border-radius: 20px;
    color: #EF5A31;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    border-color: #213F6B;
}
}
</style>
