(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96068e84"],{"0d92":function(e,t,a){"use strict";a("e6a6")},"7c22":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".egg[data-v-0db462a3]{padding:10px 0}.ant-btn[data-v-0db462a3]{margin:10px 10px 0 0}",""]),e.exports=t},e6a6:function(e,t,a){var n=a("7c22");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("499e").default;r("1fb1813a",n,!0,{sourceMap:!1,shadowMode:!1})},f820:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",[a("h2",[e._v("Nginx UI")]),a("p",[e._v("Yet another WebUI for Nginx")]),a("p",[e._v("Version: "+e._s(e.version)+" ("+e._s(e.build_id)+")")]),a("h3",[e._v("项目组")]),a("p",[e._v("Designer："),a("a",{attrs:{href:"https://jackyu.cn/"}},[e._v("@0xJacky")])]),a("h3",[e._v("技术栈")]),a("p",[e._v("Go")]),a("p",[e._v("Gin")]),a("p",[e._v("Vue")]),a("p",[e._v("Websocket")]),a("h3",[e._v("开源协议")]),a("p",[e._v("GNU General Public License v2.0")]),a("p",[e._v("Copyright © 2020 - "+e._s(e.this_year)+" 0xJacky ")])])},r=[],s=a("1da1"),i=(a("96cf"),{name:"About",data:function(){var e,t=new Date;return{this_year:t.getFullYear(),version:"1.0.0",build_id:null!==(e="15")&&void 0!==e?e:"开发模式",api_root:"/api"}},methods:{changeUserPower:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$store.dispatch("update_mock_user",{power:e});case 2:return a.next=4,t.$api.user.info();case 4:return a.next=6,t.$message.success("修改成功");case 6:case"end":return a.stop()}}),a)})))()}}}),o=i,c=(a("0d92"),a("2877")),u=Object(c["a"])(o,n,r,!1,null,"0db462a3",null);t["default"]=u.exports}}]);