webpackJsonp([1],{160:function(t,e,o){function a(t){o(188)}var r=o(7)(o(190),o(201),a,"data-v-4e89c22e",null);t.exports=r.exports},188:function(t,e,o){var a=o(189);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(157)("5f9b7d3f",a,!0)},189:function(t,e,o){e=t.exports=o(156)(!0),e.push([t.i,"#group-list[data-v-4e89c22e]{padding:32px;padding:2rem}.group[data-v-4e89c22e]{background-color:#fbfbfb;border:1.8px solid #e0e0e0;padding:8px;padding:.5rem;margin-right:19.2px;margin-right:1.2rem;margin-bottom:19.2px;margin-bottom:1.2rem;float:left;list-style:none}.group>span[data-v-4e89c22e]{margin-right:32px;margin-right:2rem}","",{version:3,sources:["/Users/hxf/www/weRobot/src/page/GroupList.vue"],names:[],mappings:"AAAA,6BAA6B,aAAa,YAAY,CAAC,wBAAwB,yBAAyB,2BAA2B,YAAY,cAAc,oBAAoB,oBAAoB,qBAAqB,qBAAqB,WAAW,eAAe,CAAC,6BAA6B,kBAAkB,iBAAiB,CAAC",file:"GroupList.vue",sourcesContent:["#group-list[data-v-4e89c22e]{padding:32px;padding:2rem}.group[data-v-4e89c22e]{background-color:#fbfbfb;border:1.8px solid #e0e0e0;padding:8px;padding:.5rem;margin-right:19.2px;margin-right:1.2rem;margin-bottom:19.2px;margin-bottom:1.2rem;float:left;list-style:none}.group>span[data-v-4e89c22e]{margin-right:32px;margin-right:2rem}"],sourceRoot:""}])},190:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(21),r=o.n(a),s=o(22),n=o.n(s),i=o(10),c=o.n(i),l=o(11),u=o(191),d=o.n(u),p=o(196),m=o.n(p),f=o(56);e.default={name:"GroupList",data:function(){return{deteleGroupModal:!1,addGroupModal:!1,deleteData:{name:""}}},methods:c()({openDeleteGroup:function(t,e){this.deleteData={id:t,name:e},this.deteleGroupModal=!0},deleteGroup:function(t){var e=this;return n()(r.a.mark(function o(){var a;return r.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,f.a.updateGroup([{id:t,isMonitor:!1,isAtReply:!1}]);case 3:a=o.sent,console.log(a),e.deteleGroupModal=!1,e.getGroupList(),o.next=12;break;case 9:o.prev=9,o.t0=o.catch(0),console.log(o.t0);case 12:case"end":return o.stop()}},o,e,[[0,9]])}))()},openAddGroupModal:function(){this.addGroupModal=!0},closeAddGroupModal:function(){this.addGroupModal=!1}},Object(l.c)(["closeBackDrop"]),Object(l.b)("Robot",["getGroupList"])),components:{DeleteGroupModal:d.a,AddGroupModal:m.a},computed:c()({},Object(l.d)("Robot",{robotList:"list",groupList:"groupList"}))}},191:function(t,e,o){function a(t){o(192)}var r=o(7)(o(194),o(195),a,"data-v-1f30f4d6",null);t.exports=r.exports},192:function(t,e,o){var a=o(193);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(157)("2db7783e",a,!0)},193:function(t,e,o){e=t.exports=o(156)(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"DeleteGroupModal.vue",sourceRoot:""}])},194:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(10),r=o.n(a),s=o(11),n=o(57),i=o.n(n);e.default={name:"DeleteGroupModal",props:["active","name"],data:function(){return{show:!1}},methods:r()({submit:function(){this.close(),this.$emit("submit")},close:function(){this.closeBackDrop(),this.show=!1}},Object(s.c)(["closeBackDrop","openBackDrop"])),watch:{active:function(){this.show=this.active,this.show&&this.openBackDrop()}},components:{Modal:i.a}}},195:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("modal",{attrs:{active:t.show},on:{toogle:t.close}},[o("div",{staticClass:"body"},[o("span",[t._v("您确定要删除“"+t._s(t.name)+"“群么？")]),o("br"),t._v(" "),o("span",[t._v("删除后该群将不再提供机器人服务")])]),t._v(" "),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.close}},[t._v("取消")]),t._v(" "),o("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.submit}},[t._v("删除")])])])},staticRenderFns:[]}},196:function(t,e,o){function a(t){o(197)}var r=o(7)(o(199),o(200),a,"data-v-3783ae3c",null);t.exports=r.exports},197:function(t,e,o){var a=o(198);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(157)("15f63c0c",a,!0)},198:function(t,e,o){e=t.exports=o(156)(!0),e.push([t.i,".body[data-v-3783ae3c]{max-height:600px;overflow-x:scroll;margin-left:32px;margin-left:2rem}","",{version:3,sources:["/Users/hxf/www/weRobot/src/components/AddGroupModal.vue"],names:[],mappings:"AAAA,uBAAuB,iBAAiB,kBAAkB,iBAAiB,gBAAgB,CAAC",file:"AddGroupModal.vue",sourcesContent:[".body[data-v-3783ae3c]{max-height:600px;overflow-x:scroll;margin-left:32px;margin-left:2rem}"],sourceRoot:""}])},199:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(21),r=o.n(a),s=o(22),n=o.n(s),i=o(10),c=o.n(i),l=o(11),u=o(57),d=o.n(u),p=o(56);e.default={name:"AddGroupModal",props:["active"],data:function(){return{show:!1,groupList:[],addGroupData:[],selectAll:!1}},methods:c()({submit:function(){var t=this;return n()(r.a.mark(function e(){var o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.updateGroup(t.addGroupData.map(function(t){return{id:t,isMonitor:!0,isAtReply:!1}}));case 3:o=e.sent,console.log(o),t.$emit("submit"),t.close(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,t,[[0,9]])}))()},close:function(){this.closeBackDrop(),this.show=!1,this.$emit("close")},getGroupList:function(){var t=this;return n()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.getGroupList({robotId:t.$route.params.id});case 3:t.groupList=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}},e,t,[[0,6]])}))()},toogleAll:function(){var t=this;this.addGroupData=[],this.selectAll&&this.unMonitorGroupList.forEach(function(e){t.addGroupData.push(e.id)})}},Object(l.c)(["closeBackDrop","openBackDrop"])),watch:{active:function(){this.show=this.active,this.show&&(this.openBackDrop(),this.getGroupList())}},components:{Modal:d.a},computed:{unMonitorGroupList:function(){return this.groupList.filter(function(t){return!t.monitor})}}}},200:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("modal",{attrs:{active:t.show},on:{toogle:t.close}},[o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title"},[t._v("请勾选需要添加的群组")])]),t._v(" "),o("form",{staticClass:"body"},t._l(t.unMonitorGroupList,function(e){return o("div",{key:e.id,staticClass:"form-check"},[o("label",{staticClass:"form-check-label"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.addGroupData,expression:"addGroupData"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.addGroupData)?t._i(t.addGroupData,e.id)>-1:t.addGroupData},on:{__c:function(o){var a=t.addGroupData,r=o.target,s=!!r.checked;if(Array.isArray(a)){var n=e.id,i=t._i(a,n);r.checked?i<0&&(t.addGroupData=a.concat(n)):i>-1&&(t.addGroupData=a.slice(0,i).concat(a.slice(i+1)))}else t.addGroupData=s}}}),t._v("\n                "+t._s(e.nickname)+"\n            ")])])})),t._v(" "),o("div",{staticClass:"modal-footer"},[o("div",{staticClass:"form-check"},[o("label",{staticClass:"form-check-label"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAll,expression:"selectAll"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:!0,checked:Array.isArray(t.selectAll)?t._i(t.selectAll,!0)>-1:t.selectAll},on:{click:function(e){e.stopPropagation(),t.toogleAll(e)},__c:function(e){var o=t.selectAll,a=e.target,r=!!a.checked;if(Array.isArray(o)){var s=t._i(o,!0);a.checked?s<0&&(t.selectAll=o.concat(!0)):s>-1&&(t.selectAll=o.slice(0,s).concat(o.slice(s+1)))}else t.selectAll=r}}}),t._v("全选\n            ")])]),t._v(" "),o("div",{on:{click:t.getGroupList}},[t._v("刷新群")]),t._v(" "),o("div",[t._v("已选"+t._s(t.addGroupData.length)+"/"+t._s(t.unMonitorGroupList.length))]),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.submit}},[t._v("确定添加")])])])},staticRenderFns:[]}},201:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"group-list"}},[o("ul",[o("li",{staticClass:"group",on:{click:t.openAddGroupModal}},[o("span",[t._v("添加群")])]),t._v(" "),t._l(t.groupList[t.$route.params.id],function(e){return o("li",{key:e.id,staticClass:"group"},[o("span",[t._v(t._s(e.nickname))]),t._v(" "),o("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(o){t.openDeleteGroup(e.id,e.nickname)}}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})],2),t._v(" "),o("delete-group-modal",{attrs:{active:t.deteleGroupModal,name:t.deleteData.name},on:{submit:function(e){t.deleteGroup(t.deleteData.id)}}}),t._v(" "),o("add-group-modal",{attrs:{active:t.addGroupModal},on:{close:t.closeAddGroupModal,submit:t.getGroupList}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=1.70588147953e7616e4fc.js.map