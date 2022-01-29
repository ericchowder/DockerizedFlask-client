const Dotenv = require('dotenv-webpack');

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [
      new Dotenv()
    ]
  }
  // ,
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
}
