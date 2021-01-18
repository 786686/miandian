import wx from "weixin-js-sdk";
import User from "@/api/user";
// const jsApiList = ["chooseWXPay", "scanQRCode"];

export function wxPayFn(data) {
  wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: data.appId, // 必填，公众号的唯一标识
    timestamp: data.timestamp, // 必填，生成签名的时间戳
    nonceStr: data.nonce, // 必填，生成签名的随机串
    signature: data.signature, // 必填，签名
    jsApiList: ["scanQRCode"] // 必填，需要使用的JS接口列表
  });
  wx.ready(function() {
    wx.scanQRCode({
      needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
      success: function(res) {
        console.log(res);
        // var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
      }
    });
  });
  wx.error(function(res) {
    console.log(res);
  });
}

export function wxPageShare(signData) {
  // console.log(signData)
  // console.log("===========================")
  // console.log("wxPageShare")
  // // let that = this;
  // wx.config({
  //   debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  //   appId: signData.appId, // 必填，公众号的唯一标识
  //   timestamp: signData.timestamp, // 必填，生成签名的时间戳
  //   nonceStr: signData.nonce, // 必填，生成签名的随机串
  //   signature: signData.signature, // 必填，签名
  //   jsApiList: [
  //     "onMenuShareTimeline", //分享给好友
  //     "onMenuShareAppMessage", //分享到朋友圈
  //     "showMenuItems"
  //     // "hideMenuItems"
  //   ] // 必填，需要使用的JS接口列表
  // });
  // wx.ready(function() {
  //   wx.checkJsApi({
  //     jsApiList: ["showMenuItems"],
  //     success: function(res) {
  //       console.log(res);
  //       wx.showMenuItems({
  //         menuList: [
  //           "menuItem:share:appMessage", //发送给朋友
  //           "menuItem:share:timeline" //分享到朋友圈
  //         ]
  //       });
  //     }
  //   });
  //   let shareObj = {
  //     title: "维保记录查询助手", // 分享标题
  //     desc: "快来查询您的爱车维保出险记录", //分享描述
  //     link: window.location.href, // 分享链接
  //     imgUrl:
  //       "http://wx.qlogo.cn/mmhead/Q3auHgzwzM6NFDmr6ZF6dgr7DvhVWemYtgwkoJTCvPsaPGuiavibEE6g/0", // 分享图标
  //     success: function() {}
  //   };
  //   //分享到朋友圈
  //   wx.onMenuShareTimeline(shareObj);
  //   //分享给朋友
  //   wx.onMenuShareAppMessage(shareObj);
  //   //分享到朋友圈
  //   wx.updateTimelineShareData(shareObj);
  //   //分享给朋友
  //   wx.updateAppMessageShareData(shareObj);
  // });
  // wx.error(function(res) {
  //   console.log(res);
  // });
}

export function wxShareFn(signData, id) {
  // let that = this;
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: signData.appId, // 必填，公众号的唯一标识
    timestamp: signData.timestamp, // 必填，生成签名的时间戳
    nonceStr: signData.nonce, // 必填，生成签名的随机串
    signature: signData.signature, // 必填，签名
    jsApiList: [
      "onMenuShareTimeline", //分享给好友
      "onMenuShareAppMessage", //分享到朋友圈
      "showMenuItems"
      // "hideMenuItems"
    ] // 必填，需要使用的JS接口列表
  });
  wx.ready(function() {
    wx.checkJsApi({
      jsApiList: ["showMenuItems"],
      success: function(res) {
        console.log(res);
        wx.showMenuItems({
          menuList: [
            "menuItem:share:appMessage", //发送给朋友
            "menuItem:share:timeline" //分享到朋友圈
          ]
        });
      }
    });
    setTimeout(function() {
      let bagId = "";
      shareAwait();
      async function shareAwait() {
        const { data } = await User.getRedBagId({ id });
        bagId = data;
        let shareObj = {
          title: "领红包查询维保出险记录", // 分享标题
          desc: "快来领取吧！", //分享描述
          link: "http://weibao.chedaowangluo.com/sharecode?id=" + bagId, // 分享链接
          imgUrl:
            "http://wx.qlogo.cn/mmhead/Q3auHgzwzM6NFDmr6ZF6dgr7DvhVWemYtgwkoJTCvPsaPGuiavibEE6g/0", // 分享图标
          success: function() {
            User.shareTimeline({ id, rid: bagId }); //可能就不需要获取红包id了，所以

            // 用户确认分享后执行的回调函数
            // const { data } = User.shareTimeline({ id });
            // shareAwait();
            // async function shareAwait(){
            //   const { data } = await User.shareTimeline({ id });
            //   console.log(data)
            // }
            // that.$router.push({
            //   path: "/sharecode",
            //   query: { id: bagId }
            // });
          }
        };
        console.log(shareObj.link);
        //分享到朋友圈
        wx.onMenuShareTimeline(shareObj);

        //分享给朋友
        wx.onMenuShareAppMessage(shareObj);

        //分享到朋友圈
        wx.updateTimelineShareData(shareObj);

        //分享给朋友
        wx.updateAppMessageShareData(shareObj);
      }
    }, 200);
  });
  wx.error(function(res) {
    console.log(res);
  });
}
