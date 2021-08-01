<template>
    <div class="overview">
        <p>Admin Settings</p>
   </div>
   <div class="container">
       <div class="card-container">
           <div class="card-left">
                <h5>la photo de l'admin</h5>
           </div>
            <div class="card-right">
                <h5>formulaire de parametre de l'admin</h5>
                <p> Add/Edit Photo</p>
                <p>Nom</p>
                <p>Prenom</p>
                <p>Date naissance et lieu</p>
                <p>Age</p>
                <p>Responsabilité</p>
                <p>Edit password</p>
            </div>
       </div>
   </div>
</template>
<script>
export default {
    name:"Setting"
    
}
</script>

<style scoped>
     .overview{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size:26px;
        color:gray;
        font-weight: 700;
    }
    .container{
        width: 94%;
        background-color: #fff;
        border-radius: 12px;
        height: 28em;
        margin: auto; 
        padding: 1em; 
    }
    .card-container{
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        gap:1em;
        height: 100%;
        width: 100%;
    }
    .card-left{
        border: 1px solid red;
        width: 30%;
        height: 28em;
    }
    .card-right{
        border:1px solid black;
        width: calc(94% - 30%);
        height: 28em;
    }
</style>