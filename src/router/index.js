import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home/Home.vue";
import store from "@/store";

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
      path: "/phone",
      name: "phone",
      component: () =>
        import(/* webpackChunkName: "record" */ "@/views/Phone/Phone.vue")
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
        import(
          /* webpackChunkName: "record" */ "@/views/SetSuccess/SetSuccess.vue"
        )
    },
    {
      path: "/reward",
      name: "reward",
      component: () =>
        import(/* webpackChunkName: "record" */ "@/views/Reward/Reward.vue")
    },
    {
      path: "/InputPwd",
      name: "InputPwd",
      component: () =>
        import(/* webpackChunkName: "record" */ "@/views/InputPwd/InputPwd.vue")
    },
    {
      path: "/BalanceDetails",
      name: "BalanceDetails",
      component: () =>
        import(
          /* webpackChunkName: "record" */ "@/views/BalanceDetails/BalanceDetails.vue"
        )
    },
    {
      path: "/Withdrawal",
      name: "Withdrawal",
      component: () =>
        import(
          /* webpackChunkName: "record" */ "@/views/Withdrawal/Withdrawal.vue"
        )
    },
    {
      path: "/Recharge",
      name: "Recharge",
      component: () =>
        import(/* webpackChunkName: "my" */ "@/views/Recharge/Recharge.vue")
    },
    {
      path: "/WithdrawalPwd",
      name: "WithdrawalPwd",
      component: () =>
        import(
          /* webpackChunkName: "my" */ "@/views/WithdrawalPwd/WithdrawalPwd.vue"
        )
    },
    {
      path: "/WithdrawalSuccess",
      name: "WithdrawalSuccess",
      component: () =>
        import(
          /* webpackChunkName: "my" */ "@/views/WithdrawalSuccess/WithdrawalSuccess.vue"
        )
    },
    {
      path: "/my",
      name: "my",
      component: () => import(/* webpackChunkName: "my" */ "@/views/My/My.vue")
    },
    {
      path: "/settings",
      name: "settings",
      component: () =>
        import(/* webpackChunkName: "my" */ "@/views/Settings/Settings.vue")
    },
    {
      path: "/UpdatePwd",
      name: "UpdatePwd",
      component: () =>
        import(/* webpackChunkName: "my" */ "@/views/UpdatePwd/UpdatePwd.vue")
    },
    {
      path: "/UpdateNewPwd",
      name: "UpdateNewPwd",
      component: () =>
        import(
          /* webpackChunkName: "my" */ "@/views/UpdateNewPwd/UpdateNewPwd.vue"
        )
    },
    {
      path: "/UpdatePayPwd",
      name: "UpdatePayPwd",
      component: () =>
        import(
          /* webpackChunkName: "my" */ "@/views/UpdatePayPwd/UpdatePayPwd.vue"
        )
    },
    {
      path: "/UpdateNewPayPwd",
      name: "UpdateNewPayPwd",
      component: () =>
        import(
          /* webpackChunkName: "my" */ "@/views/UpdateNewPayPwd/UpdateNewPayPwd.vue"
        )
    },
    {
      path: "/About",
      name: "About",
      component: () =>
        import(/* webpackChunkName: "my" */ "@/views/About/About.vue")
    },
    {
      path: "/Order",
      name: "Order",
      component: () =>
        import(/* webpackChunkName: "my" */ "@/views/Order/Order.vue")
    },
    {
      path: "/Evaluate",
      name: "Evaluate",
      component: () =>
        import(/* webpackChunkName: "my" */ "@/views/Evaluate/Evaluate.vue")
    },
    {
      path: "/PersonMsg",
      name: "PersonMsg",
      component: () =>
        import(/* webpackChunkName: "my" */ "@/views/PersonMsg/PersonMsg.vue")
    },
    {
      path: "/EditMsg",
      name: "EditMsg",
      component: () =>
        import(/* webpackChunkName: "my" */ "@/views/EditMsg/EditMsg.vue")
    },
    {
      path: "/TimeManage",
      name: "TimeManage",
      component: () =>
        import(/* webpackChunkName: "my" */ "@/views/TimeManage/TimeManage.vue")
    }
  ]
});
router.beforeEach(async (to, from, next) => {
  console.log(from);
  await store.dispatch("JUDGE_ROUTER_DIRECTION", to.path);
  next();
});

router.afterEach(() => {});

export default router;
