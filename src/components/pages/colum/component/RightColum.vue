<template>
    <div class="rightcolum">
      <div class="colum-title">学期课程</div>
      <div class="colum-chose">
        <span class="chose-title">学年学期</span>
        <span>
          <select  class="chose-year">
            <option selected="selected">2018-2019</option>
            <option>2017-2018</option>
            <option>2016-2017</option>
          </select>
        </span>
        <span>
           <select class="chose-xue">
            <option selected="selected">第一学期</option>
            <option>第二学期</option>
          </select>
        </span>
        <span><button class="toggleButton">切换</button></span>
      </div>
      <div class="colum-content">
        <table class="colum-table">
          <th>节次</th>
          <th>星期一</th>
          <th>星期二</th>
          <th>星期三</th>
          <th>星期四</th>
          <th>星期五</th>
          <th>星期六</th>
          <th>星期日</th>
        </table>
      </div>
    </div>
</template>

<script>
export default {
  name: "RightColum",
  props: {data: Array}
}
</script>

<style scoped>
  .rightcolum{
    width: 100%;
    height: 100%;
    margin-left: 2%;
    margin-top: 2%;
    color: gray;
  }
  .colum-title, .chose-title{
    padding-left: 10px;
    border-left: 4px solid rgb(9,59,85);
    font-size: 25px;
  }
  .colum-chose{
    margin-top: 2%;
  }
  .chose-title{
    font-size: 15px;
  }
  .chose-year,.chose-xue{
    width: 100px;
    height: 28px;
    border-radius: 10px;
    border: 1px solid gainsboro;
  }
  .chose-xue{
    width: 90px;
  }
  .toggleButton{
    padding: 4px;
    border: 1px solid gainsboro;
    border-radius: 5px;
    font-size: 12px;
  }
  .colum-table{
    width: 100%;
    height: 100%;
    border: 1px solid gainsboro;
  }
</style>
