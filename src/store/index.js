import Vue from "vue";
import Vuex from "vuex";
import User from "@/api/user";
import router from "@/router";
import { Toast } from "vant";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: localStorage.getItem("userId") || "", // 用户id
    userInfo: {}, // 用户信息
    bannerList: [], // 轮播图
    silderDirection: "slide-left", // 页面切换方向
    historyRoutes: [], // 访问过的路由path数组
    userType: ""
  },
  mutations: {
    SET_USER_ID: (state, id) => {
      state.userId = id;
      localStorage.setItem("userId", id);
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
    },
    SET_USER_TYPE: (state, type) => {
      state.userType = type;
      localStorage.setItem("type", type);
    },
    SET_BANNER_LIST: (state, list) => {
      state.bannerList = list;
    },
    SET_SILDER_DIRECTION: (state, flag) => {
      state.silderDirection = flag;
    },
    SET_HISTORY_ROUTES: (state, historyRoutes) => {
      state.historyRoutes = historyRoutes;
    }
  },
  actions: {
    // 跳转微信
    GET_WX_REDIRECT: async (code, data) => {
      if (code === 200) {
        window.location.href = data.url;
        localStorage.setItem("isLogin", true);
      }
    },
    //  获取用户信息
    GET_USER_INFO: async ({ dispatch, commit, state }) => {
      if (!state.userId) {
        Toast(`请先登录`);
        dispatch("GET_WX_REDIRECT");
        return;
      }
      const id = state.userId;
      const { data, code } = await User.getUserInfo({ id });
      if (code === 200) {
        commit(`SET_USER_INFO`, data);
        if (!data.mobile) {
          router.push("/BindPhone");
        }
      }
    },
    JUDGE_ROUTER_DIRECTION: ({ state, commit }, path) => {
      return new Promise(resolve => {
        if (state.historyRoutes.findIndex(item => item === path) >= 0) {
          state.silderDirection = "slide-right";
          let routes = state.historyRoutes.filter(item => item != path);
          routes.push(path);
          commit("SET_HISTORY_ROUTES", routes);
        } else {
          state.silderDirection = "slide-left";
          const routes = [...state.historyRoutes, path];
          commit("SET_HISTORY_ROUTES", routes);
        }
        resolve();
      });
    }
  }
});
