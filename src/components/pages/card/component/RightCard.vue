<template>
    <div>
      <div class="right-title">我的账单</div>
      <div class="right-search">
        <span>查询年月:</span>
        <input type="date" class="search-input"/>
        至
        <input type="date" class="search-input"/>
        <input value="切换" type="button" class="search-button"/>
      </div>
      <div class="right-content">
        <ul>
          <li class="content-title border-bottom">
            <td class="xuhao">序号</td>
            <td>消费类型</td>
            <td>时间</td>
            <td>地点</td>
            <td>金额</td>
          </li>
          <ul>
              <li class="content-title border-bottom" v-for="(item, index) of pageData" :key="index">
                <td>{{index+1}}</td>
                <td>{{item.jylx}}</td>
                <td>{{item.jysj}}</td>
                <td>{{item.shmc}}</td>
                <td>{{item.jye}}</td>
              </li>
            </ul>
        </ul>
        <ul class="page">
          <li v-if="pageIndex === 1" class="disabled">上一页</li>
          <li v-else @click="LoadData(pageIndex-1)">上一页</li>
          <li
            class="active"
            v-for="(item ,index) of totalPages"
            :key="index"
            :class="pageIndex == item ? 'isActive':'' "
            @click="LoadData(item)"
          >{{item}}</li>
          <li v-if="pageIndex == totalPages || totalPages == 0" class="disabled">下一页</li>
          <li v-else @click="LoadData(pageIndex+1)">下一页</li>
        </ul>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "RightCard",
  data () {
    return {
      data: [],
      pageIndex:1,
      total: 0,
      pageSize:10,
      pageData:[]
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.total *1 / this.pageSize )
    }
  },
  beforeCreate () {
    axios.get('/static/mock/card/card.json').then( (res) =>{
      if (res) {
        res = res.data
        this.data = res.data[0]
        this.total = res.data[0].length
        this.LoadData(1)
      }
    })
  },
  methods:{
    LoadData(value) {
      this.pageIndex = value
      this.pageData = this.data.slice((value - 1) * 10, value * 10)
    }
  }
}
</script>

<style scoped>
  .right-title, .right-search{
    margin-left: 20px;
    margin-top: 21px;
    padding-left: 15px;
    border-left: 4px solid rgb(9,59,85);
    color: gray;
  }
  .right-search{
    height: 20px;
    line-height: 20px;
  }
  .right-title{
    font-size: 25px;
    width: 100px;
  }
  .search-input{
   border: 1px solid gainsboro;
    border-radius: 5px;
    color: gray;
    width: 140px;
  }
  .search-button{
    width: 30px;
    font-size: 12px;
    color: gray;
    border-radius: 2px;
    border: 1px solid gainsboro;
    cursor: pointer;
  }
  .content-title{
    height: 50px;
    line-height: 50px;
    color: gray;
    padding-left: 60px;
  }
  .content-title td{
    width: 300px;
  }
  .page{
    margin-left: 38%;
    margin-top: 1%;
  }
  .page li{
    float: left;
    border: 1px solid gainsboro;
    padding: 6px;
    cursor: pointer;
  }
  .isActive{
    color: red;
  }
</style>
