<style scoped lang="scss">
  .person-top{
    padding: 20px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    .item-avatar{
      .van-image{
        display: block;
        width: 100px; height: 100px;
        overflow: hidden; border-radius: 50%;
      }
    }
    .item-name{
      
      margin: 5px 0 7px;
      font-size: 20px;
      color: #333333;
      line-height: 28px;
    }
    .item-score{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      color: #333333;
      line-height: 18px;
      margin-bottom: 8px;
      .van-image{
        &:last-child{
          margin-right: 8px;
        }
        width: 16px; height: 16px; margin-right: 4px;
      }
    }
    .item-phone{
      align-items: center;
      display: flex;
      font-size: 15px;
      color: #999999;
      line-height: 21px;
      .van-image{
        width: 28px; height: 28px; margin-left: 12px;
      }
    }
  }
</style>
<template>
  <div>
    <div class="person-top">
      <div class="item-avatar">
        <van-image :src="require('@/assets/image/pic.jpg')"></van-image>
      </div>
      <div class="item-name">王小丫</div>
      <div class="item-score">
        <van-image :src="require('@/assets/image/ic_star.png')"></van-image>
        <van-image :src="require('@/assets/image/ic_star.png')"></van-image>
        <van-image :src="require('@/assets/image/ic_star.png')"></van-image>
        <van-image :src="require('@/assets/image/ic_star.png')"></van-image>
        4分
      </div>
      <div class="item-phone">13445674567<van-image :src="require('@/assets/image/btn_call.png')"></van-image></div>
    </div>
    <div class="person-msg">
      <div class="item item-title">
        <div class="item-l">我的图片：</div>
      </div>
      <div class="item">
        <div class="item-r">
          <van-image class="pic-uploader" :src="require('@/assets/image/pic.jpg')"></van-image>
          <van-uploader class="van-uploader-pic">
            <van-image :src="require('@/assets/image/btn_add_photo.png')"></van-image>
          </van-uploader>
        </div>
      </div>
      <div class="item">
        <div class="item-l">我的标签：</div>
        <div class="item-r">
          <div class="item-tags">
            <div class="item-tag active">风雨无阻</div>
            <div class="item-tag">风雨无阻</div>
            <div class="item-tag">风雨无阻</div>
            <div class="item-tag">风雨无阻</div>
            <div class="item-tag">风雨无阻</div>
            <div class="item-tag">风雨无阻</div>
          </div>
        </div>
      </div>
      <div class="item item-title">
        <div class="item-l">基本信息：</div>
      </div>
      <div class="item item-title align-center">
        <div class="item-l item-gray">您的身高：</div>
        <div class="item-r">
          <van-field placeholder="请输入身高" slot="cm"></van-field>
        </div>
      </div>
      <div class="item item-title align-center">
        <div class="item-l item-gray">您的体重：</div>
        <div class="item-r">
          <van-field placeholder="请输入体重" slot="cm"></van-field>
        </div>
      </div>
      <div class="item align-center">
        <div class="item-l item-gray">您的城市：</div>
        <div class="item-r">
          <div class="item-address">广东省</div>
          <div class="item-address">广州市</div>
        </div>
      </div>
      <div class="item item-title">
        <div class="item-l">实名认证：</div>
      </div>
      <div class="item item-title align-center">
        <div class="item-l item-gray">真实姓名：</div>
        <div class="item-r">
          <van-field></van-field>
        </div>
      </div>
      <div class="item item-title align-center">
        <div class="item-l item-gray">身份证号：</div>
        <div class="item-r">
          <van-field></van-field>
        </div>
      </div>
      <div class="item item-title">
        <div class="item-l item-gray">身份证图：</div>
      </div>
      <div class="item">
        <div class="item-r">
          <div class="item-uploader-card">
            <div class="item-card">
              <van-uploader>
                <van-image :src="require('@/assets/image/shenfen_update_zheng.png')"></van-image>
              </van-uploader>
              身份证正面
            </div>
            <div class="item-card">
              <van-uploader>
                <van-image :src="require('@/assets/image/shenfen_update_fan.png')"></van-image>
              </van-uploader>
              身份证反面
            </div>
          </div>
        </div>
      </div>
      <div class="item item-title">
        <div class="item-l">您的服务：</div>
      </div>
      <div class="item">
        <div class="item-r">
          <div class="item-service">
            <div class="item-servive-top">
              <van-radio name="1"></van-radio>
              套餐一/小时
            </div>
            <div class="item-service-con">
              套餐说明套餐说明套餐说明套餐说明套餐说明套餐说明套餐说明套餐说明套餐说明套餐说明套餐说明套
            </div>
            <div class="item-price">
              <div class="item-price-l">
                <van-image :src="require('@/assets/image/ic_jin.png')"></van-image>
                <div class="item-line"></div>
                <van-field placeholder="点击输入价格($)"></van-field>
              </div>
              <div class="item-dec">(参考：$ 50.00)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btns">
      <div class="btn">确认修改</div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "login",
  data() {
    return {
      popShow: false,
    };
  },
  computed: {
  },
  created() {
  },
  methods: {
    
  },
  mounted() {
  }
};
</script>
<style lang="scss" scoped>
.uploader{
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  .uploader-in{
    .van-uploader{
      display: block;
    }
    position: relative;
    width: 100px; height: 100px;
    display: flex;
    justify-content: center;
    .van-image{
      width: 100px; height: 100px;
      display: block;
    }
    .van-image-add{
      width: 24px; height: 24px;
      position: absolute;
      right: 0; bottom: 0;
    }
  }
}

