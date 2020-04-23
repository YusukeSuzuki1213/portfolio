var path = require("path");

module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "./",
  assetsDir: "",
  outputDir: "dist",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/")
      },
    },
  },
};
