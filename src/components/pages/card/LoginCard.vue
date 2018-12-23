<template>
  <div>
    <div class="bg">
      <img src="../../../assets/img/otherbg.jpg" width="100%" height="100%">
    </div>
    <button class="login-back" @click="goBack"><i>返回</i></button>
    <form class="login-form">
      <h1 class="login-h1">一卡通服务</h1>
      <div class="login-user">
        <span class="user-mes">用户:</span>
        <span><input type="text" class="user-input" v-model="user"/></span>
      </div>
      <div class="login-pas">
        <span class="pas-mes">密码:</span>
        <span><input type="password" v-model="pas"/></span>
      </div>
      <button class="login-button" @click="handleClick(user)">登录</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "LoginCard",
  data () {
    return {
      pas: '',
      user: ''
    }
  },
  methods: {
    handleClick (user) {
     if (user === '' || this.pas === '') {
       alert('账号或密码不能为空！')
     } else if ( this.user === this.xgh && this.pas === this.ye) {
        this.$router.push({
          name: 'Card',
          params: {
            user: this.user,
            xm: this.xm
          }
        })
     } else {
       alert('账号名或密码错误！')
     }
    },
    goBack () {
      this.$router.push('/')
    }
  },
  created () {
    axios.get('/static/mock/card/name.json').then( (res) =>{
      if (res) {
        res = res.data
        this.xgh = res.data.xgh
        this.ye = res.data.ye
        this.xm  = res.data.xm
      }
    })
  }
}
</script>

<style scoped>
  @import "../../../assets/font/font.css";
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
  .login-back{
    position: absolute;
    margin-left: 5%;
    margin-top: 5%;
    font-size: 40px;
    font-family: JLH;
    background-color: rgba(9,59,85,0.1);
  }
  .login-back i{
    color: white;
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
    width: 60%;
    height: 30px;
  }
</style>
