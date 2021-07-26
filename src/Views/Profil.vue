<template>
    <div class="overview">
        <p>Profil de Joueur</p>
   </div>
   <div class="container">
       <div class="card-container-left">
           <div class="card-left">Informations sur le joueur</div>
       </div>
       <div class="card-container-right">
           <div class="card-right-top">
               <div class="card-right-top-item">liste de card item</div>
           </div>
           <div class="card-right-bottom">Action de modification</div>
       </div>
   </div>
</template>
<script>
export default {
    name:"Profil"
    
}
</script>

<style scoped>
    .overview{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size:30px;
        color:gray;
        font-weight: 700;
    }
    .container{
        display: flex;
        flex-direction: row;
        gap: 1em;
        justify-content: center;
        align-content: center;
        width:97%;
        height: auto;
        padding: 1em;
    }
    .card-container-left{
        width: 40%;
        height: 26em;
        background-color: #fff;
        border-radius: 12px;
    }
    .card-container-right{
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin: 0em auto;
        width: 60%;
        height: 26em;
        background-color: #fff;
        border-radius: 12px;
    }
    .card-container-right .card-right-top{
        background-color: rgb(47, 59, 218);
        width: 90%;
        height: 8em;
        margin: 1em auto;
    }
    .card-container-right .card-right-bottom{
        width: 90%;
        height: 18em;
        background-color: aliceblue;
        margin: 1em auto;
    }
</style>