import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const IMAGE_SIZE_LIMIT = 10_000;

const config = (): Configuration => {
  return {
    mode: "production",
    entry: path.resolve(__dirname, "./src/index.tsx"),
    output: {
      path: path.resolve(__dirname, "./dist/"),
      filename: "[name].js",
      chunkFilename: "static/js/[name].[ext]",
      assetModuleFilename: "static/media/[name].[ext]",
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/i,
          exclude: [/node_modules/, /\.(spec|test).(ts|js)x?$/i],
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            compact: true,
          },
        },
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          type: "asset",
          parser: {
            dataUrlCondition: {
              maxSize: IMAGE_SIZE_LIMIT,
            },
          },
        },
        // import svg as component
        {
          test: /\.svg$/,
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                prettier: false,
                svgo: false,
                svgoConfig: {
                  plugins: [{ removeViewBox: false }],
                },
                titleProp: true,
                ref: true,
              },
            },
            {
              loader: "file-loader",
              options: {
                name: "static/media/[name].[ext]",
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      // absolute import paths
      alias: {
        src: path.resolve(__dirname, "./src/"),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html",
        inject: true,
      }),
      new MiniCssExtractPlugin({
        filename: "static/css/[name].[contenthash:8].css",
        chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
      }),
    ],
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: "async",
        maxAsyncRequests: 10,
        maxInitialRequests: 10,
        cacheGroups: {
          vendor: {
            name: "vendors",
            test: /\/node_modules\/(react-router-dom|react|react-dom)/,
            priority: 10,
            chunks: "all",
            reuseExistingChunk: false,
          },
        },
      },
      minimizer: [new CssMinimizerPlugin()],
    },
  };
};

export default config;
