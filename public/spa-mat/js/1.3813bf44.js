(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"7JVJ":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"color flex justify-center "},[n("div",{staticClass:"flex column test justify-center"},[n("div",{staticClass:"flex  row justify-between "},[n("div",{staticClass:"flex column items-center"},[n("q-btn",{staticClass:"fabBtn",attrs:{round:"",color:"white",icon:"accessibility","text-color":"primary"}}),t._v(" "),n("p",{staticClass:"q-mt-xs text-white"},[t._v("Información")])],1),t._v(" "),n("div",{staticClass:"flex column items-center"},[n("q-btn",{staticClass:"fabBtn",attrs:{round:"",color:"white",icon:"contact_support","text-color":"primary"}}),t._v(" "),n("p",{staticClass:"q-mt-xs text-white"},[t._v("Ayuda")])],1)]),t._v(" "),n("div",{staticClass:"flex  row justify-center "},[n("div",{staticClass:"flex column items-center"},[n("q-btn",{staticClass:"fabBtn fabBtn__accident",attrs:{round:"",color:"negative",icon:"track_changes","text-color":"white"},nativeOn:{click:function(e){return t.handleAccident(e)}}})],1)])])])},o=[];s._withStripped=!0;var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-modal",{model:{value:t.opened,callback:function(e){t.opened=e},expression:"opened"}},[n("h4",[t._v("BASIC MODAL")]),t._v(" "),n("q-btn",{attrs:{color:"primary",icon:"send"},on:{click:function(e){t.opened=!1}}})],1)},a=[];i._withStripped=!0;var c={data:function(){return{opened:!0}}},r=c,l=n("KHd+"),u=Object(l["a"])(r,i,a,!1,null,null,null),d=u.exports,f={created:function(){document.addEventListener("deviceready",this.onDeviceReady,!1)},components:{Modal:d},data:function(){return{position:{}}},methods:{onSuccess:function(t){console.log(t),this.position=t},onError:function(t){alert(t.message),console.log(t)},onDeviceReady:function(){navigator.geolocation.getCurrentPosition(this.onSuccess,this.onError)},handleAccident:function(){var t=this,e={data:{user:this.$store.state.auth.user._id,ajustador:this.$store.state.auth.user.ajustador,position:this.position},$socket:this.$socket};this.$q.dialog({title:"Warning",message:"¿Esta usted seguro?",ok:!0,cancel:!0,preventClose:!0}).then(function(){return t.$store.dispatch("sendAlert",e)})}}},p=f,v=(n("MZAG"),Object(l["a"])(p,s,o,!1,null,null,null));e["default"]=v.exports},GGLu:function(t,e,n){},MZAG:function(t,e,n){"use strict";var s=n("GGLu"),o=n.n(s);o.a}}]);