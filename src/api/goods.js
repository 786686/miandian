import http from "@/utils/request";

export default {
  // 商品列表
  getGoodsList: data => {
    return http.post("/app/teaTeacher/list", data);
  },
  // 获取商品详情
  getDetail: data => {
    return http.get("/app/teaTeacher/teadetail", data);
  },
  // 评论列表
  getEvaluateList: data => {
    return http.get("/app/evaluate/list", data);
  },
  // 城市列表
  cityList: data => {
    return http.post("/app/content/list", data);
  },
  // 电话列表
  getPhoneList: data => {
    return http.get("/app/content/telList", data);
  },
  // 关于我们
  relevantList: data => {
    return http.get("/app/content/relevantList", data);
  }
};
