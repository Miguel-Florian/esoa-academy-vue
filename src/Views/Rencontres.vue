<template>
    <div class="overview">
        <p>Rencontres et Scores</p>
   </div>

   <div class="container-card">
       <div class="card-left">
           <h5>Tableau de tous les matchs</h5>
                <div class="timetable">
                    <table class="match">
                        <thead>
                            <tr>
                                <td class="td-head" v-for="matchTitle in matchTitles" :key="matchTitle">{{matchTitle}}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="color" v-for="matche in matches" :key="matche.id" >
                                <td>{{matche.versus[0]}}</td>
                                <td>{{matche.versus[1]}}</td>
                                <td>{{matche.date.jour}}/{{matche.date.mois}}/{{matche.date.annee}}</td>
                                <td v-if="(matche.date.jour <= date.getDate()) && (matche.date.mois <= date.getMonth()+1)"><span class="score">{{matche.score[0]}} - {{matche.score[1]}}</span></td>
                                <td v-else><span class="nogame">Pas encore joué</span></td>
                            </tr>   
                        </tbody>
                    </table>
                </div>
        </div>
    </div>
   
</template>
<script>
import Data from '../Data/data.json';
const date = new Date()
export default {
    name:"Rencontres",
    data(){
        return{
            matches:Data.matches,
            matchTitles:["Domicile","Exterieur","Date","Score"],
            matcheScore:["Domicile","Exterieur","Score"],
            date,
        }
    }   
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
    .container-card{
        width: 90%;
        display: flex;
        flex-direction: row;
        gap: 2em;
        padding: 1em;
        margin: auto;
    }
    .card-left /*.card-right*/
    {
        width: 100%;
        background-color: #fff;
        border-radius: 12px;
        height: 26em;
        overflow: scroll;
    }
    ::-webkit-scrollbar {
    display: none;
    }
    .timetable .match{
        margin:0 auto;
        width: 100%;
    }
    .match .td-head{
        color: #2c3e50;
        font-size: 14px;
        font-weight: bold;
    }
     .timetable .match tbody tr td{
        font-size: 14px;
    }
    .timetable .table{
        width: 100%;
        border-collapse: collapse;
        margin-top: 2em;
        padding: 1em;
    }
    .timetable .table thead td{
        font-weight: 600; 
    }
    table tr{
        border-bottom:1px solid rgba(0,0,0,0.1);
    }
    table tr td{
        padding:1em;
    }
    tbody td .score{
        font-weight: bold;
        font-size: 14px;
        border-radius: 4px;
        outline: none;
        border-color: #ff8b00;
        border:1px solid #ff8b00;
        background-color: #ff8b00;
        padding: 4px;
        color: black;
    }
    tbody td .nogame{
        font-weight: bold;
        font-size: 14px;
        border-radius: 4px;
    }
</style>