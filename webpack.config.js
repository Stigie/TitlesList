module.exports = {
    entry: [
      './src/index.js'
    ],
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
              {
                loader: 'file-loader'
              }
            ]
          },
          {
            test: /\.module.css$/,
            use: [
              {
                loader: "style-loader"
              },
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  importLoaders: 1,
                  localIdentName: "[name]_[local]_[hash:base64]",
                  sourceMap: true,
                  minimize: true
                }
              }
            ]
          }
        ]
      },

    //   resolve: {
    //     extensions: ['*', '.js', '.jsx']
    //   },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist'
    }

  };