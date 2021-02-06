<template>
  <div>
    <div class="index-nav">
      <div class="item" @click="search">
        广州<van-image
          :src="require('@/assets/image/ic_xiala.png')"
        ></van-image>
      </div>
      <div class="item" :class="type == 2 ? 'active' : ''" @click="navClick(2)">
        好评
      </div>
      <div class="item" :class="type == 1 ? 'active' : ''" @click="navClick(1)">
        上新
      </div>
      <div class="item" :class="type == 3 ? 'active' : ''" @click="navClick(3)">
        好物
      </div>
    </div>
    <div class="index-list">
      <div
        class="item"
        @click="detailClick(item.teaTeacher.id)"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="item-l">
          <div class="item-cover">
            <van-image
              :src="
                item.imgList && item.imgList.length > 0 && item.imgList[0].url
              "
            ></van-image>
          </div>
          <div class="item-l-bottom">
            <van-image
              :src="require('@/assets/image/pic_number.png')"
            ></van-image>
            <div class="item-num">{{ item.imgList.length }}</div>
          </div>
        </div>
        <div class="item-r">
          <div class="item-r-top">
            <div class="item-name">
              {{
                item.setmealList &&
                  item.setmealList.length > 0 &&
                  item.setmealList[0].name
              }}
            </div>
            <div class="item-score">
              <van-image
                v-for="(childItem, childIndex) in parseInt(
                  item.teaTeacher.evaluate
                )"
                :key="'childIndex' + childIndex"
                :src="require('@/assets/image/ic_star.png')"
              ></van-image>
              {{ item.teaTeacher.evaluate }}分
            </div>
          </div>
          <div class="item-tags">
            <div
              class="item-tag"
              v-for="(childItem, childIndex) in item.labelList"
              :key="'childIndex' + childIndex"
            >
              {{ childItem.name }}
            </div>
          </div>
          <div class="item-price">
            $
            {{
              item.setmealList &&
                item.setmealList.length > 0 &&
                item.setmealList[0].money
            }}
          </div>
          <div class="item-intro">
            简介：{{
              item.setmealList &&
                item.setmealList.length > 0 &&
                item.setmealList[0].remark
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Goods from "@/api/goods";

export default {
  name: "home",
  data() {
    return {
      list: [],
      pageNo: 1,
      type: 2
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      const params = {
        pageNo: this.pageNo,
        pageSize: 10,
        type: this.type
      };
      const { data, code } = await Goods.getGoodsList(params);
      if (code === 200) {
        this.list = this.list.concat(data.teaTeacherList);
      }
    },
    navClick(type) {
      this.type = type;
      this.list = [];
      this.pageNo = 1;
      this.getList();
    },
    search() {
      this.$router.push("/changecity");
    },
    detailClick(teaID) {
      this.$router.push({ path: "/detail", query: { teaID } });
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.index-nav {
  width: 100;
  border-bottom: 1px solid #eee;
  display: flex;
  height: 48px;
  .item {
    font-size: 15px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    .van-image {
      width: 14px;
      height: 14px;
      margin-left: 2px;
    }
    &.active {
      color: #d627fa;
      font-weight: bold;
    }
  }
}
.index-list {
  margin-left: 16px;
  .item {
    display: flex;
    padding: 10px 0;
    .item-l {
      overflow: hidden;
      width: 110px;
      height: 110px;
      border-radius: 6px;
      margin-right: 12px;
      .item-cover .van-image {
        width: 110px;
        height: 110px;
        border-radius: 6px;
      }
      position: relative;
      .item-l-bottom {
        position: absolute;
        right: 0;
        bottom: 0;
        color: #fff;
        font-size: 13px;
        z-index: 2;
        text-align: right;
        line-height: 24px;
        padding-right: 4px;
        .item-num {
          position: relative;
          z-index: 2;
        }
        .van-image {
          z-index: 1;
          position: absolute;
          right: 0;
          bottom: 0;
          width: 36px;
          height: 24px;
        }
      }
    }
    .item-r {
      padding-right: 16px;
      flex: 1;
      .item-r-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        .item-name {
          font-size: 16px;
          color: #333333;
          line-height: 22px;
        }
        .item-score {
          display: flex;
          align-items: center;
          font-size: 13px;
          color: #999999;
          line-height: 18px;
          .van-image {
            width: 16px;
            height: 16px;
            margin-right: 4px;
            &:last-child {
              margin-right: 8px;
            }
          }
        }
      }
      .item-tags {
        display: flex;
        flex-wrap: nowrap;
        .item-tag {
          margin-right: 4px;
          font-size: 12px;
          color: #b3b5ba;
          height: 22px;
          line-height: 22px;
          background: #f8f9fb;
          border-radius: 2px;
          padding: 0 5px;
        }
      }
      .item-price {
        font-size: 17px;
        font-weight: bold;
        color: #f53838;
        line-height: 24px;
        margin: 6px 0;
      }
      .item-intro {
        font-size: 13px;
        color: #999999;
        line-height: 16px;
        margin-bottom: 10px;
      }
      border-bottom: 1px solid #eee;
    }
  }
}
</style>
