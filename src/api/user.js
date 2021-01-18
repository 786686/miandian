console.log(8888888888888);
import http from "@/utils/request";
export default {
  /**
   * @description 获取轮播图
   */
  listBanner: data => {
    return http.get("/banner/list", data);
  },
  /**
   * @description 获取验证码
   * @param mobile: Number 手机号
   */
  captcha: data => {
    return http.post("/outer/captcha", data);
  },
  /**
   * @description 获取验证码
   * @param mobile: Number 手机号
   * @param content: content 验证码
   */
  bindPhone: data => {
    return http.post("/outer/mobile", data);
  },
  /**
   * @description 获取重定向地址
   * @param returnUrl: String url
   */
  wxRedirect: data => {
    return http.post("/wechat/redirect", data);
  },
  /**
   * @description 获取用户信息
   * @param id: Number 用户id
   * @param accessToken: String 用户token
   */
  getUserInfo: data => {
    return http.get("/member/list", data);
  },

  /**
   * @description 充值
   * @param id: Number 用户id
   * @param add_money: String  充值金额
   * @param send_money: String  赠送金额
   * @param real_money: String  实付金额
   */
  rechargeMoney: data => {
    return http.post("/addmoney/addmoney", data);
  },
  /**
   * @description 获取微信签名数据
   */
  getWxSign: data => {
    return http.post("/wechat/jsapi", data);
  },
  /**
   * @description 获取微信签名数据
   */
  shareTimeline: data => {
    return http.post("/shareMoney/addRedMoney", data);
  },
  /**
   * @description 获取充值金额
   */
  getRechargeList: data => {
    return http.get("/acount/list", data);
  },
  /**
   * @description 获取服务协议
   */
  getProtocol: data => {
    return http.get("/sla/list", data);
  },
  /**
   * @description 领取红包
   */
  getRedBag: data => {
    return http.post("/shareMoney/redMoney", data);
  },
  /**
   * @description 领取红包
   */
  getRedBagId: data => {
    return http.post("/shareMoney/getRedId", data);
  }
};
