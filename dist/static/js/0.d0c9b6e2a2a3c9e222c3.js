webpackJsonp([0],{158:function(t,o,e){function a(t){e(170)}var n=e(7)(e(172),e(183),a,"data-v-d8398cca",null);t.exports=n.exports},170:function(t,o,e){var a=e(171);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(157)("1eeccdbc",a,!0)},171:function(t,o,e){o=t.exports=e(156)(!0),o.push([t.i,"h4[data-v-d8398cca]{margin-top:0;padding-top:22.4px;padding-top:1.4rem;margin-left:32px;margin-left:2rem;font-weight:400;color:#858787;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0}.robot-list[data-v-d8398cca]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;overflow-y:scroll;padding-top:32px;padding-top:2rem}.robot-list .card[data-v-d8398cca]{height:200px;width:30%;margin:0 auto;float:left;margin-left:2.5%;margin-bottom:16px;margin-bottom:1rem}.card-body>img[data-v-d8398cca]{width:80px;height:80px;border-radius:50%;float:left;margin-right:32px;margin-right:2rem}.card-body>p[data-v-d8398cca]{margin-top:9.6px;margin-top:.6rem}.card-body>button[data-v-d8398cca]{float:right}.login-robot[data-v-d8398cca]{text-align:center;font-size:25.6px;font-size:1.6rem;position:relative}.login-robot span[data-v-d8398cca]{position:absolute;top:50%;left:50%;margin-left:-80px;margin-left:-5rem;margin-top:-25.6px;margin-top:-1.6rem}","",{version:3,sources:["/Users/hxf/www/weRobot/src/page/RobotManage.vue"],names:[],mappings:"AAAA,oBAAoB,aAAa,mBAAmB,mBAAmB,iBAAiB,iBAAiB,gBAAgB,cAAc,mBAAmB,oBAAoB,WAAW,CAAC,6BAA6B,mBAAmB,oBAAoB,YAAY,kBAAkB,iBAAiB,gBAAgB,CAAC,mCAAmC,aAAa,UAAU,cAAc,WAAW,iBAAiB,mBAAmB,kBAAkB,CAAC,gCAAgC,WAAW,YAAY,kBAAkB,WAAW,kBAAkB,iBAAiB,CAAC,8BAA8B,iBAAiB,gBAAgB,CAAC,mCAAmC,WAAW,CAAC,8BAA8B,kBAAkB,iBAAiB,iBAAiB,iBAAiB,CAAC,mCAAmC,kBAAkB,QAAQ,SAAS,kBAAkB,kBAAkB,mBAAmB,kBAAkB,CAAC",file:"RobotManage.vue",sourcesContent:["h4[data-v-d8398cca]{margin-top:0;padding-top:22.4px;padding-top:1.4rem;margin-left:32px;margin-left:2rem;font-weight:400;color:#858787;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0}.robot-list[data-v-d8398cca]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;overflow-y:scroll;padding-top:32px;padding-top:2rem}.robot-list .card[data-v-d8398cca]{height:200px;width:30%;margin:0 auto;float:left;margin-left:2.5%;margin-bottom:16px;margin-bottom:1rem}.card-body>img[data-v-d8398cca]{width:80px;height:80px;border-radius:50%;float:left;margin-right:32px;margin-right:2rem}.card-body>p[data-v-d8398cca]{margin-top:9.6px;margin-top:.6rem}.card-body>button[data-v-d8398cca]{float:right}.login-robot[data-v-d8398cca]{text-align:center;font-size:25.6px;font-size:1.6rem;position:relative}.login-robot span[data-v-d8398cca]{position:absolute;top:50%;left:50%;margin-left:-80px;margin-left:-5rem;margin-top:-25.6px;margin-top:-1.6rem}"],sourceRoot:""}])},172:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e(10),n=e.n(a),r=e(11),i=e(173),s=e.n(i),c=e(178),l=e.n(c),d=e(36);o.default={name:"RobotManage",data:function(){return{focusRobotName:"",focusRobotUin:"",loginRobotModal:!1,logoutRobotModal:!1,url:d.a}},methods:n()({openLoginRobotModal:function(){this.loginRobotModal=!0},closeLoginRobotModal:function(){this.loginRobotModal=!1},openLogoutRobotModal:function(){this.logoutRobotModal=!0},closeLogoutRobotModal:function(){this.logoutRobotModal=!1},toogleRobotStatu:function(t){var o=t.status,e=t.nickname,a=t.uin;switch(this.focusRobotName=e,this.focusRobotUin=a,o){case 0:this.openLoginRobotModal();break;case 1:this.openLogoutRobotModal()}}},Object(r.c)("Robot",["setRobotList"]),Object(r.b)("Robot",["getRobotList"])),components:{LoginRobotModal:s.a,LogoutRobotModal:l.a},computed:n()({},Object(r.d)("User",["userToken"]),Object(r.d)("Robot",{robotList:"list"}))}},173:function(t,o,e){function a(t){e(174)}var n=e(7)(e(176),e(177),a,"data-v-d7d2c942",null);t.exports=n.exports},174:function(t,o,e){var a=e(175);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(157)("73e8fab1",a,!0)},175:function(t,o,e){o=t.exports=e(156)(!0),o.push([t.i,".qrcode[data-v-d7d2c942]{width:40%;margin:10px auto;border:1px solid #e7e8eb}.qrcode img[data-v-d7d2c942]{width:100%;height:auto}.body>span[data-v-d7d2c942]{width:100%;text-align:center;display:block}","",{version:3,sources:["/Users/hxf/www/weRobot/src/components/LoginRobotModal.vue"],names:[],mappings:"AAAA,yBAAyB,UAAU,iBAAiB,wBAAwB,CAAC,6BAA6B,WAAW,WAAW,CAAC,4BAA4B,WAAW,kBAAkB,aAAa,CAAC",file:"LoginRobotModal.vue",sourcesContent:[".qrcode[data-v-d7d2c942]{width:40%;margin:10px auto;border:1px solid #e7e8eb}.qrcode img[data-v-d7d2c942]{width:100%;height:auto}.body>span[data-v-d7d2c942]{width:100%;text-align:center;display:block}"],sourceRoot:""}])},176:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e(21),n=e.n(a),r=e(22),i=e.n(r),s=e(10),c=e.n(s),l=e(11),d=e(57),u=e.n(d),p=e(63);o.default={name:"UserModal",props:["name","active"],data:function(){return{qrCodeUrl:"",refreshInterval:"",time:"",show:!1,timestamp:""}},methods:c()({open:function(){var t=this;return i()(n.a.mark(function o(){var e,a,r;return n.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,t.timestamp=(new Date).getTime(),o.next=4,p.a.getLoginQrcode({userId:t.userToken});case 4:return e=o.sent,a=e.uuid,r=e.qrcode,t.setUUId(a),t.qrCodeUrl=r,(""===t.refreshInterval||t.timestamp-(new Date).getTime()>=6e4)&&(t.refreshInterval=setInterval(i()(n.a.mark(function o(){return n.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.open();case 2:case"end":return o.stop()}},o,t)})),6e4)),o.next=12,t.isScan();case 12:o.next=17;break;case 14:o.prev=14,o.t0=o.catch(0),console.log(o.t0);case 17:case"end":return o.stop()}},o,t,[[0,14]])}))()},isScan:function(){var t=this;return i()(n.a.mark(function o(){var e;return n.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.timestamp,o.prev=1,o.next=4,p.a.isScan({userId:t.userToken,uuid:t.uuid});case 4:return o.next=6,t.isLogin();case 6:o.next=12;break;case 8:o.prev=8,o.t0=o.catch(1),console.log(o.t0),t.show&&e===t.timestamp&&(t.time=setTimeout(i()(n.a.mark(function o(){return n.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.isScan();case 2:case"end":return o.stop()}},o,t)})),1e3));case 12:case"end":return o.stop()}},o,t,[[1,8]])}))()},isLogin:function(){var t=this;return i()(n.a.mark(function o(){var e,a,r,s,c;return n.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.timestamp,o.prev=1,o.next=4,p.a.isLogin({userId:t.userToken,uuid:t.uuid});case 4:return a=o.sent,r=a.userId,s=a.uin,c=a.id,clearInterval(t.refreshInterval),o.next=11,t.initRobot({userId:r,uin:s,robotId:c});case 11:o.next=17;break;case 13:o.prev=13,o.t0=o.catch(1),console.log(o.t0),t.show&&e===t.timestamp&&(t.time=setTimeout(i()(n.a.mark(function o(){return n.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.isLogin();case 2:case"end":return o.stop()}},o,t)})),1e3));case 17:case"end":return o.stop()}},o,t,[[1,13]])}))()},initRobot:function(t){var o=this;return i()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o.close(),e.next=4,p.a.init(t);case 4:o.$emit("activate"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,o,[[0,7]])}))()},close:function(){clearTimeout(this.time),clearInterval(this.refreshInterval),this.closeBackDrop(),this.show=!1,this.$emit("close")}},Object(l.c)(["closeBackDrop","openBackDrop"]),Object(l.c)("User",["setUUId"])),components:{Modal:u.a},watch:{active:function(t){t&&(this.show=t,this.openBackDrop(),this.open())}},computed:c()({},Object(l.d)("User",["userToken","uuid"]))}},177:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("modal",{attrs:{active:t.show},on:{toogle:t.close}},[e("div",{staticClass:"modal-header"},[e("h5",[t._v(t._s(t.name?"机器人连接":"机器人创建"))])]),t._v(" "),e("div",{staticClass:"body"},[e("div",{staticClass:"qrcode"},[e("img",{attrs:{src:t.qrCodeUrl,alt:"登陆二维码"}})]),t._v(" "),e("span",[t._v(t._s(t.name?"用机器人"+t.name+"的微信账号扫码重新登录":"微信扫码并确认登陆，完成机器人创建"))])])])},staticRenderFns:[]}},178:function(t,o,e){function a(t){e(179)}var n=e(7)(e(181),e(182),a,"data-v-9a3ed22c",null);t.exports=n.exports},179:function(t,o,e){var a=e(180);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(157)("3cbae026",a,!0)},180:function(t,o,e){o=t.exports=e(156)(!0),o.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"LogoutRobotModal.vue",sourceRoot:""}])},181:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e(21),n=e.n(a),r=e(22),i=e.n(r),s=e(10),c=e.n(s),l=e(57),d=e.n(l),u=e(11),p=e(63);o.default={name:"LogoutRobotModal",props:["name","active","uin"],data:function(){return{show:!1}},methods:c()({submit:function(){var t=this;return i()(n.a.mark(function o(){var e;return n.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,p.a.logout({uin:t.uin});case 3:e=o.sent,console.log(e),t.$emit("activate"),t.close(),o.next=12;break;case 9:o.prev=9,o.t0=o.catch(0),console.log(o.t0);case 12:case"end":return o.stop()}},o,t,[[0,9]])}))()},close:function(){this.closeBackDrop(),this.show=!1,this.$emit("close")}},Object(u.c)(["closeBackDrop","openBackDrop"])),watch:{active:function(t){t&&(this.show=t,this.openBackDrop())}},components:{Modal:d.a}}},182:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("modal",{attrs:{active:t.active},on:{toogle:t.close}},[e("div",{staticClass:"body"},[t._v("\n        你确定要掉线"),e("br"),t._v('机器人"'+t._s(t.name)+'"吗？\n        '),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.submit}},[t._v("确定掉线")]),t._v(" "),e("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.close}},[t._v("取消")])])])])},staticRenderFns:[]}},183:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"robot-manage"}},[e("h4",[t._v("机器人管理")]),t._v(" "),e("div",{staticClass:"robot-list"},[t._l(t.robotList,function(o){return e("div",{key:o.id,staticClass:"card"},[e("div",{staticClass:"card-body"},[e("img",{attrs:{src:t.url+"/image/qrcode/"+o.headImgUrl,alt:"头像"}}),t._v(" "),e("p",{staticClass:"card-text"},[t._v("机器人："+t._s(o.nickname))]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("状态："+t._s(o.status?"在线":"离线"))]),t._v(" "),e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){t.toogleRobotStatu(o)}}},[t._v(t._s(o.status?"手动掉线":"重新连接"))])])])}),t._v(" "),e("div",{staticClass:"card login-robot",on:{click:t.openLoginRobotModal}},[t._m(0)])],2),t._v(" "),t._m(1),t._v(" "),e("login-robot-modal",{attrs:{active:t.loginRobotModal,name:t.focusRobotName},on:{activate:t.getRobotList,close:t.closeLoginRobotModal}}),t._v(" "),e("logout-robot-modal",{attrs:{active:t.logoutRobotModal,name:t.focusRobotName,uin:t.focusRobotUin},on:{activate:t.getRobotList,close:t.closeLogoutRobotModal}})],1)},staticRenderFns:[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"card-body"},[e("span",{staticClass:"card-title"},[t._v("+ 创建机器人")])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ol",[t._v("使用帮助：\n        "),e("li",[t._v("如果尝试多次登录失败，请登录web微信（http://wx.qq.com），检查是否可以正常登录")]),t._v(" "),e("li",[t._v("为保证服务稳定，建议您优使用微信小号扫描完成机器人创建")]),t._v(" "),e("li",[t._v("若无微信小号，可使用常用微信账号扫码完成机器人创建")])])}]}}});
//# sourceMappingURL=0.d0c9b6e2a2a3c9e222c3.js.map