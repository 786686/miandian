<template>
  <div>
    <div class="about">
      <div class="logo">

      </div>
      <div class="acticle-content">      本软件尊重并保护所有使用服务用户的个人隐私权。为了给您提供更准确、更有个性化的服务，本软件会按照本隐私权政策的规定使用和披露您的个人信息。但本软件将以高度的勤勉、审慎义务对待这些信息。除本隐私权政策另有规定外，在未征得您事先许可的情况下，本软件不会将这些信息对外披露或向第三方提供。本软件会不时更新本隐私权政策。您在同意本软件服务使用协议之时，即视为您已经同意本隐私权政策全部内容。本隐私权政策属于本软件服务使用协议不可分割的一部分。</div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "about",
  data() {
    return {
      
    };
  },
  computed: {},
  created() {},
  methods: {
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
  .about .logo{
    margin: 30px auto;
    width: 100px;
    height: 100px;
    background: #FAFAFA;
    border-radius: 12px;
    border: 1px solid #E6E6E6;
  }
  .acticle-content{
    padding: 0 16px;
      text-indent: 2em;
  font-size: 14px;
  color: #666666;
  line-height: 24px;
  }
</style>
