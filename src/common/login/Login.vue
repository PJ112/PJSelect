<template>
    <div>
      <div class="bg">
        <img src="../../assets/img/bg.jpg" width="100%" height="100%">
      </div>
      <form class="login-form">
        <h1 class="login-h1">一卡通服务</h1>
       <div class="login-user">
         <span class="user-mes">用户:</span>
         <span><input type="text" class="user-input"/></span>
       </div>
        <div class="login-pas">
          <span class="pas-mes">密码:</span>
          <span><input type="text"/></span>
        </div>
        <button class="login-button" @click="handleClick">登录</button>
      </form>
    </div>
</template>

<script>
export default {
  name: "Login",
  methods:{
    handleClick () {
    }
  }
}
</script>

<style scoped>
  @import "../../assets/font/font.css";
  .bg{
    width: 100%;
    height: 100%;
    position: absolute;
    overflow:hidden;
  }
  .bg img{
    background: center center no-repeat;
    width: 100%;
    height: 100%;
  }
  .login-form{
    position: absolute;
    width: 40%;
    text-align: center;
    height: 60%;
    background-color: rgba(9,59,85,0.33);
    box-shadow: 0 0 8px #fff;
    left: 50%;
    top: 50%;
    margin-left: -20%;
    margin-top: -23%;
  }
  .login-form input{
    width: 50%;
    height: 30px;
    border-radius: 2%;
  }
  .login-h1{
    font-family: JLH;
    font-size: 50px;
    color: white;
    margin-top: 2%;
    margin-bottom: 5%;
  }
  .login-user{
    margin-top: 20%;
  }
  .user-mes, .pas-mes{
    font-family: JLH;
    color: white;
    font-size: 30px;
    vertical-align: top;
  }
  .login-pas{
    margin-top: 15%;
  }
  .login-button{
    margin-top: 15%;
    width: 50%;
    height: 30px;
  }
</style>
