<template>
 <div class="sign">
    <img src="../assets/esoa-academy.png" id="logo" />

    <div class="form">
      <div class="titre">
        <h1>Sign Up</h1>
      </div>

      <form action="" method="POST">
        <div class="row1">
          <div class="col1">
            <div class="input">
              <input
                type="text"
                name="nom"
                id="nom"
                placeholder="Entrer votre nom"
              />
            </div>
          </div>
          <div class="col2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Entrer votre email"
            />
          </div>
        </div>
        <div class="row2">
          <div class="col3">
            <div class="input">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter votre mot de passe"
              />
            </div>
            <div class="col4">
              <div class="input">
                <input
                  type="password"
                  name="confirm"
                  id="confirm"
                  placeholder="Confirmer votre mot de passe"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row3">
          <div class="valider">
            <button type="submit">Valider</button>
          </div>
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>
    <script>
    export default {
    name: "Register"
    };
    </script>
<style scoped>
h2 {
  font-family: Montserrat;
  font-weight: 600px;
  color: #233e6a;
  margin-left: 10.8em;
  position: absolute;
}
#logo{
    margin-top:2em;
}
.row1,
.row2 {
  margin-bottom: 16px;
}
.row1 {
  float: left;
  margin-top: 6em;
  margin-left: 16em;
}
.row2 {
  float: right;
  margin-top: 6em;
  margin-right: 16em;
}
.col2,
.col4 {
  margin-top: 4em;
}
input {
  height: 50px;
  width: 360px;
  padding-left: 2em;
  border-radius: 14px;
  outline: none;
  border-color: #233e6a;
  background-color: #233e6a;
  color: white;
  border-left-color: none;
  border-top-color: none;
}
::-webkit-input-placeholder,:-moz-placeholder,::-moz-placeholder,:-ms-input-placeholder /* WebKit, Blink, Edge */
 {
  color: #a8a4a4;
  font-size: 12.4px;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans -serif;
  font-weight: 400px;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans -serif;
 }
.row3 {
  position: absolute;
  margin-top: 24em;
  margin-left: 44%;
  margin-right: 44%;
}
button {
  height: 50px;
  width: 160px;
  border-radius: 14px;
  outline: none;
  border-color: #233e6a;
  background-color: #233e6a;
  cursor: pointer;
  color: #ef5a31;
  font-size: 18px;
  font-weight: bold;
}
button:hover {
  background-color: #ef5a31;
  color: #ffffff;
  border-color: #ef5a31;
  transition: 0.2s;
}
.footer {
  margin-top: 28em;
  position: absolute;
  margin-left: 34%;
}
</style>
        
