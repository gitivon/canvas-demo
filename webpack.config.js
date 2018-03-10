const { CheckerPlugin } = require("awesome-typescript-loader");

module.exports = {
  mode: 'development',
  entry: {
    main: "./src/main.ts"
  },
  output: {
    path: '/dist'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: '/\.tsx?$/',
        use: {
          loader: 'awesome-typescript-loader',
        }
      }
    ]
  },
  plugins: [
    new CheckerPlugin()
  ],
  devServer: {
    host: 'localhost',
    port: 8088,
    contentBase: './dist/'
  }
}