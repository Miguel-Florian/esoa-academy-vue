<template>
<!--lorsque l'utilisateur aura un acces valide il sera dirigé sur dashboard/dash-->
    <div class="container">
        <div class="navigation">
            <ul>
                <li>
                    <div class="user">
                        <img class="img" src="../assets/tdf4.jpg" width="20px" height="20px">
                        <div class="username">Mathieu Lelouche</div>
                    </div>
                </li>
                <li>
                    <router-link to="Dash" exact tag="button">
                        <span class="icon"><i class="las la-futbol"></i></span>
                        <span class="title">Dashboard</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="Profil" >
                        <span class="icon"><i class="las la-id-card-alt"></i></span>
                        <span class="title">Profil joueur</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="Rencontres">
                        <span class="icon"><i class="las la-calendar"></i></span>
                        <span class="title">Carnet de rencontres</span>
                    </router-link>
                </li>
                <li>
                  <router-link to="Mail">
                        <span class="icon"><i class="las la-envelope"></i></span>
                        <span class="title">Messages</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="Recrue">
                        <span class="icon"><i class="las la-user-cog"></i></span>
                        <span class="title">Gestion de recrues</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="Competition">
                        <span class="icon"><i class="las la-medal"></i></span>
                        <span class="title">Carnet de compétitions</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="Finance">
                        <span class="icon"><i class="las la-wallet"></i></span>
                        <span class="title">Gestion de finances</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="Setting">
                        <span class="icon"><i class="las la-cogs"></i></span>
                        <span class="title">Setting</span>                   
                    </router-link>
                </li>
                
            </ul>
        </div>
        <div class="main">
            <div class="topbar">
                <div class="toggle" @click="toggleMenu"><i class="las la-bars la-3x"></i></div>
                <div class="search">
                    <label for="search">
                        <input type="text" name="search" id="search" placeholder="Rechercher ...">
                        <i class="las la-search la-1x"></i>
                    </label>
                </div>
            </div>
            
            <router-view></router-view>
        </div>
    </div>
</template>
 <script>
 /*
 const departs =[
     {id:1,nom:"Kaï",prenom:"Stef",age:"28",taille:"1.65",poids:45},
     {id:1,nom:"Mathieu",prenom:"Solanzo",age:"22",taille:"1.50",poids:57},
     {id:1,nom:"Idriss",prenom:"Konrad",age:"20",taille:"1.45",poids:54},
     {id:1,nom:"Hunter",prenom:"Bcukingham",age:"30",taille:"1.75",poids:44},
 ];
 const cardTitres=["Académiciens","Recrues","Départs"];
 const icon=["las la-users","las la-user-alt-slash","las la-user-check"];*/
export default {
    name:"Dashboard",

    methods: {
        toggleMenu: function(){
            let toggle=document.querySelector('.toggle');
            let nav=document.querySelector('.navigation');
            let main=document.querySelector('.main');
            toggle.classList.toggle('active');
            nav.classList.toggle('active');
            main.classList.toggle('active');
            },
        },

}
</script>




<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box ;
}
body{
    overflow-x:hidden ;
}
body #app {
    margin: -0.5em;
}
.container{
    position: relative;
    width: 100%;
    margin: -0.5em;
}
.navigation{
    position: fixed;
    width: 300px;
    height: 300%;
    background: #001d49;
    transition: 1s;
    overflow: hidden;
}
.navigation.active{
    margin-top:-4em;
}
.navigation ul li .user {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap:1em;
    padding-bottom:0.5em ;
}
.navigation ul li .user .img{
    
    width: 80px;
    height: 80px;
    border-radius: 100%;
    margin: 0.4em auto;
}
.navigation ul li .username{
    font-size: 16px;
    color: #fff;
}
.navigation ul{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.navigation ul li {
    position: relative;
    width: 100%;
    list-style: none;
}
.navigation ul li:hover{
    background: rgb(243, 16, 16);
}
.navigation ul li:nth-child(1){
    margin-bottom: 20px;
}
.navigation ul li:nth-child(1):hover{
    background: transparent;
}
/** router-link = a */
.navigation ul li a{
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    text-decoration: none;
    color:#87837B;
    flex-direction: row;
    align-content: center;
}
.router-link-active{
    font-weight: bold;
    text-decoration: none;     
    background-color: rgb(0, 0, 0);
  }  
.router-link-active .icon .title{
      color: #EF5A31;
  }
.navigation ul li a .icon{
    position: relative;
    display: block;
    min-width: 60px;
    height: 60px;
    line-height: 70px;
    text-align: center;
}
.navigation ul li a .icon .fa{ /** la couleur des icon */
    color:#fff;
    font-size: 24px;
}
.navigation ul li a .title{
    position: relative;
    display: block;
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    white-space:nowrap;
    font-size: 17px;
}

.main{
    position:absolute;
    width:calc(101% - 300px);
    left:300px;
    min-height: 100vh;
    background:#F5F5F5 ;
    transition: 0.5s;
}
.main.active{
    width:calc(101% - 60px);
    left:60px;
}
.main .topbar{
    width: 100.2%;
    background-color: #EEEEEE;;
    height:60px;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
}
.toggle{
    position:relative;
    width: 30px;
    height: 40px;
    cursor: pointer;
    color:#FF8B00;
}
.toggle:before{
    font-family: fontAwesome;
    position:absolute;
    width: 100%;
    height:100%;
    font-size:24px;
    color:rgb(129, 125, 125);
    text-align:center;
    line-height:60px;
}
.search{
   position:relative;
   width: 250px;
   margin:0 90px; 
}
.search label{
    position: relative;
    width: 100%;
}
.search input:focus{
    border-color:#166ae9;
    border: 1px solid #166ae9;
}
.search label input{
    width: 100%;
    height: 40px;
    border-radius:40px;
    padding: 5px 20px;
    padding-left:35px;
    outline: none;
    border: 1px solid rgba(0,0,0,0.2);
}
.search label .las {
    position: absolute;
    left:10px;
    top:-1px;
    font-size: 20px;
    color:#FF8B00;
}
.icon .las{
    font-size: 28px;
    color:#FF8B00;
}

</style>
