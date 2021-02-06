<template>
  <div>
    <div class="uploader">
      <div class="uploader-in">
        <van-image
          :src="require('@/assets/image/login_tx_moren.png')"
          v-if="!teaTeacher.imgUrl"
        ></van-image>
        <van-image :src="teaTeacher.imgUrl" v-else></van-image>
        <van-uploader
          v-model="avatarList"
          :after-read="avatarAfterRead"
          :max-count="1"
        >
          <van-image
            class="van-image-add"
            :src="require('@/assets/image/login_tx_btn_add.png')"
          ></van-image>
        </van-uploader>
      </div>
    </div>
    <div class="person-msg">
      <div class="item align-center">
        <div class="item-l">填写昵称：</div>
        <div class="item-r">
          <van-field
            placeholder="请输入昵称"
            v-model="teaTeacher.name"
          ></van-field>
        </div>
      </div>
      <div class="item">
        <div class="item-l">图片上传：</div>
        <div class="item-r">
          <!-- <van-image class="pic-uploader" :src="require('@/assets/image/tan_ic_success.png')"></van-image> -->
          <van-uploader
            class="van-uploader-pic"
            v-model="picsList"
            :after-read="picAfterRead"
          >
            <!-- <van-image class="pic-uploader" :src="require('@/assets/image/tan_ic_success.png')"></van-image> -->
          </van-uploader>
        </div>
      </div>
      <div class="item">
        <div class="item-l">选择标签：</div>
        <div class="item-r">
          <div class="item-tags">
            <div
              class="item-tag"
              :class="{ active: currentLabelArr.includes(index) }"
              v-for="(item, index) in labelList"
              :key="index"
              @click="toggleLabel(index)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="item item-title">
        <div class="item-l">基本信息：</div>
      </div>
      <div class="item item-title align-center">
        <div class="item-l item-gray">您的身高：</div>
        <div class="item-r">
          <van-field
            placeholder="请输入身高"
            slot="cm"
            v-model="teaTeacher.height"
          ></van-field>
        </div>
      </div>
      <div class="item item-title align-center">
        <div class="item-l item-gray">您的体重：</div>
        <div class="item-r">
          <van-field
            placeholder="请输入体重"
            slot="kg"
            v-model="teaTeacher.weight"
          ></van-field>
        </div>
      </div>
      <div class="item align-center">
        <div class="item-l item-gray">您的城市：</div>
        <div class="item-r">
          <!-- <div class="item-address">广东省</div> -->
          <div class="item-address" @click="cityClick">
            {{ teaTeacher.city ? teaTeacher.city : "请选择" }}
          </div>
        </div>
      </div>
      <div class="item item-title">
        <div class="item-l">实名认证：</div>
      </div>
      <div class="item item-title align-center">
        <div class="item-l item-gray">真实姓名：</div>
        <div class="item-r">
          <van-field v-model="teaTeacher.realName"></van-field>
        </div>
      </div>
      <div class="item item-title align-center">
        <div class="item-l item-gray">身份证号：</div>
        <div class="item-r">
          <van-field v-model="teaTeacher.idcard"></van-field>
        </div>
      </div>
      <div class="item item-title">
        <div class="item-l item-gray">身份证图：</div>
      </div>
      <div class="item">
        <div class="item-r">
          <div class="item-uploader-card">
            <div class="item-card">
              <van-uploader
                v-model="frontList"
                :after-read="frontCardRead"
                :max-count="1"
              >
                <van-image
                  :src="require('@/assets/image/shenfen_update_zheng.png')"
                ></van-image>
              </van-uploader>
              身份证正面
            </div>
            <div class="item-card">
              <van-uploader
                v-model="afterList"
                :after-read="afterCardRead"
                :max-count="1"
              >
                <van-image
                  :src="require('@/assets/image/shenfen_update_fan.png')"
                ></van-image>
              </van-uploader>
              身份证反面
            </div>
          </div>
        </div>
      </div>
      <div class="item item-title">
        <div class="item-l">提供的服务：</div>
      </div>
      <div class="item" v-for="(item, index) in mealList" :key="index">
        <div class="item-r">
          <div class="item-service">
            <div class="item-servive-top">
              <van-checkbox v-model="item.checked" checked-color="#D627FA">{{
                item.name
              }}</van-checkbox>
            </div>
            <div class="item-service-con">
              {{ item.remark }}
            </div>
            <div class="item-price" v-if="item.checked">
              <div class="item-price-l">
                <van-image
                  :src="require('@/assets/image/ic_jin.png')"
                ></van-image>
                <div class="item-line"></div>
                <van-field
                  placeholder="点击输入价格($)"
                  v-model="item.price"
                ></van-field>
              </div>
              <div class="item-dec">(参考：$ {{ item.money }})</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="finish-tips">
      <van-checkbox
        v-model="loginChecked"
        checked-color="#D627FA"
        shape="square"
        label-color="#999"
        >注册即表示同意<a
          href="javascript: void(0);"
          @click.stop="protocolClick"
          >《用户协议》</a
        ></van-checkbox
      >
    </div>
    <div class="btns">
      <div class="btn" @click="register">立即注册</div>
    </div>
    <div class="finish-tips">
      说明：后台审核通过后可登录
    </div>
    <van-popup v-model="popShow" closeable>
      <div class="center-pop">
        <van-image
          :src="require('@/assets/image/tan_ic_success.png')"
        ></van-image>
        <div class="pop-msg">
          恭喜，您与注册成功，<br />
          请耐心等待平台审核，<br />
          平台审核通过后可进行登录
        </div>
        <div class="bottom-pop-btn" @click="login">去登录</div>
      </div>
    </van-popup>
    <van-popup v-model="cityPop" position="bottom">
      <van-picker
        title=""
        show-toolbar
        :columns="cityList"
        @confirm="onConfirm"
        @cancel="cityPop = false"
      />
    </van-popup>
  </div>
