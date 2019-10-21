const path = require("path");
const resolve = require("resolve");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: [
          //排除的不转换node_modules下面的.js文件
          path.resolve(__dirname, "node_modules")
        ]
      },
      {
        // 正则匹配所有以.css结尾的文件
        test: /\.css$/,
        // 使用css-loader和style-loader依次对css文件进行处理
        // 按照数组中从后往前的顺序
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    port: 8080,
    inline: true
  },
  plugins: [new OpenBrowserPlugin({ url: "http://localhost:8080" })]
};
