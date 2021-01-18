<template>
  <div class="tab-bar">
    <div
      v-for="(item, idx) in tabs"
      :key="idx"
      :class="['bar-item', tabBar === item.name ? 'active' : '']"
      @click="clickHandler(item.name)"
    >
      <van-image
        v-if="tabBar === item.name"
        :src="require('@/assets/image/tab_ic_' + item.icon + '_s.png')"
      />
      <van-image
        v-else
        :src="require('@/assets/image/tab_ic_' + item.icon + '_n.png')"
      />
      <div class="label">{{ item.label }}</div>
    </div>
  </div>
</template>

<script>
import { sessionGetItem } from "@/utils/util";

export default {
  data() {
    return {
      tabs: [
        {
          label: "首页",
          icon: "home",
          name: "home"
        },
        {
          label: "钱包",
          icon: "wallet",
          name: "record"
        },
        {
          label: "电话",
          icon: "phone",
          name: "my"
        },
        {
          label: "我的",
          icon: "me",
          name: "my"
        }
      ],
      tabBar: sessionGetItem("tabBar") || "home"
    };
  },
  watch: {
    $route(to) {
      if (["home", "wallet", "phone", "my"].includes(to.name)) {
        this.tabBar = to.name;
      }
    }
  },
  methods: {
    clickHandler(routerName) {
      if (routerName === this.tabBar) return false;
      this.tabBar = routerName;
      this.$router.push({ name: routerName });
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  background-color: #fff;
  border-top: 1px solid #f2f2f2;
  padding: 0 110px;
  z-index: 10000;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  .bar-item {
    display: flex;
    flex: 1;
    font-size: 22px;
    text-align: center;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    padding: 5px 0;
    // .iconfont {
    //   font-size: 44px;
    // }
    .van-image {
      width: 48px;
      height: 48px;
    }
  }
  .bar-item.active {
    color: #f88706;
  }
}
</style>
