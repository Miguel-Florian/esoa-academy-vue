<template>
    <div class="card-container">
                <div class="card">
                    <div class="card-title">Académiciens</div>
                    <div class="card-icon">
                        <div class="card-nombre">{{academiciens.length}}</div>
                        <i class="las la-users la-3x"></i>
                    </div>
                </div>
                <div class="card scroll">
                    <div class="card-title"><span>{{recrues.length}}</span> Nouvelle<span v-if="recrueTableTitles.length>=2">s</span> Recrue<span v-if="recrueTableTitles.length>=2">s</span>
                        <div class="timetable" v-scroll="handleScroll">
                        <table class="recrue">
                            <thead>
                                <tr>
                                    <td v-for="recrueTableTitle in recrueTableTitles" :key="recrueTableTitle">{{recrueTableTitle}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="color" v-for="recrue in recrues" :key="recrue.numero" >
                                    <td>{{recrue.nom}}</td>
                                    <td>{{recrue.prenom}}</td>
                                    <td>{{recrue.poste}}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-title">Prochaines Rencontres</div>
                    <div class="card-match" >
                        <div class="match-versus"></div>
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
                                    <td v-for="academicientableTitle in academicientableTitles" :key="academicientableTitle">{{academicientableTitle}}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="color" v-for="academicien in academiciens" :key="academicien.numero">
                                    <td>{{academicien.numero}}</td>
                                    <td>{{academicien.nom}}</td>
                                    <td>{{academicien.prenom}}</td>
                                    <td>{{academicien.poste}}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card right scroll"><h5>Tableau de tous les matchs</h5>
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
                                    <td>{{matche.date[0]}}/{{matche.date[1]}}/{{parseInt(matche.date[2])}}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                        </div>
                </div>
            </div>
</template>
<script>
const date = new Date();
const recrues =[
     {numero:8,nom:"Camille",prenom:"Oscar",age:"22",taille:"1.65",poids:49,poste:"Milieu Défensif"},
     {numero:4,nom:"Jules",prenom:"Cruz",age:"27",taille:"1.45",poids:45,poste:"Ailier Droit"},
     {numero:28,nom:"Oscar",prenom:"Mingueza",age:"25",taille:"1.70",poids:49,poste:"Milieu Défensif"},
     {numero:18,nom:"Oscar",prenom:"Mingueza",age:"25",taille:"1.70",poids:49,poste:"Milieu Offensif"},
     {numero:11,nom:"Luc",prenom:"De Lafonte",age:"20",taille:"1.45",poids:45,poste:"Gardien de but"},
 ];
 const academiciens = [
     {numero:1,nom:"Luc",prenom:"De Lafonte",age:"20",taille:"1.45",poids:45,poste:"Gardien de bur"},
     {numero:12,nom:"Mathieu",prenom:"Dane",age:"18",taille:"1.50",poids:60,poste:"Ailier Gauche"},
     {numero:7,nom:"Alonzo",prenom:"Scheez",age:"30",taille:"1.45",poids:65,poste:"Milieu Offensif"},
     {numero:10,nom:"Christian",prenom:"De La Marte",age:"24",taille:"1.45",poids:44,poste:"Défenseur Central"},
     {numero:8,nom:"Camille",prenom:"Oscar",age:"22",taille:"1.65",poids:49,poste:"Milieu Défensif"},
     {numero:14,nom:"Jules",prenom:"Cruz",age:"27",taille:"1.45",poids:45,poste:"Ailier Droit"},
     {numero:18,nom:"Oscar",prenom:"Mingueza",age:"25",taille:"1.70",poids:49,poste:"Milieu Défensif"},
     {numero:11,nom:"Luc",prenom:"De Lafonte",age:"20",taille:"1.45",poids:45,poste:"Gardien de bur"},
     {numero:22,nom:"Mathieu",prenom:"Dane",age:"18",taille:"1.50",poids:60,poste:"Ailier Gauche"},
     {numero:17,nom:"Alonzo",prenom:"Scheez",age:"30",taille:"1.45",poids:65,poste:"Milieu Offensif"},
     {numero:16,nom:"Jules",prenom:"Cruz",age:"27",taille:"1.45",poids:45,poste:"Ailier Droit"},
     {numero:19,nom:"Oscar",prenom:"Mingueza",age:"25",taille:"1.70",poids:49,poste:"Milieu Défensif"},
     {numero:5,nom:"Luc",prenom:"De Lafonte",age:"20",taille:"1.45",poids:45,poste:"Gardien de bur"},
     {numero:6,nom:"Mathieu",prenom:"Dane",age:"18",taille:"1.50",poids:60,poste:"Ailier Gauche"},
     {numero:13,nom:"Alonzo",prenom:"Scheez",age:"30",taille:"1.45",poids:65,poste:"Milieu Offensif"},

 ];
 const matches =[
     {id:1,versus:["Fc Barcelone","Juventus"],date:["19","07","21"]},
     {id:2,versus:["Athletico Madrid","Fc Barcelone"],date:["26","07","21"]},
     {id:3,versus:["Real Madrid","Fc Barcelone"],date:["12","10","21"]},
     {id:4,versus:["Fc Barcelone","Seville FC"],date:["09","10","21"]},
     {id:5,versus:["Athletic Club","Fc Barcelone"],date:["13","11","21"]},
     {id:6,versus:["Fc Barcelone","Real Betis"],date:["27","12","21"]},
     {id:7,versus:["Roma","Fc Barcelone"],date:["29","01","22"]},
     {id:8,versus:["Fc Barcelone","Man.City"],date:["13","02","22"]},
     {id:9,versus:["PSG","Fc Barcelone"],date:["19","03","22"]},
     {id:10,versus:["Juventus","Fc Barcelone"],date:["04","04","21"]},
     {id:12,versus:["Fc Barcelone","Ath.Madrid"],date:["10","04","21"]},
     {id:13,versus:["Fc Barcelone","Real Madrid"],date:["18","04","21"]},
     {id:14,versus:["Seville FC","Fc Barcelone"],date:["22","04","21"]},
 ]
export default {
 name:"Dash",
   data:function(){
       return{
       academicientableTitles:["Numero","Nom","Prenom","Postes",],
       recrueTableTitles:["Nom","Prenom","Postes"],
       academiciens,
       recrues,
       matchTitles:["Domicile","Exterieur","Date"],
       matches,
       date,
       SortMatch:[],
       }
    },
    methods:{
        handleScroll: function (evt, el) {
            if (window.scrollY > 2) {
                el.setAttribute(
                'style',
                'opacity: 1; transform: translate3d(0, -10px, 0)'
                )
            }
            return window.scrollY > 100
        },
    },
    directives:{
        scroll: {
            inserted: function (el, binding) {
                let f = function (evt) {
                if (binding.value(evt, el)) {
                    window.removeEventListener('scroll', f)
                    }
                    }
                window.addEventListener('scroll', f)
                },
            }
    
    }
}
</script>

<style scoped>
.router-link-active{
    font-weight: bold;
    text-decoration: none;     
    background-color: rgb(0, 0, 0);
}  
.router-link-active .icon .title{
    color: #EF5A31;
}
.card-container{
    display: flex;
    flex-direction: row;
    gap: 1em;
    justify-content: center;
    align-content: center;
    width:97%;
    padding: 1em;
}
.card{
    width: 40em;
    height: 8em;
    padding: 1em;
    background-color:#fff ;
    border-radius: 12px;
}
/**Scroll */
.card.scroll,.card-container.scroll{
    overflow-y: scroll;
}
::-webkit-scrollbar {
    display: none;
}
.card .card-title{
    font-weight: bold;
}
.card-icon{
    margin-top:2em ;
    display: flex;
    flex-direction: column;
}
.card-icon .card-nombre{
    font-size: 28px;
    font-weight: bold;
}
.timetable .recrue{
    width: 100%;
    border-collapse: collapse;
    margin: 0.1em auto;
    padding: 0.1em;
    height: 4em;
    overflow: hidden;

}
.timetable .recrue tr td,.timetable .match tbody tr td{
    font-size: 12px;
}
.timetable .match{
    margin:0 auto;
}
.match .td-head{
    color: #2c3e50;
    font-size: 14px;
    font-weight: bold;

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
.card-container .left{
    width: 100%;
    height:30em;
}
.card-container .right{
    width: 46%;
    height:30em
}
</style>