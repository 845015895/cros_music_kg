webpackJsonp([1],{"4R0J":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},a=[],s={render:n,staticRenderFns:a};e.a=s},DICR:function(t,e,i){"use strict";e.a={name:"app"}},M93x:function(t,e,i){"use strict";function n(t){i("TryY")}var a=i("DICR"),s=i("4R0J"),r=i("46Yf"),o=n,u=r(a.a,s.a,!1,o,null,null);e.a=u.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("MVSX"),a=i("M93x"),s=i("YaEn");n.a.config.productionTip=!1,new n.a({el:"#app",router:s.a,template:"<App/>",components:{App:a.a}})},TryY:function(t,e){},YaEn:function(t,e,i){"use strict";var n=i("MVSX"),a=i("zO6J"),s=i("dZxv");i("a1wS");n.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"music",component:s.a}]})},a1wS:function(t,e,i){"use strict";function n(){this.fontSize=Number(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.replace("px","")),this.init()}n.prototype={setFontSize:function(){var t=document.documentElement,e=t.getBoundingClientRect().width;e>500&&(e=500);var i=e/20;t.style.fontSize=i+"px";var n=Number(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.replace("px",""));i!==n&&(t.style.fontSize=i*(i/n)+"px"),this.fontSize=i},ready:function(){var t=void 0,e=this;window.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(e.setFontSize.bind(e),300)},!1)},init:function(){this.setFontSize(),this.ready()},px2rem:function(t){return 20/375*t},rem2px:function(t){return t*this.fontSize},resetPx:function(t){return this.rem2px(this.px2rem(t))}},e.a=new n},btu5:function(t,e,i){"use strict";var n=i("tra3"),a=i.n(n),s=i("a1wS");e.a={data:function(){return{musicName:"",songList:[],data:"",musicId:"",musicUrl:"//music.163.com/outchain/player?type=2&id=35470530&auto=1&height=66",singer:"",width:"",height:""}},created:function(){var t=this;t.width=s.a.resetPx(375),t.height=s.a.resetPx(80)},methods:{getData:function(t){var e=this;a.a.ajax({url:"/api/search/get/?s="+t+"&limit=40&type=1&offset=0",type:"POST",dataType:"json",success:function(t){e.data=t.result,e.songList=e.data.songs},error:function(){console.log(arguments)}})},setMusicUrl:function(t){var e=this;e.musicId=e.songList[t].id,e.musicUrl="//music.163.com/outchain/player?type=2&id="+e.musicId+"&auto=1&height=66"}}}},dZxv:function(t,e,i){"use strict";function n(t){i("e439")}var a=i("btu5"),s=i("u4+3"),r=i("46Yf"),o=n,u=r(a.a,s.a,!1,o,"data-v-46263b4e",null);e.a=u.exports},e439:function(t,e){},"u4+3":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper",attrs:{id:"main"}},[i("iframe",{attrs:{frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",width:t.width,height:t.height,src:t.musicUrl}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.musicName,expression:"musicName"}],staticClass:"searchBox",attrs:{type:"text",placeholder:"歌曲/歌手"},domProps:{value:t.musicName},on:{input:function(e){e.target.composing||(t.musicName=e.target.value)}}}),t._v(" "),i("button",{staticClass:"searchBtn",on:{click:function(e){t.getData(t.musicName)}}},[t._v("搜索")]),t._v(" "),i("div",{staticClass:"songList"},[i("ul",t._l(t.songList,function(e,n){return i("li",{directives:[{name:"show",rawName:"v-show",value:t.songList,expression:"songList"}],on:{click:function(e){t.setMusicUrl(n)}}},[i("div",{staticClass:"musicBar"},[i("p",[t._v(t._s(e.name+"  ("+e.album.name+")"))]),t._v(" "),i("p",[t._v(t._s(e.artists[0].name))])])])}))])])},a=[],s={render:n,staticRenderFns:a};e.a=s}},["NHnr"]);
//# sourceMappingURL=app.762f3e9ec16c38a5fa89.js.map