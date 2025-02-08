const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Main entry file
  output: {
    path: path.resolve(__dirname, "dist"), // Output folder
    filename: "bundle.js", // Compiled bundle
    clean: true, // Cleans the output folder before each build
  },
  mode: "development", // Set to 'production' for production builds
  devtool: "inline-source-map", // Helps with debugging
  devServer: {
    static: path.resolve(__dirname, "dist"),
    compress: true,
    hot: true,
    port: 3000,
    historyApiFallback: true, // Allows using React Router
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpile JS and JSX files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/, // Load CSS files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Load images
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Allow importing files without extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // HTML template
      filename: "index.html",
    }),
  ],
};
