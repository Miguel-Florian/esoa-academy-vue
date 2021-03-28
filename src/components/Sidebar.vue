<template>
    <div class="sidebar">
        <div class="title">Simple sidebar</div>
        <div class="menu-items">
            <router-link to="/overview" active-class="active" tag="button" class="side-btn">
                <div class="link-container">Overview</div>                    
            </router-link>
            <router-link to="/accueil" active-class="active" tag="button" class="side-btn">
                <div class="link-container">Accueil</div>                    
            </router-link>
            <router-link to="/messages" active-class="active" tag="button" class="side-btn">
                <div class="link-container">Message</div>                    
            </router-link>
            <router-link to="/profil" active-class="active" tag="button" class="side-btn">
                <div class="link-container">Profil</div>                    
            </router-link>
            <router-link to="/connexion" active-class="active" tag="button" class="side-btn">
                <div class="link-container">Connexion</div>                    
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
    color:white;
    font-size:24px;
    margin-top:10px;
}
.menu-items{
    display:flex;
    flex-direction:column;
    margin-top:40px;
}
.menu-items>*{
    margin-top:22%;
}
.side-btn:focus{
    outline:none;
}
.side-btn.active{
    background-color: #fff;
    color:teal;
    font-weight: bold;
}
.side-btn{
    font-size:18px;
    border:none;
    padding:10px 0px;
    cursor: pointer;
    color: black;
    text-decoration: none;
    width: auto;
    height: auto;
    background-color: #fff;
}

</style>