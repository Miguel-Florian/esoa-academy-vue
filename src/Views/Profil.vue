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
                                <tr title="Click to modify" @click="action(academicien)" class="color" v-for="academicien in academiciens" :key="academicien.numero">
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
           <div class="card" v-else><h5>Selectionner un joueur afin de voir ses attributs</h5></div>

           <div class="card-right-bottom">
               <h5>Action de modification</h5>
               <div class="card-right-info-action" v-if="(visible) && (info.length!=0)">

                   <div class="card-right-info">
                       
                   </div>

                   <div class="card-right-action">
                       <div class="action-modify"><input type="button" value="Modify"></div>
                       <div class="action-delete"><input type="button" value="Delete"></div>
                   </div>

               </div>
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
                
        }
    },
    /*mounted(){
        for(let i=0;i<this.$route.params.data.length;i++){
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
    }
    table tr td{
        padding:.8em;
        
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
    .card-container-right .card-right-bottom{
        width: 90%;
        height: 18em;
        background-color: aliceblue;
        margin: 0em auto;
    }
</style>