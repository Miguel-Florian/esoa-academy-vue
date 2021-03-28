<template>
<div class="dashboard">
    <Sidebar/>
    <div class="content">
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
 template{
    background-color: teal;
  }
 .dashboard{
     display:grid;
     grid-template-columns: 1fr 5fr;
     height: 100vh;
     width: 100vw;
     background-color:teal;
 }
 .content{
    background-color: white;
    border-radius: 10px;
    margin-top:2%;
    margin-right:2%;
    margin-bottom: 2%;
 }
    </style>
