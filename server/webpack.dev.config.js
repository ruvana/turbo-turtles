const merge = require('webpack-merge')

const webpackBaseConfig = require('./webpack.common.config')

module.exports = merge(webpackBaseConfig, { devtool: 'source-map' }, { mode: 'development'})
