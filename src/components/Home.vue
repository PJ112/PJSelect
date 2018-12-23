<template>
  <div>
    <div class="bg">
      <img src="../assets/img/bg.jpg">
    </div>
    <div class="index">
      <!--<div class="index-header">-->
        <!--巢湖学院查询系统-->
      <!--</div>-->
      <div class="center">
        <div class="index-center">
          <ul>
            <li><router-link to="/logincard" class="index-content">校园卡</router-link></li>
            <li><router-link to="/logincolum" class="index-content">课程表</router-link></li>
            <li><router-link to="/library" class="index-content">图书馆</router-link></li>
            <li><router-link to="/login" class="index-content">新期待</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>
  @import '../assets/font/font.css';
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
  .index-center ul li a{
    position: relative;
    display: block;
    color: rgba(28,100,149,1);
    -webkit-text-fill-color: rgb(28,100,149);
    -webkit-text-stroke: 2px rgb(28,100,149);
    font-size: 40px;
    font-family: JLH;
    margin-left: 4.5%;
    height: 224px;
    line-height: 224px;
  }
  .index-content{
    position: absolute;
    float: left;
    margin-top: 26%;
    padding-left:7.5%;
  }
</style>
