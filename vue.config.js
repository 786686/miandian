// vue.config.js
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // 使用运行时编译器的 Vue 构建版本
  runtimeCompiler: true,
  // 开启生产环境SourceMap
  productionSourceMap: false,
  // 关闭ESLint
  lintOnSave: false,
  devServer: {
    open: true // 是否自动打开浏览器页面
    // https: false, // 使用https提供服务
    // proxy: "" // 设置代理，此处应该配置为开发服务器的后台地址
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"));
  },
  configureWebpack: () => {
    // 生产环境打包分析体积
    if (process.env.NODE_ENV === "production") {
      return {
        plugins: [new BundleAnalyzerPlugin()]
      };
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
                @import "@/assets/style/mixin.scss";
                @import "@/assets/style/_var.scss";
                `
      }
    }
  }
};
