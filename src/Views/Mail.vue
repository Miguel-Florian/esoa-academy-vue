<template>
  <div class="overview">
    <p>Mail</p>
  </div>
  <div class="container-card">
    <div class="card-left">
      <h5>Vous avez un message de :</h5>
      <div class="card-item-message" v-for="message in mail" :key="message.id">
        <div class="row-sender">{{ message.sender }}</div>
        <div class="card-action">
          <input type="button" value="Lire" @click="read" :id="message.id" />
          <input
            type="button"
            value="Repondre"
            @click="reply"
            :id="message.id"
          />
        </div>
      </div>
    </div>
    <div class="card-right">
      <h5>Au clic sur repondre/lire cela se charge ici</h5>
      <div class="reply">
        <form action="" method="post">
          <div class="input-group">
            <label for="to">A : </label>
            <input type="email" name="receiver" id="receiver" />
          </div>
          <div class="input-group">
            <label for="from">De : </label>
            <input type="email" name="sender" id="sender" />
          </div>
          <div class="input-group">
            <label for="object">Objet :</label>
            <input type="text" name="objet" id="objet" />
          </div>
          <div class="input-group">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Type your message here !"
            ></textarea>
          </div>
          <div class="input-group">
            <label for="file">Télecharger un fichier :</label>
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
import Data from "../Data/data.json";
export default {
  name: "Mail",
  data: () => {
    return {
      lire: false,
      repondre: false,
      mail: Data.mail,
      message: "",
    };
  },
  methods: {
    read: () => {
      this.lire == true;
      var a = document.getElementById(`{message.id}`);
      console.log(a);
    },
    reply: () => {
      console.log("ok");
      return this.repondre == true;
    },
  },
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
.container-card {
  width: 96%;
  display: flex;
  flex-direction: row;
  gap: 2em;
  padding: 1em;
  margin: auto;
}
.card-left,
.card-right {
  width: 50%;
  background-color: #fff;
  border-radius: 12px;
  height: 28em;
  overflow: scroll;
}
::-webkit-scrollbar {
  display: none;
}
.card-left .card-item-message {
  display: flex;
  flex-direction: row;
  margin-bottom: 1em;
  gap: 2em;
  padding: 0.6em;
  align-items: baseline;
}
.card-left .card-item-message .row-sender{
    font-weight: bold;
    font-size: 14px;
}
.card-left .card-item-message .card-action {
  display: flex;
  flex-direction: row;
  margin-inline-start: auto;
  gap: 1em;
}
.card-action input[value="Lire"] {
  border-radius: 4px;
  outline: none;
  border-color: #103f85;
  border:1px solid #103f85;
  background-color: #103f85;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.card-action input[value="Repondre"] {
  border-radius: 4px;
    outline: none;
    border-color: #ff8b00;
    border:1px solid #ff8b00;
    background-color: #ff8b00;
    color: black;
    font-weight: bold;
    cursor: pointer;
}
.card-right {
  width: calc(96% - 40%);
}
.card-right .reply{
    display: flex;
    flex-direction: row;
}
.card-right form {
  display: flex;
  flex-flow: column;
  gap: 2em;
  align-items: flex-start;
  padding: 1em;
}
form .input-group input[type="email"],
form .input-group input[type="text"] {
  margin-left: 4em;
  width: 20em;
  height: 2em;
  outline: none;
  outline-color: none;
  border-radius: 12px;
  border: 1px solid rgb(168, 165, 165);
  padding: 0.2em;
}
form .input-group textarea {
  margin-left: 9em;
  outline: none;
  outline-color: none;
  border-radius: 4px;
  border: 1px solid rgb(168, 165, 165);
}
form .input-group input[type="file"] {
  margin-left: 4em;
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