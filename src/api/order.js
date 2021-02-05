import http from "@/utils/request";

export default {
  // 打赏-下发订单
  addOrder: data => {
    return http.post("/app/order/add", data);
  },
  // 支付
  pay: data => {
    return http.post("/app/finance/pay", data);
  },
  // 订单状态修改（取消订单，确认订单，发起确认，删除订单）
  update: data => {
    return http.post("/app/order/update", data);
  },
  // 余额明细
  financeDetail: data => {
    return http.post("/app/finance/detail", data);
  },
  // 充值/提现
  invest: data => {
    return http.post("/app/finance/invest", data);
  },
  // 订单评价
  evaluate: data => {
    return http.post("/app/order/evaluate", data);
  },
  // 订单删除
  delete: data => {
    return http.post("/app/order/delete", data);
  },
  // 订单列表
  list: data => {
    return http.post("/app/order/list", data);
  },
  // 余额明细
  financeDetail: data => {
    return http.post("/app/finance/detail", data);
  },
};
