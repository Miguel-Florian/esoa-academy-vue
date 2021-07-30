<template>
    <div class="overview">
        <p>Profil de Joueur</p>
        <h5>*En cas d'ajout de joueur, ce dernier est considéré comme recrue</h5>
   </div>
   <div class="container">
       <div class="card-container-left">
           <div class="card-left">
               <h5>Liste des joueurs</h5>
               <div class="timetable">
                        <table class="table">
                            <thead>
                                <tr>
                                    <td v-for="academicientableTitle in academicientableTitles" :key="academicientableTitle">{{academicientableTitle}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr title="Click to view my attributs" @click="action(academicien)" class="color" v-for="academicien in academiciens" :key="academicien.numero">
                                    <td>{{academicien.nom}}</td>
                                    <td>{{academicien.prenom}}</td>
                                    <td>{{academicien.age}} ans</td>
                                </tr>
                                
                            </tbody>
                        </table>
                </div>
           </div>
       </div>
       <div class="card-container-right">
           <div class="card-right-top" v-if="(visible) && (info.length!=0)">
               <div class="card-right-top-item">
                   <div class="card-item" v-for="(value,key) in info" :key="key">
                       <h6>{{key}}</h6>
                       <h5>{{value}}</h5>
                    </div>
               </div>
           </div>
           <div class="card-message" v-else><h5>Selectionner un joueur afin de voir ses attributs...</h5></div>

            <div class="action" v-if="(visible) && (player.length!=0)">
                <form action="" method="post">
                    <div class="input-group" v-for="(value,key) in player" :key="key">
                        <label :for="key">{{key}}:</label> <br>
                        <input type="text" :name="key" :id="key" :value=value title="Modify me !">
                    </div>
                    <div class="input-group-button">
                        <input @click="set()" type="button" value="Valider">
                        <input @click="drop(value)" type="button" value="Supprimer">
                    </div>
                </form>
            </div>
       </div>
   </div>
</template>
<script>
import Data from '../Data/data.json';
export default {
    name:"Profil",
    data(){
        return{
            academiciens : Data.academiciens,
            academicientableTitles:["Nom","Prenom","Age"],
            info:{                
                "Poste" :null ,
                "Dossart" : null,
                "Taille" : null,
                "Poids": null,
            },
            visible:false,
            player:{
                "Dossart": null,
                "Nom": null,
                "Prenom": null,
                "Age": null,
                "Taille": null,
                "Poids": null,
                "Poste": null,
            }
        }
    },
    methods:{
        action(m){
                this.info.Poste = m.poste;
                this.info.Dossart = m.dossart;
                this.info.Taille =m.taille;
                this.info.Poids = m.poids;                
                this.visible=true;
                this.player.Nom = m.nom;
                this.player.Prenom = m.prenom;
                this.player.Age = m.age;
                this.player.Dossart = m.dossart;
                this.player.Poste = m.poste;
                this.player.Taille = m.taille;
                this.player.Poids = m.poids;
        },
        set(){
            var Dossart = parseInt(document.getElementById("Dossart").value);
            var Nom = document.getElementById("Nom").value;
            var Prenom = document.getElementById("Prenom").value;
            var Age = parseInt(document.getElementById("Age").value);
            var Taille = parseFloat(document.getElementById("Taille").value);
            var Poids = parseFloat(document.getElementById("Poids").value);
            var Poste = document.getElementById("Poste").value;
            let value=[Dossart,Nom,Prenom,Age,Taille,Poids,Poste];

                if(this.player[1]===value[0]){
                    alert("Ce dossart appartient dejà à un joueur !");   
                }
                    
                this.player.Dossart = this.info.Dossart= value[0];
                this.player.Nom = value[1];     //reste a modifier dans le data.json
                this.player.Prenom = value[2];  //reste a modifier dans le data.json
                this.player.Age= value[3];      //reste a modifier dans le data.json
                this.player.Taille = this.info.Taille= value[4];
                this.player.Poids = this.info.Poids = value[5];
                this.player.Poste = this.info.Poste = value[6];
        },
        drop(a){
            console.log(a)
        }
    },
    /*mounted(){
        for(var i=0;i<this.$route.params.data.length;i++){
            this.UseData.push(this.$route.params.data[i])
        }
        return (this.UseData)
    }*/
    
}
</script>

<style scoped>
    .overview p{
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
    .overview h5{
        margin-block-start: -1em;
        margin-block-end: -1em;
        margin-bottom: 1em;
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
        overflow-y:scroll;
    }
    ::-webkit-scrollbar {
    display: none;
    }
    .card-container-left .card-left .timetable .table{
        width: 100%;
        border-collapse: collapse;
        padding: 1em;
    }
    .timetable .table thead{
        font-weight: bold; 
        color:#2c3e50;
    }
    table tr{
        border-bottom:1px solid rgba(0,0,0,0.1);  
    }
    table tbody tr{
        cursor: pointer;
        align-items: flex-start;
    }
    table tr td{
        padding:.8em;
        
    }
    .card-container-right{
        overflow-y:scroll;
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin: 0em auto;
        width: 60%;
        height: 26em;
        background-color: #fff;
        border-radius: 12px;
    }
    .card-right-top .card-right-top-item{
        display: flex;
        flex-direction: row;
        gap:1em;
        justify-content: center;
        align-content: center;
        width: 100%;
    } 
    .card-right-top .card-right-top-item>.card-item{
        background-color: #103f85;
        color:#FF8B00;
        width: 7em;
        height: 3em;
        border-radius: 12px;
        margin-top: 1em;
        display: flex;
        flex-direction: column;
        padding: .4em;
    }
    .card-right-top .card-right-top-item .card-item>h6{
        color: #000;
        font-size: 14px;
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
    }
    .card-right-top .card-right-top-item .card-item>h5{
        margin: 1.5em auto;
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
    }
    .card-container-right .card-message{
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        font-size: 20px;
    }
    .action{
        margin-top: 1em;
    }
    .action form{
        display: flex;
        flex-direction: column;
        gap:2em;
        align-content: center;
        justify-content: center;
        width: 40%;
        margin: 0 auto;
        padding:1em;
    }
    .action form .input-group{
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: baseline;
    }
    .action form .input-group label{
        font-weight: bold;
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        align-items: baseline;
        align-items: flex-start;
    }
    .action form .input-group input[type="text"]{
        width: auto;
        height: 1.4em;
        outline: none;
        border:1px solid ;
        border-color: #FF8B00;
        font-size: 14px;
        font-weight: bold;
        border-radius: 12px;
        padding-left: 3em;
    }
    .action form .input-group-button{
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        gap:2em;
    }
    .action form .input-group-button input[type="button"]{
        width: 7em;
        height: 2em;
        vertical-align: -webkit-baseline-middle;
        color:#000;
        font-weight: bold;
        cursor:pointer;
        outline: none;
        border-radius: 12px;
    }
    .action form .input-group-button input[value="Valider"]{
        background-color: #103f85;
        border-color:#103f85;
    }
    .action form .input-group-button input[value="Supprimer"]{
        background-color: rgb(243, 16, 16);
        border-color:rgb(243, 16, 16);
    }
    /*.card-container-right .card-right-bottom{
        width: 90%;
        height: 18em;
        margin: 0em auto;
        display: flex;
        flex-direction: column;
    }
    .card-right-bottom .card-right-info-action{
        display: flex;
        flex-direction: row;
    }
    .card-right-bottom .card-right-info-action .card-right-action{
        display: flex;
        flex-direction: row;
    }
    .card-right-bottom .card-right-info{
        display: flex;
        flex-direction: row;
        gap:4em;
    }
    .card-right-bottom .card-right-info .card-right-top-info{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        cursor: pointer;
        gap:8em;

    }
    .card-right-top-info .card-right-info-input h4{
        display: flex;
        align-content: flex-start;
        justify-items: flex-start;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .card-right-info .card-right-action {
        margin-left: 4em;
        width: auto;
        padding: .5em;
        align-items: baseline;
        gap:2em;
    }
    .card-right-bottom .card-right-info input{
        width:4em ;
        height:2em;
    }*/
</style>