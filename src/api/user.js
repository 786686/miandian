import http from "@/utils/request";
export default {
  // 用户注册（女）
  addWoman: data => {
    return http.post("/app/teaTeacher/add", data);
  },
  // 用户注册（男）
  addMan: data => {
    return http.post("/app/user/add", data);
  },
  // 用户登录
  login: data => {
    return http.post("/app/user/login", data);
  },
  // 更新支付密码/登录密码
  updatePassWord: data => {
    return http.post("/app/user/updatePassWord", data);
  },
  // 设置支付密码
  setPayPassWord: data => {
    return http.post("/app/user/setPayPassWord", data);
  },
  // 上传图片
  upload: data => {
    return http.post("/aliyun/oss/app/upload", data);
  },

  // 系统标签
  getLabelList: data => {
    return http.get("/app/label/list", data);
  },
  // 系统套餐
  getMealList: data => {
    return http.get("/app/setmeal/list", data);
  },
  // 充值/提现
  invest: data => {
    return http.post("/app/finance/invest", data);
  }
};
