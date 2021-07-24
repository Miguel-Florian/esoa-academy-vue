<template>
    <div class="card-container">
                <div class="card">
                    <div class="card-title">Académiciens</div>
                    <div class="card-icon">
                        <div class="card-nombre">30</div>
                        <i class="las la-users la-3x"></i>
                    </div>
                </div>
                <div class="card">
                    <div class="card-title">Nouvelles Recrues</div>
                    <div class="card-match"></div>
                </div>
                <div class="card">
                    <div class="card-title">Prochaines Rencontres </div>
                    <div class="card-match"></div>
                </div>
            </div>
            <div class="card-container">
                <div class="card left"><h5>Listes de tous les académiciens</h5></div>
                <div class="card right"><h5>Tableau de tous les matchs</h5></div>
            </div>
</template>
<script>
export default {
    name:"Dash"
    
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
    gap: 2em;
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
.card-container .left{
    width: 100%;
    height:30em;
}
.card-container .right{
    width: 46%;
    height:30em
}
</style>