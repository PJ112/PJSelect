<template>
   <div class="card">
     <div class="header">
        <h1 class="header-h1">学生卡服务</h1>
     </div>
     <div class="content">
       <div class="left">
         <img src="../../../assets/img/login.png" class="left-img">
         <div class="left-xm">{{xm}}</div>
         <div>卡号：{{user}}</div>
         <div class="exact">余额：</div>
         <div class="active">账单明细</div>
       </div>
       <div class="right">
         <right-card></right-card>
         <!--<right-card-vue></right-card-vue>-->
       </div>
     </div>
     <button class="back" @click="goHome">返回</button>
   </div>
</template>

<script>
import RightCard from './component/RightCard'
import RightCardVue from './component/RightCardVue'
export default {
  name: "Card",
  data () {
    return {
      xm:this.$route.params.xm,
      user:this.$route.params.user
    }
  },
  methods: {
    goHome () {
      this.$router.go('/')
    },
  },
  components: {
    RightCard,
    RightCardVue
  }
}
</script>

<style scoped>
  @import "../../../assets/font/font.css";
  .card{
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
  }
  .header{
    width: 100%;
    height:120px;
    color: white;
    font-size: 60px;
    background: rgb(9,59,85);
  }
  .header-h1{
    font-weight: bolder;
    line-height: 90px;
    font-family: JLH;
    margin-left: 5%;
  }
  .content{
    position: absolute;
    width: 94%;
    margin-left: 3%;
    height: 80%;
    display: flex;
    margin-top: -40px;
    box-shadow: -1px -1px 25px #555;
    background: white;
  }
  .left{
    flex: 0 0 160px;
    width: 160px;
    text-align: center;
  }
  .left-img{
    margin-top: 20px;
  }
  .left-xm{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .exact{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .active{
    margin-top: 10px;
    width: 130px;
    height: 40px;
    line-height: 40px;
    float: right;
    color: rgb(9,59,85);
    font-family: Hei;
    font-size: 20px;
    font-weight: bolder;
    box-shadow:  -3px -2px 2px 2px #ccc;;
  }
  .right{
    flex: 1;
    box-shadow: -1px -1px 25px #555;
    overflow: hidden;
  }
  .back{
    position: absolute;
    width: 94%;
    margin-top: 50%;
    margin-left: 3%;
    background: rgb(9,59,85);
    font-family: JLH;
    font-size: 60px;
    color: white;
    text-align: center;
    height: 80px;
    line-height: 80px;
    box-shadow: -1px -1px 25px #555;
    cursor: pointer;
  }
</style>
