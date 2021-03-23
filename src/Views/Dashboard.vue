<template>
<div class="dashboard">
    <div id="dash">
        <nav id="menu-bar">
            <ul>
                <li class="logo-fav"><router-link to='/' id="homelink">Esoa Academie</router-link></li>
                <li class="name-admin">Daniel Ngantchou</li>
            </ul>
        </nav>
        <div class="container">
            <div>
                <h2>Dashboard</h2>
            </div>
            <div class="content">
                <div class="slidebar">
                    <nav id="item">
                        <ul>
                            <li v-for="item in items" :key="item.id" class="liste"><router-link to='/'>{{item}}</router-link></li>
                        
                        </ul>
                    </nav>
                </div>
                <div class="road-view">{{item}}</div>
            </div>
        </div>
    </div>
    <div class="footer">
      <h4>Copyright &copy; Esoa Academy 2021 - Tous droits réservés &reg;</h4>
    </div>
</div>
</template>
 <script>
    export default {
    name: "Dashboard", 
    data(){
        return {
            items: ['Ajouter un académicien','Modifier un académicien','Afficher profil d\'académicien',
                    'Supprimer un joueur','Consulter les rencontres','Consulter les finances','Envoie d\'emails']
        }
        },
    };
</script>
    <style scoped>
    #homelink{
    font-weight: bold;
    text-decoration: none;
     color: #EF5A31;
}
 a{
    font-weight: bold;
    text-decoration: none;
     color: #FFFFFF;
}
    #menu-bar{
        
        height: 3em;
        padding:1em;
        padding-right:3em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #233E6A;
        border-radius:12px;
    }
    .logo-fav,.slidebar{
        float: left;
    }
    .logo-fav{
        color: #EF5A31;
        font-size:20px;
        font-weight: bolder;
        font-family: Helvetica, sans-serif;
    }
    .name-admin{
        float: right;
        color:#FFFFFF;
        font-size:15px;
        font-weight: bolder;
        font-family: Helvetica, sans-serif;
    }
    ul>li{
        list-style: none;
    }
    .content{
            margin-top: 1%;
            height: 53em;
    }
    .slidebar{
        border-radius: 10px;
        margin-top:0.2em;
        height: 50em;
        width: 22em;
        background: #233E6A;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .road-view{
        border:1px solid black;
       width: 56em;
       margin-left:30%;
       margin-top:2em;
        height: 50em;
        border-radius:10px;
    }
    #item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
  .liste{

      margin-bottom: 3em;
      padding-top:2em;
      padding-left:1em;
      padding-right:1em;
      display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
  }
    </style>
