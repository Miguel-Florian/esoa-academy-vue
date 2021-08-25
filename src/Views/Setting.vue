<template>
  <div class="overview">
    <p>Admin Settings</p>
  </div>
  <div class="container">
      <h5>formulaire de parametre de l'admin</h5>
      <form action="" method="post">
        <!-- Logique possible:
          effectuer cela comme dans profil.vue, etablir un formulaire d'une part et les données recues via la bd d'autre part
          de telle sorte qu'en modifiant les données du formulaire cela modifie ceux de la bd
        -->
        <div class="input-group">
          <label for="nom"><i class="las la-user-circle la-2x"></i></label>
          <input type="text" name="nom" id="nom" required/>
        </div>
        <div class="input-group">
          <label for="prenom"><i class="las la-user-circle la-2x"></i></label>
          <input type="text" name="prenom" id="prenom" required/>
        </div>
        <div class="input-group">
          <label for="email"><i class="las la-sms la-2x"></i></label>
          <input type="email" name="mail" id="mail" required/>
        </div>
        <div class="input-group">
          <label for="grade"><i class="las la-id-card la-2x"></i></label>
          <input type="text" name="grade" id="grade" required/>
        </div>
        <div class="input-group">
          <label for="password"><i class="las la-key la-2x"></i></label>
          <input type="password" name="password" id="password" required/>
        </div>
        <div class="input-group">
          <label for="password"><i class="las la-key la-2x"></i></label>
          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            required
          />
        </div>
        <div class="input-button">
          <input type="button" value="Envoyer" />
        </div>
      </form>
  </div>
</template>
<script>
export default {
  name: "Setting",
};
</script>

<style scoped>
.overview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 26px;
  color: gray;
  font-weight: 700;
}
.container {
  width: 94%;
  background-color: #fff;
  border-radius: 12px;
  height: 28em;
  margin: auto;
  padding: 1em;
}
.container form {
  display: flex;
  flex-flow: column;
  gap: 1em;
  align-content: center;
  justify-content: center;
  width: 38%;
  /*border:1px solid black;*/
  margin: auto;
}
form .input-group {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
}
form .input-group .las{
    color:#FF8B00;
    font-weight: bold;
}
form .input-group input[type="email"],
form .input-group input[type="text"],
form .input-group input[type="password"],
form .input-group input[type="date"] {
  margin-left: 4em;
  width: 20em;
  height: 2em;
  outline: none;
  outline-color: none;
  border-radius: 12px;
  border: 1px solid rgb(168, 165, 165);
  padding: 0.2em;
  margin-inline-end: auto;
}
form .input-button {
  display: flex;
  flex-direction: row;
  margin-top: 2em;
}
form .input-button input[type="button"] {
  width: 20em;
  height: 2em;
  border-radius: 12px;
  outline: none;
  outline-color: #103f85;
  border-color: 0px solid #103f85;
  background-color: #103f85;
  border: 1px solid #103f85;
  color: #ff8b00;
  font-size: 18px;
  font-weight: bold;
}
</style>