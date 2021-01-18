import http from "@/utils/request";

export default {
  /**
   * @description 获取记录列表
   * @param pageNum: Number 当前页
   * @param pageSize: Number 每页显示长度
   * @param status: String 订单状态
   * @param content: String 搜索内容
   * @param type: String 类型
   */
  orderList: data => {
    return http.get("/order/list", data);
  },
  /**
   * @description  出险记录-获取价格
   * @param vin: String 车架号
   */
  getCXPrices: data => {
    return http.post("/chuxianInfo/getCXPrices", data);
  },
  /**
   * @description 出险记录-获取品牌
   */
  getBandList: data => {
    return http.post("/chuxianInfo/brand", data);
  },
  /**
   * @description 出险记录-获取详情
   * @param orderNumber: String 订单编号
   */
  getCxlistInfo: data => {
    return http.post("/chuxianInfo/cxlistInfo", data);
  },
  /**
   * @description 出险记录-获取订单号
   * @param orderId: String 订单号
   * @param id: String 用户id
   */
  getcxOrderNumber: data => {
    return http.post("/chuxianInfo/getcxOrderNumber", data);
  },
  /**
   * @description 保修记录-获取订单
   * @param vin: String 车架号
   * @param id: String 用户ID
   * @param pay_type: Number 0钱包 1微信
   * @param price: Number 实付金额
   * @param carNumber: String 车牌号
   * @param engineNumber: String 发动机号
   * @param red_money: Number 红包金额
   */
  getChuXianOrder: data => {
    return http.post("/chuxianInfo/chuxianOrder", data);
  },
  /**
   * @description 保修记录-获取价格
   */
  getWBPrices: data => {
    return http.post("/weibaoInfo/getWBPrices", data);
  },
  /**
   * @description 保修记录-获取订单
   * @param vin: String 车架号
   * @param id: String 用户ID
   * @param pay_type: Number 0钱包 1微信
   * @param price: Number 实付金额
   * @param carNumber: String 车牌号
   * @param engineNumber: String 发动机号
   * @param red_money: Number 红包金额
   */
  getWeiBaoOrder: data => {
    return http.post("/weibaoInfo/list", data);
  },
  /**
   * @description 保修记录-获取详情
   * @param orderNumber: String 订单编号
   */
  getWblistInfo: data => {
    return http.post("/weibaoInfo/wblistInfo", data);
  },
  /**
   * @description 维保记录-获取订单号
   * @param orderId: String 订单号
   * @param id: String 用户id
   */
  getwbOrderNumber: data => {
    return http.post("/weibaoInfo/getwbOrderNumber", data);
  },
  // 获取维保查询订单编号接口
  getwbcxOrderNumber: data => {
    return http.post("/weibaoInfo/getcxOrderNumber", data);
  }
};
