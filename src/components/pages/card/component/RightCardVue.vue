<template>
  <div>
    <div class="right-title">我的账单</div>
    <div class="right-search">
      <span>查询年月:</span>
      <input type="date" class="search-input" ref="startTime"/>
      至
      <input type="date" class="search-input" ref="endTime"/>
      <input value="切换" type="button" class="search-button" @click="toggleTime"/>
    </div>
    <div class="right-content">
      <el-table
        style="left: 20px"
        :data="data.slice((currentPage - 1) *  pageSize, currentPage *  pageSize)"
      >
        <el-table-column  type="index" label="序号" width="100"></el-table-column>
        <el-table-column label="消费类型" prop="jylx"></el-table-column>
        <el-table-column label="时间" prop="jysj"></el-table-column>
        <el-table-column label="地点" prop="shmc"></el-table-column>
        <el-table-column label="金额" prop="jye"></el-table-column>
      </el-table>
        <el-pagination
          class="el-pagination"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :total="total"
          layout="total, prev,pager, next,jumper"
        >
        </el-pagination>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "RightCardVue",
    data () {
      return {
        data: [],
        pageIndex:1,
        total: 0,
        pageData:[],
        currentPage: 1,
        pageSize: 10
      }
    },
    methods: {
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage
      },
      toggleTime () {
        this.startTime = this.$refs.startTime.value
        this.endTime = this.$refs.endTime.value
        if (!this.endTime) {
          const newDate = []
          this.data.forEach((item, index) => {
            if (this.startTime < this.data[index].jysj && this.endTime > this.data[index].jysj) {
              console.log('123')
              newDate.push(item)
              newDate == this.data
            }
          })
        }
      }
      },
    beforeCreate () {
      axios.get('/static/mock/card/card.json').then( (res) =>{
        if (res) {
          res = res.data
          this.data = res.data[0]
          this.total = res.data[0].length
        }
      })
    },
    watch: {
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
  .el-pagination{
    width: 100%;
    text-align: center;
  }
  .right-content{
    margin-top: 10px;
  }
</style>
