<template>
  <div id="login">
    <h1>Login</h1>
    <div class="picture"><img src="../assets/cherry-125.png" alt=""></div>
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          class="username"
          id="username"
          placeholder="Enter username"
        />
      </div><br>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="password"
          id="password"
          placeholder="Password"
        />
      </div><br>
      <div class="form-check">
        <input type="checkbox" class="checkbox" id="checkbox" />
        <label class="form-check-label" for="checkbox">Check me out</label>
      </div>
      <button type="submit" class="submit">Submit</button>
    </form>
  </div>
</template>
<style scoped>
.picture{
    float:left;
    margin-left:20%;
}
img{
    width: 280px;
    height: 400px;
}
form{
    float:right;
    margin-right:26%;
    margin-top:6%;
}
.form-group,.form-check,button{
    margin-top:16%;
    
}
</style>
