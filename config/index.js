/*
* @Author: 94078
* @Date:   2017-03-18 22:05:35
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-12 17:48:27
*/
/* eslint-disable */

var path = require('path');

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: {
            daily: 'http://cdndaily.elephtribe.com/crm/weChatRobot_branch/daily/dist/',
            gray: 'http://cdndaily.elephtribe.com/crm/weChatRobot_branch/gray/dist/',
            master: 'http://cdn.elephtribe.com/crm/weChatRobot/current/dist/'
        },
        productionSourceMap: true,
        // setting to `true`, make sure to: npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: false
    },
    dev: {
        env: require('./dev.env'),
        port: 8080,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
        },
        cssSourceMap: false
    }
};
