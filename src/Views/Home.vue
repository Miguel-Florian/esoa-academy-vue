<template>
  <div id="login">
       <div class="logo"><img src="../assets/esoa-academy.png" alt=""></div>
    <h1>Login</h1>
    <div class="picture"><img src="../assets/cherry-125.png" alt="" class="img-icon"></div>
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          class="username"
          id="username"
          placeholder="Enter username"
        />
      </div><br>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="password"
          id="password"
          placeholder="Password"
        />
      </div><br>
      <div class="form-check">
        <input type="checkbox" class="checkbox" id="checkbox" />
        <label class="form-check-label" for="checkbox">Remember me </label>
      </div>
      <button type="submit" class="submit">Submit</button>
    </form>
    <div class="footer">
      <h4>Copyright &copy; Esoa Academy 2021 - Tous droits réservés &reg;</h4>
    </div>
  </div>
</template>
<style scoped>
#login{
    margin-top:2%;
    border:0px solid black;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.7);
    border-radius: 60px;
}
.logo{
    width: 180px;
    height: 200px;
    margin: 0 auto;
}
.picture{
    float:left;
    margin-left:20%;
}
.img-icon{
    width: 280px;
    height: 400px;
}
form{
    float:right;
    margin-right:26%;
}
label{
    margin-right:1em;
}
label,button{
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans -serif;
    font-weight: bold;
}
input[type="text"],input[type="password"]{
    width: 20em;
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
.form-group,.form-check,button{
    margin-top:16%;
}
button{
    width: 20em;
    height: 3em;
    background-color: #213F6B;
    border-radius: 20px;
    color: #EF5A31;
    font-weight: bold;
    font-size:16px;
    cursor: pointer;
}
.footer{
  margin-top:40%;
  position: relative;
}
h4{
  text-decoration: underline;
}
</style>
