/*
* @Author: 94078
* @Date:   2017-03-18 22:05:35
* @Last Modified by:   huxiaofeng
* @Last Modified time: 2017-09-18 09:50:47
*/
/* eslint-disable */

var merge = require('webpack-merge');
var prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_ROOT: '"http://daily.elephtribe.com"',
});