</template>
<script>
import User from "@/api/user";
import Goods from "@/api/goods";
import { Toast } from "vant";

export default {
  name: "login",
  data() {
    return {
      afterList: [],
      frontList: [],
      loginChecked: false,
      currentLabelArr: [],
      picsList: [],
      popShow: false,
      imgList: [],
      avatarList: [],
      teaTeacher: {
        city: "",
        height: "",
        idcard: "",
        idcardUrlFirst: "",
        idcardUrlSecond: "",
        imgUrl: "",
        name: "",
        password: "",
        province: "",
        realName: "",
        remark: "",
        telephone: "",
        weight: "",
        sex: ""
      },
      labelList: [], //初始化标签
      mealList: [],
      cityList: [],
      cityPop: false
    };
  },
  computed: {},
  created() {
    this.teaTeacher.password = this.$route.query.password;
    this.teaTeacher.telephone = this.$route.query.telPhone;
    this.teaTeacher.sex = this.$route.query.sex;
    this.getLabelList();
    this.getCityList();
    this.getMealList();
  },
  methods: {
    cityClick() {
      this.cityPop = true;
    },
    onConfirm(value) {
      this.teaTeacher.city = value;
      this.cityPop = false;
    },
    async getCityList() {
      let params = {};
      let { code, data } = await Goods.cityList(params);
      if (code == 200) {
        for (let i in data.addresses) {
          this.cityList.push(data.addresses[i].name);
        }
      }
    },
    // 登录
    async register() {
      if (!this.loginChecked) {
        Toast("请先勾选注册即同意");
        return;
      }
      if (!this.currentLabelArr.length) {
        Toast("请先选择标签");
        return;
      }
      let labelList = [];
      for (let i in this.currentLabelArr) {
        labelList.push({ name: this.labelList[this.currentLabelArr[i]].name });
      }
      let setmealList = [];
      for (let i in this.mealList) {
        if (this.mealList[i].checked) {
          setmealList.push({
            money: this.mealList[i].price, //	是	string	套餐价格
            name: this.mealList[i].name, //	是	string	套餐名称
            number: this.mealList[i].number, //	是	string	套餐编号（即套餐的id，获取系统的套餐列表有返回）
            time: this.mealList[i].time, //	是	string	套餐时间（获取系统的套餐列表有返回）
            remark: this.mealList[i].remark //	是	string	套餐说明（获取系统的套餐列表有返回）
          });
        }
      }
      const params = {
        imgList: this.imgList,
        labelList: labelList,
        setmealList: setmealList,
        teaTeacher: this.teaTeacher
      };
      const { code } = await User.addWoman(params);
      if (code === 200) {
        Toast("注册成功！");
        this.popShow = true;
      }
    },
    // 登录
    login() {
      this.$router.push("/login");
    },
    toggleLabel(index) {
      if (this.currentLabelArr.includes(index)) {
        this.currentLabelArr.splice(this.currentLabelArr.indexOf(index), 1);
      } else {
        this.currentLabelArr.push(index);
      }
    },
    async getLabelList() {
      let params = {};
      let { code, data } = await User.getLabelList(params);
      if (code == 200) {
        this.labelList = data;
      }
    },
    async getMealList() {
      let params = {};
      let { code, data } = await User.getMealList(params);
      if (code == 200) {
        for (let i in data) {
          data[i].checked = false;
          data[i].price = "";
        }
        this.mealList = data;
      }
    },

    // 图片上传
    async picAfterRead(file) {
      file.status = "uploading";
      file.message = "上传中...";
      try {
        const param = {
          file: file.content.replace("data:image/jpeg;base64,", "") //	多个用逗号分隔
        };
        const { code, data } = await User.upload(param);
        if (code == 200) {
          this.imgList.push({ url: data.url });
          file.status = "done";
          file.message = "上传成功";
        } else {
          file.status = "failed";
          file.message = "上传失败";
          this.picsList.splice(this.avatarList.length - 1, 1);
        }
      } catch (error) {
        file.status = "failed";
        file.message = "上传失败";
        this.picsList.splice(this.avatarList.length - 1, 1);
      }
    },
    async avatarAfterRead(file) {
      file.status = "uploading";
      file.message = "上传中...";
      try {
        const param = {
          file: file.content.replace("data:image/jpeg;base64,", "") //	多个用逗号分隔
        };
        this.avatarList.splice(this.avatarList.length - 1, 1);

        const { code, data } = await User.upload(param);
        if (code == 200) {
          this.teaTeacher.imgUrl = data.url;
          file.status = "done";
          file.message = "上传成功";
        } else {
          file.status = "failed";
          file.message = "上传失败";
          // this.avatarList.splice(this.avatarList.length - 1, 1)
        }
      } catch (error) {
        file.status = "failed";
        file.message = "上传失败";
        // this.avatarList.splice(this.avatarList.length - 1, 1)
      }
    },
    async frontCardRead(file) {
      file.status = "uploading";
      file.message = "上传中...";
      try {
        const param = {
          file: file.content.replace("data:image/jpeg;base64,", "") //	多个用逗号分隔
        };
        const { code, data } = await User.upload(param);
        if (code == 200) {
          this.teaTeacher.idcardUrlFirst = data.url;
          file.status = "done";
          file.message = "上传成功";
        } else {
          file.status = "failed";
          file.message = "上传失败";
        }
      } catch (error) {
        file.status = "failed";
        file.message = "上传失败";
      }
    },
    async afterCardRead(file) {
      file.status = "uploading";
      file.message = "上传中...";
      try {
        const param = {
          file: file.content.replace("data:image/jpeg;base64,", "") //	多个用逗号分隔
        };
        const { code, data } = await User.upload(param);
        if (code == 200) {
          this.teaTeacher.idcardUrlSecond = data.url;
          file.status = "done";
          file.message = "上传成功";
        } else {
          file.status = "failed";
          file.message = "上传失败";
        }
      } catch (error) {
        file.status = "failed";
        file.message = "上传失败";
      }
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.uploader {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  .uploader-in {
    .van-uploader {
      display: block;
      position: absolute;
      right: 0;
      bottom: 0;
      width: 24px;
      height: 24px;
    }
    position: relative;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    .van-image {
      width: 100px;
      height: 100px;
      display: block;
    }
    .van-image-add {
      display: block;
      width: 24px;
      height: 24px;
      // position: absolute;
      // right: 0; bottom: 0;
    }
  }
}

.person-msg {
  margin-bottom: 20px;
  .item {
    padding: 0 16px;
    display: flex;
    margin-bottom: 20px;
    &.align-center {
      align-items: center;
    }
    &.item-title {
      margin-bottom: 10px;
    }
    .item-l {
      font-size: 15px;
      color: #333;
      line-height: 21px;
      &.item-gray {
        color: #999;
      }
    }
    .item-r {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      .van-field {
        border-radius: 2px;
        border: 1px solid #ececec;
        padding: 10px;
        line-height: 21px;
      }
      .pic-uploader {
        width: 110px;
        height: 110px;
        margin-right: 10px;
      }
      .van-uploader-pic {
        // width: 110px;
        // height: 110px;
        margin-bottom: -10px;
        display: flex;
        .van-image {
          width: 110px;
          height: 110px;
          display: block;
        }
        /deep/.van-uploader__preview,
        /deep/.van-uploader__upload {
          width: 110px;
          height: 110px;
          margin-right: 10px;
          margin-bottom: 10px;
          .van-uploader__preview-image {
            width: 100%;
            height: 100%;
          }
        }
        /deep/.van-uploader__upload {
          margin-right: 0;
        }
      }
      .item-tags {
        display: flex;
        flex-wrap: wrap;
        .item-tag {
          padding: 4px 6px;
          background: #f8f9fb;
          border-radius: 2px;
          font-size: 14px;
          color: #b3b5ba;
          border: 1px solid #b3b5ba;
          line-height: 20px;
          margin-right: 4px;
          margin-bottom: 4px;
          &.active {
            color: #d627fa;
            border: 1px solid #d627fa;
          }
        }
      }
      .item-address {
        padding: 10px;
        font-size: 15px;
        color: #333333;
        line-height: 21px;
        border-radius: 2px;
        border: 1px solid #ececec;
        margin-right: 10px;
        flex: 1;
        &:last-child {
          margin-right: 0;
        }
      }
      .item-uploader-card {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .van-image {
          width: 165px;
          height: 113px;
          margin-bottom: 10px;
        }
        .item-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 15px;
          color: #999999;
          line-height: 21px;
        }
      }

      .item-service {
        border-radius: 2px;
        border: 1px solid #ececec;
        margin-bottom: 10px;
        .item-servive-top {
          padding: 8px 8px 0;
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          font-size: 15px;
          color: #333333;
          line-height: 21px;
          .van-radio {
            margin-right: 10px;
          }
        }
        .item-service-con {
          padding: 0 8px 8px;
          font-size: 13px;
          color: #999999;
          line-height: 18px;
        }
        .item-price {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px;
          height: 40px;
          background: #f5f5f5;
          .van-image {
            width: 24px;
            height: 24px;
          }
          .van-field {
            font-size: 14px;
            color: #666666;
            line-height: 20px;
          }
          .item-line {
            margin: 0 3px 0 7px;
            width: 1px;
            height: 22px;
            background: #d627fa;
          }
          .item-dec {
            font-size: 13px;
            color: #c9c9c9;
            line-height: 18px;
          }
          .item-price-l {
            display: flex;
            align-items: center;
            flex: 1;
            .van-field {
              padding-left: 0;
              flex: 1;
              border: 0;
              background: #f5f5f5;
            }
          }
        }
      }
    }
  }
}
.finish-tips {
  margin: 10px 0;
  display: flex;
  justify-content: center;
  font-size: 12px;
  color: #999999;
  line-height: 17px;
  align-items: center;
  .van-image {
    width: 20px;
    height: 20px;
  }
  a {
    color: #d627fa;
  }
}
/deep/.van-uploader__preview {
  margin: 0;
  .van-uploader__preview-delete {
    display: none;
  }
}
.uploader .uploader-in .van-image {
  border-radius: 50%;
  overflow: hidden;
}

// 复选框
/deep/.van-checkbox__icon {
  font-size: 14px;
}
/deep/.van-checkbox__label {
  font-size: inherit;
  color: inherit;
}
/deep/.van-cell.van-field {
  padding: 0;
}
</style>
