<template>
  <div>
    <div class="change-city">
      <div class="current-city">您当前选择：广州</div>
      <div class="item-title">热门城市（点击选择城市）：</div>
      <div class="city-list">
        <div class="item">广州</div>
        <div class="item">深圳</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "changecity",
  data() {
    return {};
  },
  computed: {
    ...mapState(["userInfo"])
  },
  created() {},
  methods: {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.change-city {
  margin: 20px;
  .current-city {
    font-size: 14px;
    color: #333;
    border-bottom: 1px solid #eee;
  }
  .item-title {
    font-size: 14px;
    color: #333;
  }
  .city-list {
    display: flex;
    flex-wrap: wrap;
    .item {
      margin-right: 5px;
      border: 1px solid #eee;
      color: #eee;
      &.avtice {
        color: #333;
      }
    }
  }
}
</style>
