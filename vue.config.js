const Dotenv = require('dotenv-webpack');

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [
      new Dotenv(),
      new webpack.DefinePlugin({           
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),      
        API_HOST: JSON.stringify(process.env.API_HOST)
      })
    ]
  }
  // ,
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
}
