webpackJsonp([3],{165:function(t,e,o){"use strict";function a(t){o(184)}Object.defineProperty(e,"__esModule",{value:!0});var n=o(186),i=o(192),r=o(4),s=a,c=r(n.a,i.a,s,"data-v-d8398cca",null);e.default=c.exports},184:function(t,e,o){var a=o(185);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(163)("1eeccdbc",a,!0)},185:function(t,e,o){e=t.exports=o(162)(!0),e.push([t.i,"h4[data-v-d8398cca]{margin-top:0;padding-top:22.4px;padding-top:1.4rem;margin-left:32px;margin-left:2rem;font-weight:400;color:#858787;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0}.robot-list[data-v-d8398cca]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;overflow-y:scroll;padding-top:32px;padding-top:2rem;color:#585b60}.robot-list .card[data-v-d8398cca]{height:175px;margin:0 auto;width:30%;min-width:300px;float:left;margin-left:2.5%;margin-bottom:16px;margin-bottom:1rem}.card-body>img[data-v-d8398cca]{width:80px;height:80px;border-radius:50%;float:left;margin-right:32px;margin-right:2rem}.card-body>p[data-v-d8398cca]{margin-top:9.6px;margin-top:.6rem}.card-body>button[data-v-d8398cca]{float:right}.login-robot[data-v-d8398cca]{text-align:center;font-size:25.6px;font-size:1.6rem;position:relative}.login-robot span[data-v-d8398cca]{position:absolute;top:50%;left:50%;margin-left:-80px;margin-left:-5rem;margin-top:-25.6px;margin-top:-1.6rem;color:#585b60}.help[data-v-d8398cca]{color:#585b60;font-size:12.8px;font-size:.8rem}","",{version:3,sources:["/Users/hxf/www/weRobot/src/page/RobotManage.vue"],names:[],mappings:"AAAA,oBAAoB,aAAa,mBAAmB,mBAAmB,iBAAiB,iBAAiB,gBAAgB,cAAc,mBAAmB,oBAAoB,WAAW,CAAC,6BAA6B,mBAAmB,oBAAoB,YAAY,kBAAkB,iBAAiB,iBAAiB,aAAa,CAAC,mCAAmC,aAAa,cAAc,UAAU,gBAAgB,WAAW,iBAAiB,mBAAmB,kBAAkB,CAAC,gCAAgC,WAAW,YAAY,kBAAkB,WAAW,kBAAkB,iBAAiB,CAAC,8BAA8B,iBAAiB,gBAAgB,CAAC,mCAAmC,WAAW,CAAC,8BAA8B,kBAAkB,iBAAiB,iBAAiB,iBAAiB,CAAC,mCAAmC,kBAAkB,QAAQ,SAAS,kBAAkB,kBAAkB,mBAAmB,mBAAmB,aAAa,CAAC,uBAAuB,cAAc,iBAAiB,eAAe,CAAC",file:"RobotManage.vue",sourcesContent:["h4[data-v-d8398cca]{margin-top:0;padding-top:22.4px;padding-top:1.4rem;margin-left:32px;margin-left:2rem;font-weight:400;color:#858787;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0}.robot-list[data-v-d8398cca]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;overflow-y:scroll;padding-top:32px;padding-top:2rem;color:#585b60}.robot-list .card[data-v-d8398cca]{height:175px;margin:0 auto;width:30%;min-width:300px;float:left;margin-left:2.5%;margin-bottom:16px;margin-bottom:1rem}.card-body>img[data-v-d8398cca]{width:80px;height:80px;border-radius:50%;float:left;margin-right:32px;margin-right:2rem}.card-body>p[data-v-d8398cca]{margin-top:9.6px;margin-top:.6rem}.card-body>button[data-v-d8398cca]{float:right}.login-robot[data-v-d8398cca]{text-align:center;font-size:25.6px;font-size:1.6rem;position:relative}.login-robot span[data-v-d8398cca]{position:absolute;top:50%;left:50%;margin-left:-80px;margin-left:-5rem;margin-top:-25.6px;margin-top:-1.6rem;color:#585b60}.help[data-v-d8398cca]{color:#585b60;font-size:12.8px;font-size:.8rem}"],sourceRoot:""}])},186:function(t,e,o){"use strict";var a=o(12),n=o.n(a),i=o(13),r=o.n(i),s=o(5),c=o.n(s),d=o(9),l=o(187),u=o(62),p=o(22),m=o(63);e.a={name:"RobotManage",data:function(){return{focusRobotName:"",focusRobotId:"",loginRobotModal:!1,logoutRobotModal:!1,deleteRobotModal:!1,url:p.a,interval:""}},methods:c()({openLoginRobotModal:function(){var t=this;return r()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.loginRobotModal=!0;case 1:case"end":return e.stop()}},e,t)}))()},closeLoginRobotModal:function(){this.loginRobotModal=!1},openLogoutRobotModal:function(){this.logoutRobotModal=!0},closeLogoutRobotModal:function(){this.logoutRobotModal=!1},logoutRobot:function(){var t=this;return r()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading({text:"正在断线"}),e.prev=1,e.next=4,m.a.logout({robotId:t.focusRobotId});case 4:return e.next=6,t.getRobotList();case 6:t.loaded(100),t.closeLogoutRobotModal(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),t.loading({text:e.t0.message}),t.loaded(1500);case 14:case"end":return e.stop()}},e,t,[[1,10]])}))()},openDeleteRobotModal:function(t){var e=t.nickname,o=t.id;this.focusRobotName=e,this.focusRobotId=o,this.deleteRobotModal=!0},closeDeleteRobotModal:function(){this.deleteRobotModal=!1},deleteRobot:function(){var t=this;return r()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading({text:"正在删除"}),e.prev=1,e.next=4,m.a.delRobot({robotId:t.focusRobotId});case 4:return e.next=6,t.getRobotList();case 6:t.loaded(100),t.focusRobotName="",t.focusRobotId="",t.closeDeleteRobotModal(),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),t.loading({text:e.t0.message}),t.loaded(1500);case 16:case"end":return e.stop()}},e,t,[[1,12]])}))()},toogleRobotStatu:function(t){var e=t.status,o=t.nickname,a=t.id,n=t.uin;switch(this.focusRobotName=o,this.focusRobotId=a,e){case 0:this.openLoginRobotModal(n);break;case 1:this.openLogoutRobotModal()}}},Object(d.b)("Robot",["getRobotList"]),Object(d.b)(["loaded"]),Object(d.c)(["loading"])),beforeRouteEnter:function(t,e,o){o(function(t){t.interval=setInterval(function(){t.getRobotList()},6e4)})},beforeRouteLeave:function(t,e,o){clearInterval(this.interval),o()},watch:{robotList:function(){0===this.robotList.length&&this.openLoginRobotModal()}},components:{LoginRobotModal:l.a,MessageBox:u.a},computed:c()({},Object(d.d)("User",["userToken"]),Object(d.d)("Robot",{robotList:"list"}))}},187:function(t,e,o){"use strict";function a(t){o(188)}var n=o(190),i=o(191),r=o(4),s=a,c=r(n.a,i.a,s,"data-v-d7d2c942",null);e.a=c.exports},188:function(t,e,o){var a=o(189);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(163)("73e8fab1",a,!0)},189:function(t,e,o){e=t.exports=o(162)(!0),e.push([t.i,".qrcode[data-v-d7d2c942]{width:40%;margin:10px auto;border:1px solid #e7e8eb}.qrcode img[data-v-d7d2c942]{width:100%;height:auto}.body[data-v-d7d2c942]{padding-top:32px;padding-top:2rem;padding-bottom:64px;padding-bottom:4rem}.body>span[data-v-d7d2c942]{width:100%;text-align:center;display:block}","",{version:3,sources:["/Users/hxf/www/weRobot/src/components/LoginRobotModal.vue"],names:[],mappings:"AAAA,yBAAyB,UAAU,iBAAiB,wBAAwB,CAAC,6BAA6B,WAAW,WAAW,CAAC,uBAAuB,iBAAiB,iBAAiB,oBAAoB,mBAAmB,CAAC,4BAA4B,WAAW,kBAAkB,aAAa,CAAC",file:"LoginRobotModal.vue",sourcesContent:[".qrcode[data-v-d7d2c942]{width:40%;margin:10px auto;border:1px solid #e7e8eb}.qrcode img[data-v-d7d2c942]{width:100%;height:auto}.body[data-v-d7d2c942]{padding-top:32px;padding-top:2rem;padding-bottom:64px;padding-bottom:4rem}.body>span[data-v-d7d2c942]{width:100%;text-align:center;display:block}"],sourceRoot:""}])},190:function(t,e,o){"use strict";var a=o(12),n=o.n(a),i=o(13),r=o.n(i),s=o(5),c=o.n(s),d=o(9),l=o(37),u=o(63);e.a={name:"LoginRobotModal",props:["name","active"],data:function(){return{qrCodeUrl:"",refreshInterval:"",time:"",show:!1,timestamp:"",stopAllTime:""}},methods:c()({open:function(){var t=this;return r()(n.a.mark(function e(){var o,a,i;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.show=t.active,e.prev=1,t.timestamp=(new Date).getTime(),e.next=5,u.a.getLoginQrcode({userId:t.userToken});case 5:return o=e.sent,a=o.uuid,i=o.qrcode,t.setUUId(a),t.qrCodeUrl=i,e.next=12,t.isScan();case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),t.loading({text:e.t0.message}),t.loaded(1500);case 18:case"end":return e.stop()}},e,t,[[1,14]])}))()},isScan:function(){var t=this;return r()(n.a.mark(function e(){var o;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!((new Date).getTime()-t.timestamp>3e5)){e.next=4;break}return t.loading({text:"超时，请刷新"}),t.loaded(1500),e.abrupt("return",!1);case 4:return o=t.timestamp,e.prev=5,e.next=8,u.a.isScan({userId:t.userToken,uuid:t.uuid});case 8:return e.next=10,t.isLogin();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),"等待扫码"===e.t0?t.show&&o===t.timestamp&&(t.time=setTimeout(r()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.isScan();case 2:case"end":return e.stop()}},e,t)})),1e3)):(t.init(),t.loading({text:e.t0.message}),t.loaded(1500));case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}},e,t,[[5,12]])}))()},isLogin:function(){var t=this;return r()(n.a.mark(function e(){var o,a,i,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!((new Date).getTime()-t.timestamp>3e5)){e.next=4;break}return t.loading({text:"超时，请刷新"}),t.loaded(1500),e.abrupt("return",!1);case 4:return o=t.timestamp,e.prev=5,e.next=8,u.a.isLogin({userId:t.userToken,uuid:t.uuid});case 8:return a=e.sent,i=a.uin,s=a.id,clearInterval(t.refreshInterval),e.next=14,t.initRobot({uin:i,robotId:s});case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),"等待确认"===e.t0?t.show&&o===t.timestamp&&(t.time=setTimeout(r()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.isLogin();case 2:case"end":return e.stop()}},e,t)})),1e3)):(t.init(),t.loading({text:e.t0.message}),t.loaded(1500));case 19:return e.abrupt("return",!0);case 20:case"end":return e.stop()}},e,t,[[5,16]])}))()},initRobot:function(t){var e=this;return r()(n.a.mark(function o(){return n.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,e.close(),o.next=4,u.a.init(t);case 4:e.$emit("successLogin"),o.next=11;break;case 7:o.prev=7,o.t0=o.catch(0),e.loading({text:o.t0.message}),e.loaded(1500);case 11:case"end":return o.stop()}},o,e,[[0,7]])}))()},close:function(){this.init(),this.show=!1,this.closeBackDrop(),this.$emit("close")},init:function(){clearTimeout(this.time),clearInterval(this.refreshInterval),this.time="",this.refreshInterval=""}},Object(d.c)(["closeBackDrop","openBackDrop","loading"]),Object(d.c)("User",["setUUId"]),Object(d.b)(["loaded"])),components:{Modal:l.a},watch:{active:function(t){t&&(this.openBackDrop(),this.open())}},computed:c()({},Object(d.d)("User",["userToken","uuid"]))}},191:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("modal",{attrs:{active:t.show},on:{toogle:t.close}},[o("div",{staticClass:"modal-header"},[o("h5",[t._v(t._s(t.name?"机器人连接":"机器人创建"))]),t._v(" "),o("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.close}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),o("div",{staticClass:"body"},[o("div",{staticClass:"qrcode"},[o("img",{attrs:{src:t.qrCodeUrl,alt:"登陆二维码"}})]),t._v(" "),o("span",[t._v(t._s(t.name?"用机器人"+t.name+"的微信账号扫码重新登录":"微信扫码并确认登陆，完成机器人创建"))])])])},n=[],i={render:a,staticRenderFns:n};e.a=i},192:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"robot-manage"}},[o("h4",[t._v("机器人管理")]),t._v(" "),o("div",{staticClass:"robot-list"},[t._l(t.robotList,function(e){return o("div",{key:e.id,staticClass:"card"},[o("div",{staticClass:"card-body"},[o("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(o){t.openDeleteRobotModal(e)}}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),o("img",{attrs:{src:e.headImgUrl,alt:"头像"}}),t._v(" "),o("p",{staticClass:"card-text"},[t._v("机器人："+t._s(e.nickname))]),t._v(" "),o("p",{staticClass:"card-text"},[t._v("状态："+t._s(e.status?"在线":"离线"))]),t._v(" "),o("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(o){t.toogleRobotStatu(e)}}},[t._v(t._s(e.status?"手动掉线":"重新连接"))])])])}),t._v(" "),0===t.robotList.length?o("div",{staticClass:"card col-sm-6 col-md-4 login-robot",on:{click:t.openLoginRobotModal}},[t._m(0)]):t._e()],2),t._v(" "),t._m(1),t._v(" "),o("login-robot-modal",{attrs:{active:t.loginRobotModal,name:t.focusRobotName},on:{close:t.closeLoginRobotModal,successLogin:t.getRobotList}}),t._v(" "),o("message-box",{attrs:{active:t.logoutRobotModal,title:"手动掉线"},on:{close:t.closeLogoutRobotModal,submit:t.logoutRobot}},[o("span",[t._v("你确定要掉线"),o("br"),t._v('机器人"'+t._s(t.focusRobotName)+'"吗？')])]),t._v(" "),o("message-box",{attrs:{active:t.deleteRobotModal,title:""},on:{close:t.closeDeleteRobotModal,submit:t.deleteRobot}},[o("span",[t._v("你确定要删除"),o("br"),t._v('机器人"'+t._s(t.focusRobotName)+'"吗？')])])],1)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card-body"},[o("span",{staticClass:"card-title"},[t._v("+ 创建机器人")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ol",{staticClass:"help"},[t._v("使用帮助：\n        "),o("li",[t._v("如果尝试多次登录失败，请登录web微信（http://wx.qq.com），检查是否可以正常登录")]),t._v(" "),o("li",[t._v("微信机器人登录后，请尽量避使用PC客户端登录或网页端登录微信，否则会导致机器人服务不稳定")])])}],i={render:a,staticRenderFns:n};e.a=i}});
//# sourceMappingURL=3.65d3f132402e08f8038a.js.map