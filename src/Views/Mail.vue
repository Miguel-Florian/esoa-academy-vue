<template>
    <div class="overview">
        <p>Mail</p>
   </div>
   <div class="container-card">
       <div class="card-left">
           <h5>Tous les messages</h5>
                
        </div>
        <div class="card-right">
            <h5>Au clic sur repondre/lire cela se charge ici</h5>
            <div class="reply">
                <form action="" method="post">
                    <div class="input-group">
                        <label for="to">A : </label>
                        <input type="email" name="receiver" id="receiver">
                    </div>
                    <div class="input-group">
                        <label for="from">De : </label>
                        <input type="email" name="sender" id="sender">
                    </div>
                    <div class="input-group">
                        <label for="object">Objet :</label>
                        <input type="text" name="objet" id="objet">
                    </div>
                    <div class="input-group">
                        <label for="message">Message :</label>
                        <input type="text" name="message" id="message" placeholder="type your message here !">
                    </div>
                    <div class="input-group">
                        <label for="file">Télecharger un fichier :</label>
                        <input type="file" name="file" id="file">
                    </div>
                    <div class="input-button">
                        <input type="button" value="Envoyer">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Mail"   
}
</script>

<style scoped>
   .overview{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size:26px;
        color:gray;
        font-weight: 700;
    }
    .container-card{
        width: 96%;
        display: flex;
        flex-direction: row;
        gap: 2em;
        padding: 1em;
        margin: auto;
    }
    .card-left,.card-right{
        width: 40%;
        background-color: #fff;
        border-radius: 12px;
        height: 26em;
        overflow: scroll;
    }
    .card-right{
        width: calc(96% - 40%);
    }
    ::-webkit-scrollbar {
    display: none;
    }
</style>