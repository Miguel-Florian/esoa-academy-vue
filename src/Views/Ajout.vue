<template>
    <!--<div class="overview">
        <p>Ajouter</p>
        </div>-->
   
    <div class="container">
        <div class="title">Ajouter un Joueur</div>
        <form action="">
            <div class="user-details">
            <div class="input-box">
                <span class="details">Nom</span>
                <input type="text" name="" id="" placeholder="Enter your name" required>
            </div>
            <div class="input-box">
                <span class="details">Prenom</span>
                <input type="text" name="" id="" placeholder="Enter your surname" required>
            </div>
            <div class="input-box">
                <span class="details">Email</span>
                <input type="text" name="" id="" placeholder="Enter your email" required>
            </div>
             <div class="input-box">
                <span class="details">Poste</span>
                <input type="text" name="" id="" placeholder="Example: Midfielder" required>
            </div>
            <div class="input-box">
                <span class="details">Telephone</span>
                <input type="tel" name="" id="" placeholder="Enter your telephone" required pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$">
            </div>
            <div class="input-box">
                <span class="details">Adresse</span>
                <input type="text" name="" id="" placeholder="Enter your location" required>
            </div>
            <div class="input-box">
                <span class="details">Password</span>
                <input type="password" name="" id="" placeholder="Enter your password" required>
            </div>
            <div class="gender-details">
                <div class="category">
                    <label for="male" class="male">
                       <!-- <span class="dot one"></span>-->
                        <span class="gender">Male</span><input type="radio" name="gender" id="male" value="mal" checked>
                    </label>
                     <label for="female" class="female">
                        <span class="gender">Female</span> <input type="radio" name="gender" id="female" value="femelle">
                    </label>
                </div>
            </div>
                <div class="button">
                    <input type="submit" value="Ajouter">                
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name:"Ajout"
    
}
</script>

<style scoped>
    /*.overview{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size:30px;
        color:gray;
        font-weight: 700;
    }*/
    .container{
        padding: 0px 0px;
        justify-content: center;
        align-items: center;
    }
    .container .title{
        color:#EF5A31;
        margin-bottom:6px;
        font-size:20px;
        font-weight: bold;
        font-family: Helvetica,sans-serif;
    }
    .user-details > .input-box{
        padding: 10px 0px;
    }
    .input-box > .details{
            position: absolute;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            margin-top:10px;
            font-family: Helvetica,"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans -serif;
            font-weight: bold;
    }
    form{
        margin:0 auto;
        justify-content: center;
        align-items: center;
        width: 40vw;
        padding-bottom:6px;
        padding-left:20px ;
    }
    input[type="text"],input[type="password"],input[type="email"],input[type="tel" ]{
        width: 16em;
        height: 2em;
        border-radius:10px;
        outline:none;
        border-color:rgba(194, 192, 192, 0.596);
        padding-left:2%;
    }
    input[type="text"]:focus,input[type="password"]:focus,input[type="email"]:focus,input[type="tel" ]:focus{
        outline:none;
        border:2px solid #e0291c;
    }
input::placeholder {
  font-style: italic;
  letter-spacing: 1px;
  color: rgba(179, 173, 173, 0.527);
  font-size: 12.4px;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans -serif;
  
 }
    .gender-details{
        margin-bottom: 10%;
        margin-top: 2%;
        font-weight: bold;
    }
    .category .male{
        float:left;
        width: 25%;
        margin-left: 22%;
    }
    .category .female{
        float: right;
        width: 25%;
        margin-right: 22%;
    }
    input[type="submit"]{
        width: 16em;
        height: 2.8em;
        border-radius:10px;
        outline:none;
        border-color:transparent;
        background-color: #233E6A;
        color:#EF5A31;
        font-weight:bold;
    }
    input[type="submit"]:hover{
        cursor: pointer;
        background-color: #EF5A31;
        color:white;
    }
</style>