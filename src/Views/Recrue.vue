<template>
  <div class="overview">
    <p>Recrues</p>
  </div>
  <div class="container">
    <div class="card-container">
      <div class="card-right">
        <h5>Veuillez remplir le formulaire</h5>
        <form action="" method="post">
          <!-- En validant ce formulaire cela enregistre dans le bd-->
          <div class="input-group">
            <label for="nom"><i class="las la-user-circle la-2x"></i></label>
            <input type="text" name="nom" id="nom" required placeholder="Entrer le nom du joueur"/>
          </div>
          <div class="input-group">
            <label for="prenom"><i class="las la-user-circle la-2x"></i></label>
            <input type="text" name="prenom" id="prenom" required placeholder="Entrer le prenom du joueur"/>
          </div>
          <div class="input-group">
            <label for="object"><i class="las la-calendar la-2x"></i></label>
            <input type="date" name="date" id="date" required />
          </div>
          <div class="input-group">
            <label for="lieu"><i class="las la-map-marker-alt la-2x"></i></label>
            <input type="text" name="lieu" id="lieu" required placeholder="Entrer le lieu de naissance"/>
          </div>
          <div class="input-group">
            <label for="age"><i class="las la-sort-numeric-up-alt la-2x"></i></label>
            <input type="number" name="age" id="age" required placeholder="Entrer l'age du joueur"/>
          </div>
          <div class="input-group">
            <label for="poste"><i class="las la-shoe-prints la-2x"></i></label>
            <input type="text" name="poste" id="poste" required placeholder="Entrer son poste"/>
          </div>
          <div class="input-group">
            <label for="dossart"><i class="las la-dice la-2x"></i></label>
            <input type="number" name="dossart" id="dossart" required placeholder="Entrer le dossard du joueur"/>
          </div>
          <div class="input-group">
            <label for="taille"><i class="las la-ruler-vertical la-2x"></i></label>
            <input type="number" name="taille" id="taille" required placeholder="Entrer la taille du joueur"/>
          </div>
          <div class="input-group">
            <label for="poids"><i class="las la-weight la-2x"></i></label>
            <input type="number" name="poids" id="poids" required placeholder="Entrer le poids du joueur"/>
          </div>
          <div class="input-group">
            <label for="file">Ajouter une photo:</label>
            <input type="file" name="file" id="file" />
          </div>
          <div class="input-button">
            <input type="button" value="Envoyer" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Recrue",
};
</script>

<style scoped>
.overview p {
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
.card-container {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  gap: 1em;
  height: 100%;
  width: 100%;
  overflow: scroll;
}
.card-left {
  border: 1px solid red;
  width: 30%;
  height: 28em;
}
.card-right {
  width: 100%;
  height: 28em;
}
::-webkit-scrollbar {
  display: none;
}
.card-right h5 {
  margin-top: 0.2em;
  margin-bottom: 1em;
}
.card-right form {
  display: flex;
  flex-flow: column;
  gap: 2em;
  align-items: flex-start;
  width: 32em;
  /*border:1px solid black;*/
  margin: 2em auto;
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
form .input-group input[type="number"],
form .input-group input[type="date"] {
  margin-left: 4em;
  width: 20em;
  height: 2em;
  outline: none;
  outline-color: none;
  border-radius: 12px;
  border: 1px solid rgb(168, 165, 165);
  padding-left: 1em;
  margin-inline-end: auto;
}
form .input-group input[type="file"] {
  margin-left: 4em;
}
form .input-group label[for="file"]{
    font-weight: bold;
    margin-top: 0.2em;
}
form .input-button {
  display: flex;
  flex-direction: row;
  margin: 0.5em auto;
}
form .input-button input[type="button"] {
  width: 16em;
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