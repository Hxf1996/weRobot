webpackJsonp([9],{158:function(t,o,e){function a(t){e(194)}var i=e(4)(e(196),e(197),a,"data-v-544d6f70",null);t.exports=i.exports},194:function(t,o,e){var a=e(195);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(155)("7b6300c8",a,!0)},195:function(t,o,e){o=t.exports=e(154)(!0),o.push([t.i,"h4[data-v-544d6f70]{margin-top:0;padding-top:22.4px;padding-top:1.4rem;margin-left:32px;margin-left:2rem;font-weight:400;color:#858787;margin-bottom:32px;margin-bottom:2rem}h4[data-v-544d6f70],nav[data-v-544d6f70]{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}nav[data-v-544d6f70]{box-shadow:0 2px 1px #b9b9b9;margin-top:16px;margin-top:1rem;padding-left:64px;padding-left:4rem}nav .nav-link[data-v-544d6f70]{padding:12.8px 24px;padding:.8rem 1.5rem;color:#858787;display:inline-block}nav .active[data-v-544d6f70]{border-bottom:2px solid #b9b9b9}.group-list-view[data-v-544d6f70]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;overflow-y:scroll}","",{version:3,sources:["/Users/hxf/www/weRobot/src/page/GroupManage.vue"],names:[],mappings:"AAAA,oBAAoB,aAAa,mBAAmB,mBAAmB,iBAAiB,iBAAiB,gBAAgB,cAAc,mBAAmB,kBAAkB,CAAC,yCAAyC,mBAAmB,oBAAoB,YAAY,oBAAoB,aAAa,CAAC,qBAAqB,6BAA6B,gBAAgB,gBAAgB,kBAAkB,iBAAiB,CAAC,+BAA+B,oBAAoB,qBAAqB,cAAc,oBAAoB,CAAC,6BAA6B,+BAA+B,CAAC,kCAAkC,mBAAmB,oBAAoB,YAAY,iBAAiB,CAAC",file:"GroupManage.vue",sourcesContent:["h4[data-v-544d6f70]{margin-top:0;padding-top:22.4px;padding-top:1.4rem;margin-left:32px;margin-left:2rem;font-weight:400;color:#858787;margin-bottom:32px;margin-bottom:2rem}h4[data-v-544d6f70],nav[data-v-544d6f70]{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}nav[data-v-544d6f70]{box-shadow:0 2px 1px #b9b9b9;margin-top:16px;margin-top:1rem;padding-left:64px;padding-left:4rem}nav .nav-link[data-v-544d6f70]{padding:12.8px 24px;padding:.8rem 1.5rem;color:#858787;display:inline-block}nav .active[data-v-544d6f70]{border-bottom:2px solid #b9b9b9}.group-list-view[data-v-544d6f70]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;overflow-y:scroll}"],sourceRoot:""}])},196:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e(7),i=e.n(a),n=e(11);o.default={name:"GroupManage",created:function(){var t=this;setTimeout(function(){0===t.robotList.length?(alert("请先添加机器人"),t.$router.push({name:"robotManage"})):t.$router.push({name:"groupList",params:{id:t.robotList[0].id}})},1e3)},data:function(){return{}},methods:{},components:{},computed:i()({},Object(n.d)("Robot",{robotList:"list"}))}},197:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"group-manage"}},[e("h4",[t._v("群管理")]),t._v(" "),e("nav",{staticClass:"nav"},t._l(t.robotList,function(o){return e("router-link",{key:o.id,staticClass:"nav-link",class:{active:o.id===t.$route.params.id},attrs:{to:{name:"groupList",params:{id:o.id}}}},[t._v("机器人："+t._s(o.nickname))])})),t._v(" "),e("router-view",{staticClass:"group-list-view"})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=9.c6b4a41b6aca74411fcd.js.map