webpackJsonp([12],Array(22).concat([function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n(38),o=n.n(a),s="http://www.elephtribe.com",r=o.a.create({baseURL:s+"/procurement",transformResponse:[function(t){return JSON.parse(t)}],withCredentials:!0});e.b=r},,function(t,e,n){"use strict";var a=n(65),o=n.n(a),s=function(t){return JSON.parse(sessionStorage.getItem(t))||""},r=function(t){sessionStorage.removeItem(t)},i=function(t,e){sessionStorage.setItem(t,o()(e))},c=function(t,e){if(!t)return"";var n=new Date(t),a=function(t){return t.toString().padStart(2,"0")};return e.replace(/YYYY|MM|dd|HH|mm|ss/g,function(t){switch(t){case"YYYY":return a(n.getFullYear());case"MM":return a(n.getMonth()+1);case"dd":return a(n.getDate());case"HH":return a(n.getHours());case"mm":return a(n.getMinutes());default:return a(n.getSeconds())}})},u=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,a=t.className.toString();!t.className.match(new RegExp("("+n+"|"+e+")"))?a+=(""!==a?" ":"")+e:a=a.replace(new RegExp(n),e),t.className=a},l=function(t,e){var n=" "+t.className+" ";n=n.replace(/(\s+)/gi," ");var a=n.replace(" "+e+" "," ");a=a.replace(/(^\s+)|(\s+$)/g,""),t.className=a},d=function(t,e){return!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))};e.a={getStorage:s,removeStorage:r,setStorage:i,formatDate:c,addClass:u,removeClass:l,hasClass:d}},,,,,,,,,,,,,function(t,e,n){"use strict";function a(t){n(125)}var o=n(126),s=n(127),r=n(4),i=a,c=r(o.a,s.a,i,"data-v-995925b4",null);e.a=c.exports},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var a=n(16),o=n.n(a),s=n(22),r=function(t){return new o.a(function(e,n){s.b.get("/robot/getGroupList",{params:t}).then(function(t){t.data.status?e(t.data.entry):n(new Error(t.data.message))}).catch(function(){n(new Error("网络不稳定请刷新重试！"))})})},i=function(t){return new o.a(function(e,n){s.b.get("/robot/getMonitorGroupList",{params:t}).then(function(t){t.data.status?e(t.data.entry):n(new Error(t.data.message))}).catch(function(){n(new Error("网络不稳定请刷新重试！"))})})},c=function(t){return new o.a(function(e,n){s.b.post("/robot/batchUpdateGroup",t).then(function(t){t.data.status?e(t.data.message):n(new Error(t.data.message))}).catch(function(){n(new Error("网络不稳定请刷新重试！"))})})},u=function(t){return new o.a(function(e,n){s.b.post("robot/msgSend",t).then(function(t){t.data.status?e(t.data.message):n(new Error(t.data.message))}).catch(function(){n(new Error("网络不稳定请刷新重试！"))})})},l=function(t){return new o.a(function(e,n){s.b.get("robot/getUndoTask",{params:t}).then(function(t){t.data.status?e(t.data.entry):n(new Error(t.data.message))}).catch(function(){n(new Error("网络不稳定请刷新重试！"))})})},d=function(t){return new o.a(function(e,n){s.b.post("robot/updateTaskInfo",t).then(function(t){t.data.status?e(t.data.message):n(new Error(t.data.message))}).catch(function(){n(new Error("网络不稳定请刷新重试！"))})})},m=function(t){return new o.a(function(e,n){s.b.get("robot/delTaskInfo",{params:t}).then(function(t){t.data.status?e(t.data.message):n(new Error(t.data.message))}).catch(function(){n(new Error("网络不稳定请刷新重试！"))})})},f=function(t){return new o.a(function(e,n){s.b.get("robot/getMsgRecord",{params:t}).then(function(t){t.data.status?e(t.data.entry):n(new Error(t.data.message))}).catch(function(){n(new Error("网络不稳定请刷新重试！"))})})};e.a={getGroupList:r,getMonitorGroupList:i,updateGroup:c,addMass:u,getUndoTask:l,updateTaskInfo:d,getMsgRecord:f,delTaskInfo:m}},,,,,,function(t,e,n){"use strict";function a(t){n(129)}var o=n(130),s=n(131),r=n(4),i=a,c=r(o.a,s.a,i,"data-v-70051b1b",null);e.a=c.exports},function(t,e,n){"use strict";var a=n(16),o=n.n(a),s=n(22),r=function(t){return new o.a(function(e,n){s.b.get("/robot/getLoginQrcode",{params:t}).then(function(t){t.data.status?e(t.data.entry):n(new Error(t.data.message))}).catch(function(){n(new Error("网络不稳定请刷新重试！"))})})},i=function(t){return new o.a(function(e,n){s.b.get("/robot/isScan",{params:t}).then(function(t){t.data.status?e(t.data.message):n(new Error(t.data.message))}).catch(function(t){t.response.status&&n(new Error(t.response.message)),n(new Error("网络不稳定请刷新重试！"))})})},c=function(t){return new o.a(function(e,n){s.b.get("/robot/isLogin",{params:t}).then(function(t){t.data.status?e(t.data.entry):n(new Error(t.data.message))}).catch(function(t){t.response.status&&n(new Error(t.response.message)),n(new Error("网络不稳定请刷新重试！"))})})},u=function(t){return new o.a(function(e,n){s.b.get("/robot/robotInit",{params:t}).then(function(t){t.data.status?e(t.data.message):n(new Error(t.data.message))}).catch(function(){n(new Error("网络不稳定请刷新重试！"))})})},l=function(t){return new o.a(function(e,n){s.b.get("/robot/getRobotList",{params:t}).then(function(t){t.data.status?e(t.data.entry):n(new Error(t.data.message))}).catch(function(){n(new Error("网络不稳定请刷新重试！"))})})},d=function(t){return new o.a(function(e,n){s.b.get("/robot/logout",{params:t}).then(function(t){t.data.status?e(t.data.message):n(new Error(t.data.message))}).catch(function(){n(new Error("网络不稳定请刷新重试！"))})})},m=function(t){return new o.a(function(e,n){s.b.get("/robot/delRobot",{params:t}).then(function(t){t.data.status?e(t.data.message):n(new Error(t.data.message))}).catch(function(){n(new Error("网络不稳定请刷新重试！"))})})},f=function(t){return new o.a(function(e,n){s.b.get("/robot/pushLogin",{params:t}).then(function(t){t.data.status?e(t.data.message):n(new Error(t.data.message))}).catch(function(){n(new Error("网络不稳定请刷新重试！"))})})};e.a={getLoginQrcode:r,isScan:i,isLogin:c,init:u,getList:l,logout:d,delRobot:m,pushLogin:f}},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(64),o=n.n(a),s=n(24),r=n(31),i=n(77),c=n(134),u=n(155);r.a.directive("validate",{bind:function(t,e,n){var a=n.context,r=e.value,i=o()(e.modifiers)[0];t.addEventListener("change",function(t){try{var e=t.srcElement.name;r[e]&&(r[e](a[i]),s.a.removeClass(t.srcElement,"is-invalid"))}catch(t){s.a.addClass(t.srcElement,"is-invalid")}}),t.getElementsByTagName("button")[0].addEventListener("click",function(){try{o()(a[i]).forEach(function(t){r[t]&&r[t](a[i])})}catch(t){a.loading({text:"请检查参数"}),a.loaded(1e3),t.preventDefault()}})}}),new r.a({el:"#app",router:c.a,store:u.a,template:"<App/>",components:{App:i.a}})},,,,,,,,,,,function(t,e,n){"use strict";function a(t){n(78),n(80)}var o=n(81),s=n(133),r=n(4),i=a,c=r(o.a,s.a,i,"data-v-7bb2d436",null);e.a=c.exports},function(t,e){},,function(t,e){},function(t,e,n){"use strict";var a=n(12),o=n.n(a),s=n(13),r=n.n(s),i=n(5),c=n.n(i),u=n(9),l=n(24),d=n(111),m=n(115),f=n(119);e.a={name:"app",data:function(){return{time:""}},created:function(){var t=l.a.getStorage("USER_TOKEN");""!==t&&this.setUserToken(t);var e=l.a.getStorage("USER_INFO");""!==e&&this.setUserInfo(e)},components:{HeaderView:f.a,BackDrop:d.a,Loading:m.a},methods:c()({init:function(){var t=this;return r()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.userToken&&"index"!==t.$route.name&&(t.loading({text:"请先登录"}),t.loaded(1e3),t.$router.push({name:"index"})),0!==t.robotList.length&&"robotManage"!==t.$route.name){e.next=4;break}return e.next=4,t.getRobotList();case 4:"robotManage"!==t.$route.name&&"index"!==t.$route.name&&(0!==t.robotList.length&&0!==t.robotList[0].status||(t.loading({text:"请先绑定并激活机器人"}),t.loaded(1e3),t.$router.push({name:"robotManage"})));case 5:case"end":return e.stop()}},e,t)}))()},go:function(t){(""===this.time||(new Date).getTime()-this.time>=1e3)&&(this.time=(new Date).getTime(),this.$router.push(t))}},Object(u.c)(["loading"]),Object(u.c)("User",["setUserToken","setUserInfo"]),Object(u.b)(["loaded"]),Object(u.b)("Robot",["getRobotList"])),watch:{$route:function(){this.init()}},computed:c()({},Object(u.d)({backDrop:"backDrop",loadConfig:"loading"}),Object(u.d)("User",["userToken"]),Object(u.d)("Robot",{robotList:"list",groupList:"groupList"}))}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function a(t){n(112)}var o=n(113),s=n(114),r=n(4),i=a,c=r(o.a,s.a,i,"data-v-7c52de0d",null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";e.a={name:"BackDrop",props:{active:{type:Boolean,default:!1}},data:function(){return{show:!1}},methods:{toogle:function(){this.show=!this.show,this.$emit("toogle")}},watch:{active:function(){this.show=this.active}}}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"transparent"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"modal-backdrop",on:{click:t.toogle}})])},o=[],s={render:a,staticRenderFns:o};e.a=s},function(t,e,n){"use strict";function a(t){n(116)}var o=n(117),s=n(118),r=n(4),i=a,c=r(o.a,s.a,i,"data-v-01e3de22",null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";e.a={name:"Loading",props:["active","log"],data:function(){return{show:!1}},watch:{active:function(){this.show=this.active}}}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"transparent"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"backdrop"},[n("div",{staticClass:"toast"},[n("span",{staticClass:"loading"}),t._v(" "),n("span",{staticClass:"text"},[t._v(t._s(t.log.text))])])])])},o=[],s={render:a,staticRenderFns:o};e.a=s},function(t,e,n){"use strict";function a(t){n(120)}var o=n(121),s=n(132),r=n(4),i=a,c=r(o.a,s.a,i,"data-v-c0fa87ac",null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var a=n(5),o=n.n(a),s=n(9),r=n(122),i=n(62);e.a={name:"Header",data:function(){return{loginModal:!1,logoutModal:!1}},created:function(){},methods:o()({openLoginModal:function(){this.loginModal=!0},closeLoginModal:function(){this.loginModal=!1},successLogin:function(){this.closeLoginModal(),this.$router.push({name:"robotManage"})},openLogoutModal:function(){this.logoutModal=!0},closeLogoutModal:function(){this.logoutModal=!1},logout:function(){this.removeUserToken(),this.$router.push({name:"index"}),this.closeLogoutModal()}},Object(s.c)("User",["removeUserToken"])),computed:o()({},Object(s.d)("User",["userToken"]),{isUnLogin:function(){return""===this.userToken}}),components:{LoginModal:r.a,MessageBox:i.a}}},function(t,e,n){"use strict";function a(t){n(123)}var o=n(124),s=n(128),r=n(4),i=a,c=r(o.a,s.a,i,"data-v-0850f061",null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var a=n(12),o=n.n(a),s=n(13),r=n.n(s),i=n(5),c=n.n(i),u=n(37),l=n(9);e.a={name:"UserModal",props:["active"],data:function(){return{show:!1,userLoginFrom:{mobile:"",password:""}}},methods:c()({init:function(){this.userLoginFrom={mobile:"",password:""}},submit:function(){var t=this;return r()(o.a.mark(function e(){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading({text:"正在登录"}),e.next=4,t.login(t.userLoginFrom);case 4:n=e.sent,t.loading({text:n}),t.loaded(1e3),t.close(),t.$emit("submit"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),t.loading({text:e.t0.message}),t.loaded(1500);case 15:case"end":return e.stop()}},e,t,[[0,11]])}))()},open:function(){this.show=this.active,this.openBackDrop()},close:function(){this.init(),this.show=!1,this.closeBackDrop(),this.$emit("close")}},Object(l.c)(["closeBackDrop","openBackDrop","loading"]),Object(l.b)(["loaded"]),Object(l.b)("User",["login"])),components:{Modal:u.a},watch:{active:function(t){t&&this.open()}}}},function(t,e){},function(t,e,n){"use strict";e.a={name:"Modal",props:{active:{type:Boolean,default:!1}},data:function(){return{show:!1}},methods:{toogle:function(){this.show=!this.show,this.$emit("toogle")}},watch:{active:function(){this.show=this.active}}}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"zoom"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"modal show",attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},on:{click:t.toogle}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content",on:{click:function(t){t.stopPropagation()}}},[t._t("default")],2)])])])},o=[],s={render:a,staticRenderFns:o};e.a=s},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",{attrs:{active:t.show},on:{toogle:t.close}},[n("div",{staticClass:"modal-header"},[n("h5",[t._v("登陆")])]),t._v(" "),n("div",{staticClass:"body"},[n("form",{on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[n("br"),t._v(" "),n("div",{staticClass:"form-group row justify-content-center"},[n("div",{staticClass:"col-10"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userLoginFrom.mobile,expression:"userLoginFrom.mobile"}],staticClass:"form-control rounded-0",attrs:{type:"phone","aria-describedby":"mobile",placeholder:"输入手机号"},domProps:{value:t.userLoginFrom.mobile},on:{input:function(e){e.target.composing||(t.userLoginFrom.mobile=e.target.value)}}}),t._v(" "),n("i",{staticClass:"fa fa-user-o",attrs:{"aria-hidden":"true"}})])]),t._v(" "),n("div",{staticClass:"form-group row justify-content-center"},[n("div",{staticClass:"col-10"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userLoginFrom.password,expression:"userLoginFrom.password"}],staticClass:"form-control rounded-0",attrs:{type:"password","aria-describedby":"password",placeholder:"输入密码"},domProps:{value:t.userLoginFrom.password},on:{input:function(e){e.target.composing||(t.userLoginFrom.password=e.target.value)}}}),t._v(" "),n("i",{staticClass:"fa fa-lock",attrs:{"aria-hidden":"true"}})])]),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("登陆")])])])])])},o=[],s={render:a,staticRenderFns:o};e.a=s},function(t,e){},function(t,e,n){"use strict";var a=n(5),o=n.n(a),s=n(37),r=n(9);e.a={name:"MessageBox",props:["active","title"],data:function(){return{show:!1}},methods:o()({submit:function(){this.$emit("submit"),this.close()},open:function(){this.openBackDrop(),this.show=!0},close:function(){this.closeBackDrop(),this.show=!1,this.$emit("close")}},Object(r.c)(["closeBackDrop","openBackDrop"])),watch:{active:function(t){t&&this.open()}},components:{Modal:s.a}}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",{attrs:{active:t.show},on:{toogle:t.close}},[n("div",{staticClass:"modal-header"},[n("h6",[t._v(t._s(t.title))]),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.close}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),n("div",{staticClass:"body"},[n("div",{staticClass:"slot"},[t._t("default")],2)]),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-submit",attrs:{type:"button"},on:{click:t.submit}},[t._v("确定")]),t._v(" "),n("button",{staticClass:"btn btn-cancel",attrs:{type:"button"},on:{click:t.close}},[t._v("取消")])])])},o=[],s={render:a,staticRenderFns:o};e.a=s},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"header"}},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"robotManage"}}},[t._v("AIFOCUS | 客户运营中心")]),t._v(" "),n("div",{staticClass:"collapse navbar-collapse"},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item"},[t.isUnLogin?n("a",{staticClass:"nav-link",on:{click:t.openLoginModal}},[t._v("登陆")]):n("a",{staticClass:"nav-link",on:{click:t.openLogoutModal}},[t._v("退出")])])])])],1),t._v(" "),n("login-modal",{attrs:{active:t.loginModal},on:{close:t.closeLoginModal,submit:t.successLogin}}),t._v(" "),n("message-box",{attrs:{active:t.logoutModal,title:""},on:{close:t.closeLogoutModal,submit:t.logout}},[n("span",[t._v("你确定要退出登录吗？")])])],1)},o=[],s={render:a,staticRenderFns:o};e.a=s},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header-view"),t._v(" "),n("section",["index"!==t.$route.name?n("ul",{staticClass:"list-group left-nav"},[n("li",{staticClass:"list-group-item top-nav"},[n("h5",[t._v("AI机器人")]),t._v(" "),n("ul",{staticClass:"list-group"},[n("li",{staticClass:"list-group-item",class:{active:"robotManage"===t.$route.name},on:{click:function(e){t.go({name:"robotManage"})}}},[t._v("机器人管理")]),t._v(" "),n("li",{staticClass:"list-group-item",class:{active:/\/groupManage/.test(t.$route.path)},on:{click:function(e){t.go({name:"groupManage"})}}},[t._v("群管理  ")]),t._v(" "),n("li",{staticClass:"list-group-item",class:{active:/\/massTexting/.test(t.$route.path)},on:{click:function(e){t.go({name:"massTexting"})}}},[t._v("消息群发 ")]),t._v(" "),n("li",{staticClass:"list-group-item",class:{active:/\/welcomeGreet/.test(t.$route.path)},on:{click:function(e){t.go({name:"welcomeGreet"})}}},[t._v("欢迎词  ")])])]),t._v(" "),n("li",{staticClass:"list-group-item",staticStyle:{"flex-direction":"column"}},[n("h5",[t._v("群操作")]),t._v(" "),n("ul",{staticClass:"list-group"},t._l(t.robotList,function(e){return n("li",{key:e.id,staticClass:"list-group-item bottom-nav"},[n("ul",{staticClass:"list-group"},t._l(t.groupList[e.id],function(e){return n("li",{key:e.id,staticClass:"list-group-item",class:{active:t.$route.params.id==e.id},on:{click:function(n){t.go({name:"operate",params:{id:e.id,nickName:e.nickname}})}}},[t._v(t._s(e.nickname))])}))])}))])]):t._e(),t._v(" "),n("main",[n("transition",{attrs:{name:"transparent"}},[n("router-view")],1)],1)]),t._v(" "),n("back-drop",{attrs:{active:t.backDrop}}),t._v(" "),n("loading",{attrs:{active:t.loadConfig.active,log:{type:t.loadConfig.type,text:t.loadConfig.text}}})],1)},o=[],s={render:a,staticRenderFns:o};e.a=s},function(t,e,n){"use strict";var a=n(31),o=n(135);a.a.use(o.a);var s=new o.a({routes:[{path:"/",name:"index",component:function(){return n.e(7).then(n.bind(null,164))}},{path:"/robotManage",name:"robotManage",component:function(){return n.e(3).then(n.bind(null,165))}},{path:"/groupManage",name:"groupManage",component:function(){return n.e(10).then(n.bind(null,166))},props:function(t){return{groupId:Number(t.params.id)}},children:[{path:":id",name:"groupList",component:function(){return n.e(4).then(n.bind(null,167))}}]},{path:"/massTexting",name:"massTexting",component:function(){return n.e(9).then(n.bind(null,168))},children:[{path:"addMass",name:"addMass",component:function(){return n.e(0).then(n.bind(null,169))}},{path:"timedMass",name:"timedMass",component:function(){return n.e(1).then(n.bind(null,170))}},{path:"massRecord",name:"massRecord",component:function(){return n.e(2).then(n.bind(null,171))}}]},{path:"/operate/:id",name:"operate",component:function(){return n.e(8).then(n.bind(null,172))},children:[{path:"redPacket",name:"redPacket",component:function(){return n.e(6).then(n.bind(null,173))}}]},{path:"/welcomeGreet",name:"welcomeGreet",component:function(){return n.e(5).then(n.bind(null,174))}}]});e.a=s},,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var a=n(31),o=n(9),s=n(156),r=n(157),i=n.n(r),c=n(158),u=n(159),l=n(161);a.a.use(o.a),e.a=new o.a.Store({strict:!0,state:{backDrop:!1,loading:{active:!1,type:"loading",text:""}},modules:{User:u.a,Robot:l.a},actions:s.a,getters:i.a,mutations:c.a})},function(t,e,n){"use strict";var a=function(t,e){var n=t.commit;setTimeout(function(){n("loaded")},e)};e.a={loaded:a}},function(t,e){},function(t,e,n){"use strict";var a=n(5),o=n.n(a),s=function(t){t.backDrop=!0},r=function(t){t.backDrop=!1},i=function(t,e){t.loading=o()({},t.loading,e,{active:!0})},c=function(t){t.loading=o()({},t.loading,{active:!1})};e.a={openBackDrop:s,closeBackDrop:r,loading:i,loaded:c}},function(t,e,n){"use strict";var a=n(12),o=n.n(a),s=n(13),r=n.n(s),i=n(160),c=n(24),u={userToken:"",userInfo:{},uuid:""},l={},d={login:function(t,e){var n=this,a=t.commit;return r()(o.a.mark(function t(){var s,r,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.login(e);case 2:return s=t.sent,r=s.entry,c=s.message,a("setUserToken",r.userInfo.userId),a("setUserInfo",r.userInfo),t.abrupt("return",c);case 8:case"end":return t.stop()}},t,n)}))()}},m={setUserToken:function(t,e){t.userToken=e,c.a.setStorage("USER_TOKEN",e)},removeUserToken:function(t){t.userToken="",c.a.removeStorage("USER_TOKEN")},setUserInfo:function(t,e){t.userInfo=e,c.a.setStorage("USER_INFO",e)},setUUId:function(t,e){t.uuid=e}};e.a={namespaced:!0,state:u,getters:l,actions:d,mutations:m}},function(t,e,n){"use strict";var a=n(5),o=n.n(a),s=n(16),r=n.n(s),i=n(38),c=n.n(i),u=n(22),l=function(t){return new r.a(function(e,n){c.a.post(u.a+"/member/login.do",o()({},t,{role:"crm"}),{withCredentials:!0}).then(function(t){t.data.status?e(t.data):n(new Error(t.data.message))}).catch(function(t){t(new Error("网络不稳定请刷新重试！"))})})};e.a={login:l}},function(t,e,n){"use strict";var a=n(12),o=n.n(a),s=n(13),r=n.n(s),i=n(63),c=n(56),u={list:[],groupList:{}},l={},d={getRobotList:function(t){var e=this,n=t.commit,a=t.dispatch,s=t.rootState;return r()(o.a.mark(function t(){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.getList({userId:s.User.userToken});case 2:r=t.sent,n("setRobotList",r),a("getGroupList");case 5:case"end":return t.stop()}},t,e)}))()},getGroupList:function(t){var e=this,n=t.commit,a=t.state,s={};a.list.forEach(function(){var t=r()(o.a.mark(function t(a){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.getMonitorGroupList({robotId:a.id});case 2:r=t.sent,s[a.id]=r,n("addGroupList",s);case 5:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}())}},m={setRobotList:function(t,e){t.list=e},addGroupList:function(t,e){t.groupList=e}};e.a={namespaced:!0,state:u,getters:l,actions:d,mutations:m}}]),[66]);
//# sourceMappingURL=app.dec9ccaf7a3cc2002856.js.map