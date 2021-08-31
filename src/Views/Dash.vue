/* eslint-disable vue/no-deprecated-filter */
<template>
  <div class="card-container">
    <div class="card border-card-color">
      <div class="card-title">Académiciens</div>
      <div class="card-icon">
        <div class="card-nombre">{{ academiciens.length }}</div>
        <i class="las la-users la-3x"></i>
      </div>
    </div>
    <div class="card scroll border-second-card-color">
      <div class="card-title">
        <span>{{ recrues.length }}</span> Nouvelle<span
          v-if="recrueTableTitles.length >= 2"
          >s</span
        >
        Recrue<span v-if="recrueTableTitles.length >= 2">s</span>
        <div class="timetable" v-scroll="handleScroll">
          <table class="recrue">
            <thead>
              <tr>
                <td
                  v-for="recrueTableTitle in recrueTableTitles"
                  :key="recrueTableTitle"
                >
                  {{ recrueTableTitle }}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr class="color" v-for="recrue in recrues" :key="recrue.numero">
                <td>{{ recrue.nom }}</td>
                <td>{{ recrue.prenom }}</td>
                <td>{{ recrue.poste }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="card border-third-card-color">
      <div class="card-title">Prochaine Rencontre</div>
      <div class="card-match">
        <div class="match-versus">
            <h3>{{filteredNextMatch()}}</h3>
        </div>
      </div>
    </div>
  </div>
  <div class="card-container">
    <div class="card left scroll">
      <h5>Listes de tous les académiciens</h5>
      <div class="timetable">
        <table class="table">
          <thead>
            <tr>
              <td
                v-for="academicientableTitle in academicientableTitles"
                :key="academicientableTitle"
              >
                {{ academicientableTitle }}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr
              class="color"
              v-for="academicien in academiciens"
              :key="academicien.dossart"
            >
              <td>{{ academicien.dossart }}</td>
              <td>{{ academicien.nom }}</td>
              <td>{{ academicien.prenom }}</td>
              <td>{{ academicien.poste }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card right scroll">
      <h5>Tableau de tous les matchs</h5>
      <div class="timetable">
        <table class="match">
          <thead>
            <tr>
              <td
                class="td-head"
                v-for="matchTitle in matchTitles"
                :key="matchTitle"
              >
                {{ matchTitle }}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr class="color" v-for="matche in matches" :key="matche.id">
              <td>{{ matche.versus[0] }}</td>
              <td>{{ matche.versus[1] }}</td>
              <td>
                {{ matche.date.jour }}/{{ matche.date.mois }}/{{
                  matche.date.annee
                }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import Data from "../Data/data.json";
const date = new Date();
export default {
  name: "Dash",
  data: function () {
    return {
      academiciens: Data.academiciens,
      matches: Data.matches,
      recrues: Data.recrues,
      academicientableTitles: ["Dossart", "Nom", "Prenom", "Postes"],
      recrueTableTitles: ["Nom", "Prenom", "Postes"],
      matchTitles: ["Domicile", "Exterieur", "Date"],
      date,
      SortMatch: [],
      visible:false,
      //AllAcedemician : this.academiciens.join(this.recrues),
    };
  },
  methods: {
        handleScroll: function (evt, el) {
            if (window.scrollY > 2) {
                el.setAttribute(
                "style",
                "opacity: 1; transform: translate3d(0, -10px, 0)"
                );
            }
            return window.scrollY > 100;
        },
        filteredNextMatch(){
        //Il manque de faire à ce que ce soit dynamique en ayant acces au data.json
          for(let i in this.matches){
            if( (this.matches[i].date.mois == this.date.getMonth()+1))
            {
              let a =(this.matches[i].date.jour == this.date.getDate()+1);
              let b = (this.matches[i].date.jour == this.date.getDate()+2);
              let c = (this.matches[i].date.jour == this.date.getDate()+3);
              let d = (this.matches[i].date.jour == this.date.getDate()+4);
              if( a||b||c||d ){
                this.SortMatch=this.matches[i];
                console.log(this.SortMatch)
                return (this.SortMatch.versus[0]+" VS "+this.SortMatch.versus[1])
              }
            }
          }
        }
    /*sharedata(){
               return (this.$router.push({name:"Pro",params:{data:this.academiciens}}));
            }*/
  },
  directives: {
    scroll: {
      inserted: function (el, binding) {
        let f = function (evt) {
          if (binding.value(evt, el)) {
            window.removeEventListener("scroll", f);
          }
        };
        window.addEventListener("scroll", f);
      },
    },
  },
};
</script>

<style scoped>
.router-link-active {
  font-weight: bold;
  text-decoration: none;
  background-color: rgb(0, 0, 0);
}
.router-link-active .icon .title {
  color: #ef5a31;
}
.card-container {
  display: flex;
  flex-direction: row;
  gap: 1em;
  justify-content: center;
  align-content: center;
  width: 97%;
  padding: 1em;
}
.card {
  width: 40em;
  height: 8em;
  padding: 1em;
  background-color: #fff;
  border-radius: 12px;
}
.border-card-color:hover,.border-second-card-color:hover,.border-third-card-color:hover{
  box-shadow: 0 12px 24px 8px rgba(45, 67, 121, 0.192)!important;
}
/*.border-card-color:hover:hover{
  box-shadow: 0 10px 20px 4px #ff39022f !important;
  border-color: #ef5a31;
  border:3px #ef5a31 double; 
}
.border-second-card-color:hover{
  box-shadow: 0 10px 20px 4px #0066ff52 !important;
}
.border-third-card-color:hover{
  box-shadow: 0 12px 24px 8px rgba(45,67,121,.1)!important;
}*/
/**Scroll */
.card.scroll,
.card-container.scroll {
  overflow-y: scroll;
}
::-webkit-scrollbar {
  display: none;
}
.card .card-title {
  font-weight: bold;
}
.card-icon {
  margin-top: 2em;
  display: flex;
  flex-direction: column;
}
.card-icon .card-nombre {
  font-size: 28px;
  font-weight: bold;
}
.timetable .recrue {
  width: 100%;
  border-collapse: collapse;
  margin: 0.1em auto;
  padding: 0.1em;
  height: 4em;
  overflow: hidden;
}
.timetable .recrue tr td,
.timetable .match tbody tr td {
  font-size: 12px;
}
.timetable .match {
  margin: 0 auto;
}
.match-versus h3{
  margin: 2.5em auto;
}
.match .td-head {
  color: #2c3e50;
  font-size: 14px;
  font-weight: bold;
}
.timetable .table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 2em;
  padding: 1em;
}
.timetable .table thead td {
  font-weight: 600;
}
table tr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
table tr td {
  padding: 1em;
}
.card-container .left {
  width: 100%;
  height: 30em;
}
.card-container .right {
  width: 46%;
  height: 30em;
}
</style>