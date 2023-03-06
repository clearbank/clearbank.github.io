const babelOptions = {
  presets: ['babel-preset-gatsby', '@babel/preset-typescript'],
  plugins: ['@babel/plugin-proposal-export-default-from']
}
module.exports = require('babel-jest').default.createTransformer(babelOptions)
