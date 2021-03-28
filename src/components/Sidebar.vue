<template>
    <div class="sidebar">
        <div class="title">Dashboard</div>
        <div class="menu-items">
            <router-link to="/dashboard/overview" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">Ajouter un académicien</div>                    
            </router-link>
            <router-link to="/dashboard/accueil" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">Modifier un académicien</div>                    
            </router-link>
            <router-link to="/dashboard/messages" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">Supprimer un académicien</div>                    
            </router-link>
            <router-link to="/dashboard/rencontres" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">Consulter les rencontres</div>                    
            </router-link><router-link to="/dashboard/finances" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">Consulter les finances</div>                    
            </router-link>
            <router-link to="/dashboard/profil" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">Afficher profil</div>                    
            </router-link>
            <router-link to="/dashboard/mail" active-class="active" exact tag="button" class="side-btn">
                <div class="link-container">Envoie d'email</div>                    
            </router-link>
            
        </div>
    </div>
</template>

<script>
 export default {
    name: "Sidebar", 
    }
</script>

<style scoped>
.title{
    color:rgb(143, 136, 136);
    font-size:24px;
    margin-top:10%;
    font-weight: bold;
    font-family: Helvetica;
}
.menu-items{
    display:flex;
    flex-direction:column;
    margin-top:1%;
}
.menu-items>*{
    margin-top:16%;
}
.side-btn:focus{
    outline:none;
}
.side-btn.active::before{
    position:absolute;
    content:"";
    top:-18px;
    right: 0;
    height: 18px;
    width: 18px;
    background-color: white;
}
.side-btn.active::after{
    position:absolute;
    content:"";
    bottom:-18px;
    right: 0;
    height: 18px;
    width: 18px;
    background-color: white;
}
.side-btn.active{
    position: relative;
    background-color: #fff;
    color:#e0291c;
    font-weight: bold;
    border-radius:30px 0 0 30px;
    margin-left:10px;
}
.side-btn{
    font-size:18px;
    border:none;
    padding:10px 0px;
    cursor: pointer;
    color:white;
    text-decoration: none;
    width: auto;
    height: auto;
    background-color: transparent;
}
.side-btn.active .link-container::before{
    position:absolute;
    top:-30px;
    right:0;
    content:"";
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color:#233E6A;
}
.side-btn.active .link-container::after{
    position:absolute;
    bottom:-30px;
    right:0;
    content:"";
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color:#233E6A;
    z-index:99;
}

</style>