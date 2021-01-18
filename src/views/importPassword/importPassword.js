//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    pwdVal: '',  //输入的密码
    payFocus: true, //文本框焦点
    payPage: false,
    returnCode:""
  },
  onReady: function(){
    
  },
  onLoad: function (options) {
    let that = this;
    setTimeout(function(){
      that.getFocus();
    },200)
    console.log(that.data.payPage);
    console.log(typeof (options.payPage) != "undefined");
    if (typeof (options.payPage) != "undefined" && options.payPage == true) {
      console.log(121212);
      this.setData({
        payPage: true,
        deviceId: options.deviceId
      })
    }
    if (typeof (options.returnCode) != "undefined") {
      this.setData({
        returnCode: options.returnCode
      })
    }    
  },
  /**
   * 隐藏支付密码输入层
   */
  hidePayLayer: function () {
    let that = this;
    var val = this.data.pwdVal;
    //输入完六位密码后需要执行的代码
    this.setData({ showPayPwdInput: false, payFocus: false, pwdVal: '' }, function () {
      
      wx.request({
        url: app.globalData.websize + 'api/user/setPaymentPwd.json',
        data: {
          sessionId: wx.getStorageSync('sessionId'),
          password: val,
          returnCode: that.data.returnCode
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success: function (res) {
          app.callbackFun(res.data);
          if (res.data.status == 2000000) {
            console.log(that.data.payPage);
            if (that.data.payPage){
              wx.navigateTo({
                url: '../chooseMeal/chooseMeal?deviceId=' + that.data.deviceId,
              });
              return;
            }
            wx.switchTab({
              url: '../personCenter/personCenter',
            })
          } else {
            wx.showToast({
              title: res.data.message,
              icon: 'none',
            })
          }
        }
      });
    });
  },
  /**
   * 获取焦点
   */
  getFocus: function () {
    this.setData({ payFocus: true });
  },
  /**
   * 输入密码监听
   */
  inputPwd: function (e) {
    this.setData({ pwdVal: e.detail.value });

    if (e.detail.value.length >= 6) {
      this.hidePayLayer();
    }
  }
})