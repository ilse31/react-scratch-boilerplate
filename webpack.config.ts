import { Configuration } from "webpack";
import path from "path";

const config = (): Configuration => {
  return {
    mode: "production",
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
  };
};

export default config;
