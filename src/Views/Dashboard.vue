<template>
<div class="dashboard">
    <Sidebar/>
    <div class="content">
        <div class="user">
                <h5>Daniel Ngantchou &nbsp; <i class="fas fa-user"></i></h5>
        </div>
        <router-view/>
    </div>
    
</div>
</template>


 <script>
 import Sidebar from "../components/Sidebar" ;
    export default {
    name: "Dashboard", 
    components:{
        Sidebar
    },
    }
</script>


    <style scoped>
 body{
     box-sizing:border-box;
     
 }
 .dashboard{
     display:grid;
     grid-template-columns: 1fr 5fr;
     height: 100vh;
     width: 100vw;
     background-color:#233E6A;
     margin-left:-1%;
     margin-top:-1%;
     margin-bottom:-1%;
 }
 .user{
     margin-left:80%;
     justify-content: center;
     align-items: center;
 }
 i{
     color:#EF5A31;
 }
 .content{
    background-color: white;
    border-radius: 10px;
    margin-top:4%;
    margin-right:2%;
    margin-bottom: 2%;
 }
    </style>
