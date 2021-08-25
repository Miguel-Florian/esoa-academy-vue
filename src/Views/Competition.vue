<template>
  <div class="overview">
    <p>Tournois</p>
  </div>
  <div class="card-details">
    <div class="img"><img src="../assets/logo.png" alt="" /></div>
    <div class="text-aca"><h5>ESOA ACADEMY</h5></div>
    <div class="text-loca"><em><h5>Bill Avenue, Cameroun</h5></em></div>
    <div class="text-tel"><h5>+237 234 235 236 / +237 277 278 279</h5></div>
  </div>
  <div class="card-tournoi">
      <h4>Utiliser les tokens de la competition pour afficher les details des compétitions</h4>
  </div>
</template>
<script>
export default {
  name: "Tournoi",
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
.card-details{
    display: flex;
    flex-direction: row;
    gap:10%;
    align-content: center;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: auto;
    width: 94%;
    border-radius: 12px;
    margin: auto;
    padding: 1em;
}
.card-details img{
    width: 4em;
    height: 4em;
    border-radius: 50%;
}
.card-details .text-aca{
    color:#FF8B00;
    font-weight: bold;
    font-size: 18px;
}
.card-details .text-loca{
   color:#000;
    font-weight: bold;
    font-size: 18px; 
}
.card-details .text-tel{
   color:#000;
    font-weight: bold;
    font-size: 18px; 
}
.card-tournoi{
    background-color: #fff;
    width: 94%;
    border-radius: 12px;
    height: 20em;
    margin: 1em auto;
    padding: 1em;
}
</style>