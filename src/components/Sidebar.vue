<template>
            <div class="navigation">
            <ul>
                <li>
                    <div class="user">
                        <img class="img" src="../assets/tdf4.jpg" width="20px" height="20px">
                        <div class="username">Mathieu Lelouche</div>
                    </div>
                </li>
                <li>
                    <router-link to="/dashboard" active-class="active" exact tag="button">
                        <span class="icon"><i class="las la-futbol"></i></span>
                        <span class="title">Dashboard</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/profil">
                        <span class="icon"><i class="las la-id-card-alt"></i></span>
                        <span class="title">Profil joueur</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/rencontres">
                        <span class="icon"><i class="las la-calendar"></i></span>
                        <span class="title">Carnet de rencontres</span>
                    </router-link>
                </li>
                <li>
                  <router-link to="/message">
                        <span class="icon"><i class="las la-envelope"></i></span>
                        <span class="title">Messages</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/recrues">
                        <span class="icon"><i class="las la-user-cog"></i></span>
                        <span class="title">Gestion de recrues</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/compétitions">
                        <span class="icon"><i class="las la-medal"></i></span>
                        <span class="title">Carnet de compétitions</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/finance">
                        <span class="icon"><i class="las la-wallet"></i></span>
                        <span class="title">Gestion de finances</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/setting">
                        <span class="icon"><i class="las la-cogs"></i></span>
                        <span class="title">Setting</span>                   
                    </router-link>
                </li>
                
            </ul>
        </div>
</template>

<script>
 export default {
    name: "Sidebar", 
    }
</script>

<style scoped>
</style>