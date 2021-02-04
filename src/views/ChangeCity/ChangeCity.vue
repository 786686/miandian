<template>
  <div>
    <div class="change-city">
      <div class="current-city">您当前选择：广州</div>
      <div class="item-title">热门城市（点击选择城市）：</div>
      <div class="city-list">
        <div class="item"
        :class="{active:index == current}"
            v-for="(item,index) in list"
            :key="index"
            >{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Goods from "@/api/goods";

export default {
  name: "changecity",
  data() {
    return {
      list:[],
      current: "",
      pageNo: 1,
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  created() {
    this.getList()
  },
  methods: {
    async getList(){
      let params = {
        pageNo: this.pageNo,
        pageNum: 10
      }
      let {code,data} = await Goods.cityList(params);
      if(code == 200){
        this.list = data;
      }
    }
    
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.change-city {
  margin: 20px 16px;
  .current-city {
    margin-bottom: 20px;
    font-size: 15px;
    color: #333333;
    line-height: 21px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  .item-title {
    font-size: 15px;
    color: #333333;
    line-height: 21px;
    margin-bottom: 10px;
  }
  .city-list {
    display: flex;
    flex-wrap: wrap;
    .item {
      padding: 0 12px;
      line-height: 30px;
      height: 32px;
      border-radius: 2px;
      border: 1px solid #e5e5e5;
      margin-right: 6px;
      margin-bottom: 10px;
      color: #b3b5ba;
      font-size: 14px;
      &.active {
        color: #d627fa;
      }
    }
  }
}
</style>
