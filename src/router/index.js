import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home/Home.vue";
import store from "@/store";
import User from "@/api/user";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/selectlanguage",
      name: "selectlanguage",
      component: () =>
        import(
          /* webpackChunkName: "my" */ "@/views/SelectLanguage/SelectLanguage.vue"
        )
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "my" */ "@/views/Login/Login.vue")
    },
    {
      path: "/registerphone",
      name: "registerphone",
      component: () =>
        import(
          /* webpackChunkName: "my" */ "@/views/RegisterPhone/RegisterPhone.vue"
        )
    },
    {
      path: "/registerpwd",
      name: "registerpwd",
      component: () =>
        import(
          /* webpackChunkName: "my" */ "@/views/RegisterPwd/RegisterPwd.vue"
        )
    },
    {
      path: "/forgetpwd",
      name: "forgetpwd",
      component: () =>
        import(/* webpackChunkName: "my" */ "@/views/ForgetPwd/ForgetPwd.vue")
    },
    {
      path: "/finishmsg",
      name: "finishmsg",
      component: () =>
        import(
          /* webpackChunkName: "record" */ "@/views/FinishMsg/FinishMsg.vue"
        )
    },
    {
      path: "/changecity",
      name: "changecity",
      component: () =>
        import(
          /* webpackChunkName: "record" */ "@/views/ChangeCity/ChangeCity.vue"
        )
    },
    {
      path: "/detail",
      name: "detail",
      component: () =>
        import(/* webpackChunkName: "record" */ "@/views/Detail/Detail.vue")
    },
    {
      path: "/Wallet",
      name: "wallet",
      component: () =>
        import(/* webpackChunkName: "record" */ "@/views/Wallet/Wallet.vue")
    },
    {
      path: "/SetSuccess",
      name: "SetSuccess",
      component: () =>
        import(/* webpackChunkName: "record" */ "@/views/SetSuccess/SetSuccess.vue")
    },
    // {
    //   path: "/my",
    //   name: "my",
    //   component: () => import(/* webpackChunkName: "my" */ "@/views/My/My.vue")
    // },
    // {
    //   path: "/RepairSearch",
    //   name: "RepairSearch",
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "record" */ "@/views/RepairSearch/RepairSearch.vue"
    //     )
    // },
    // {
    //   path: "/InsureSearch",
    //   name: "RepairSearch",
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "record" */ "@/views/InsureSearch/InsureSearch.vue"
    //     )
    // },
    // {
    //   path: "/RepairDetail",
    //   name: "RepairDetail",
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "record" */ "@/views/RepairDetail/RepairDetail.vue"
    //     )
    // },
    // {
    //   path: "/InsureDetail",
    //   name: "InsureDetail",
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "record" */ "@/views/InsureDetail/InsureDetail.vue"
    //     )
    // },
    // {
    //   path: "/OrderDetail",
    //   name: "OrderDetail",
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "record" */ "@/views/OrderDetail/OrderDetail.vue"
    //     )
    // },
    // {
    //   path: "/ChangePhone",
    //   name: "ChangePhone",
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "my" */ "@/views/ChangePhone/ChangePhone.vue"
    //     )
    // },
    // {
    //   path: "/Recharge",
    //   name: "Recharge",
    //   component: () =>
    //     import(/* webpackChunkName: "my" */ "@/views/Recharge/Recharge.vue")
    // },
    // {
    //   path: "/PayMent",
    //   name: "PayMent",
    //   component: () =>
    //     import(/* webpackChunkName: "my" */ "@/views/PayMent/PayMent.vue")
    // },
    // {
    //   path: "/Protocol",
    //   name: "Protocol",
    //   component: () =>
    //     import(/* webpackChunkName: "my" */ "@/views/Protocol/Protocol.vue")
    // },
    // {
    //   path: "/PaySuccess",
    //   name: "PaySuccess",
    //   component: () =>
    //     import(/* webpackChunkName: "my" */ "@/views/PaySuccess/PaySuccess.vue")
    // },
    // {
    //   path: "/redbag",
    //   name: "RedBag",
    //   component: () =>
    //     import(/* webpackChunkName: "my" */ "@/views/RedBag/RedBag.vue")
    // },
    // {
    //   path: "/sharecode",
    //   name: "ShareCode",
    //   component: () =>
    //     import(/* webpackChunkName: "my" */ "@/views/ShareCode/ShareCode.vue")
    // }
  ]
});
router.beforeEach(async (to, from, next) => {
  await store.dispatch("JUDGE_ROUTER_DIRECTION", to.path);
  next();
});

router.afterEach((to, from) => {});

export default router;
