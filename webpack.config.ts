import path from "path";
import { Configuration, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpackDevServer from "webpack-dev-server";
import TerserPlugin from "terser-webpack-plugin";
import { GenerateSW } from "workbox-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

const IMAGE_SIZE_LIMIT = 10 * 1024; // 10kb
const isDevelopment = process.env.NODE_ENV === "development";

const config = (): Configuration => {
  return {
    mode: "production",
    entry: path.resolve(__dirname, "./src/index.tsx"),
    output: {
      path: path.resolve(__dirname, "./dist/"),
      filename: "[name].js",
      chunkFilename: "static/js/[name].[ext]",
      assetModuleFilename: "static/media/[name].[ext]",
      publicPath: "/",
      clean: true,
    },
    devServer: {
      compress: true,
      port: 3000,
      historyApiFallback: true,
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
          include: path.resolve(__dirname, "src"),
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
      ],
    },
    devtool: "inline-source-map",
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      // absolute import paths
      alias: {
        src: path.resolve(__dirname, "./src/"),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./public/index.html"),
        cache: false,
        inject: true,
      }),
      // isDevelopment
      //   ? null
      //   : new GenerateSW({
      //       clientsClaim: true,
      //       skipWaiting: true,
      //       maximumFileSizeToCacheInBytes: 12 * 1024 * 1024,
      //     }),
      new DefinePlugin({
        "process.env.PUBLIC_URL": JSON.stringify(
          "https://bejewelled-starlight-7d6def.netlify.app/"
        ),
      }),
      new MiniCssExtractPlugin({
        filename: "static/css/[name].[contenthash:8].css",
        chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "public/manifest.json",
            to: "manifest.json",
          },
          {
            from: "public/robots.txt",
            to: "robots.txt",
          },
          {
            from: "public/favicon.ico",
            to: "favicon.ico",
          },
          {
            from: "public/icon-192x192.png",
            to: "icon-192x192.png",
          },
          {
            from: "public/icon-512x512.png",
            to: "icon-512x512.png",
          },
          {
            from: "public/icon-256x256.png",
            to: "icon-256x256.png",
          },
          {
            from: "public/icon-384x384.png",
            to: "icon-384x384.png",
          },
        ],
      }),
    ],
    performance: {
      hints: false,
      maxAssetSize: 100000 * 24,
      maxEntrypointSize: 100000 * 24,
    },
    optimization: {
      minimize: true,
      usedExports: true,

      splitChunks: {
        chunks: "all",
        maxAsyncRequests: 10,
        maxSize: 100000,
        // maxAsyncSize: 100000,
        maxInitialRequests: 10,
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
          vendor: {
            name: "vendors",
            test: /\/node_modules\/(react-router-dom|react|react-dom)/,
            priority: 10,
            chunks: "all",
            reuseExistingChunk: false,
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin({
          // include: /\/node_modules\/(react-router-dom|react|react-dom)/,
          //include react icons
          include:
            /\/node_modules\/(react-router-dom|react|react-dom|react-icons)/,
          minify: TerserPlugin.esbuildMinify,
          test: /\.js(\?.*)?$/i,
          terserOptions: {
            format: {
              comments: false,
            },
            ecma: 5,
            keep_classnames: false,
            enclose: true,
            module: true,
            sourceMap: true,
            compress: {
              drop_console: true,
              loops: true,
              reduce_funcs: true,
              unused: true,
              dead_code: true,
              drop_debugger: true,
              conditionals: true,
              evaluate: true,
              sequences: true,
              arguments: true,
              arrows: true,
              booleans: true,
              defaults: true,
              directives: true,
              join_vars: true,
              if_return: true,
              unsafe_arrows: true,
            },
          },
          extractComments: false,
          parallel: true,
        }),
      ],
    },
  };
};

export default config;