.person-msg{
    margin-bottom: 20px;
    .item{
      padding: 0 16px;
      display: flex;
      margin-bottom: 20px;
      &.align-center{
        align-items: center;        
      }
      &.item-title{
        margin-bottom: 10px;
      }
      .item-l{
        font-size: 15px;
        color: #333;
        line-height: 21px;
        &.item-gray{
          color: #999;
        }
      }
      .item-r{
        flex: 1;
        display: flex;
        
        .van-field{
          border-radius: 2px;
          border: 1px solid #ECECEC;
          padding: 10px;
          line-height: 21px;
        }
        .pic-uploader{
          width: 110px;
          height: 110px;
          margin-right: 10px;
          border-radius: 4px;
          overflow: hidden;
        }
        .van-uploader-pic{
          width: 110px;
          height: 110px;
          display: flex;
          .van-image{
            display: block;
          }
        }
        .item-tags{
          display: flex;
          flex-wrap: wrap;
          .item-tag{
            padding: 4px 6px;
            background: #F8F9FB;
            border-radius: 2px;
            font-size: 14px;
            color: #B3B5BA;
            line-height: 20px;
            margin-right: 4px;
            margin-bottom: 4px;
            &.active{
              color: #D627FA;
              border: 1px solid #D627FA;
            }
          }
        }
        .item-address{
          padding: 10px;
          font-size: 15px;
          color: #333333;
          line-height: 21px;
          border-radius: 2px;
          border: 1px solid #ECECEC;
          margin-right: 10px;
          flex: 1;
          &:last-child{
            margin-right: 0;
          }
        }
        .item-uploader-card{
          width: 100%;          
          display: flex;
          justify-content: space-between;
          .van-image{
            width: 165px;
            height: 113px;
            margin-bottom: 10px;
          }
          .item-card{
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 15px;
            color: #999999;
            line-height: 21px;
          }
        }

         .item-service{
          border-radius: 2px;
          border: 1px solid #ECECEC;
          margin-bottom: 10px;
          .item-servive-top{
            padding: 8px 8px 0;
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            font-size: 15px;
            color: #333333;
            line-height: 21px;
            .van-radio{
              margin-right: 10px;
            }
          }
          .item-service-con{
            padding: 0 8px 8px;
            font-size: 13px;
            color: #999999;
            line-height: 18px;
          }
          .item-price{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px;
            height: 40px;
            background: #F5F5F5;
            .van-image{
              width: 24px;
              height: 24px;
            }
            .van-field{
              font-size: 14px;
              color: #666666;
              line-height: 20px;
            }
            .item-line{
              margin: 0 3px 0 7px;
              width: 1px;
              height: 22px;
              background: #D627FA;
            }
            .item-dec{
              font-size: 13px;
              color: #C9C9C9;
              line-height: 18px;
            }
            .item-price-l{
              display: flex;
              align-items: center;
              flex: 1;
              .van-field{
                padding-left: 0;
                flex: 1;
                border: 0;
                background: #F5F5F5;
              }
            }
          }
        }
      }
    }
  }
  .finish-tips{
    margin: 10px 0;
    display: flex;
    justify-content: center;
    font-size: 12px;
    color: #999999;
    line-height: 17px;
    align-items: center;
    .van-image{
      width: 20px; height: 20px;
    }
  }
</style>
