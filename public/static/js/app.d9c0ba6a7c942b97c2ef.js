webpackJsonp([0],{"4R0J":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],a={render:i,staticRenderFns:n};e.a=a},DICR:function(t,e,s){"use strict";e.a={name:"app"}},M93x:function(t,e,s){"use strict";function i(t){s("TryY")}var n=s("DICR"),a=s("4R0J"),o=s("46Yf"),r=i,c=o(n.a,a.a,!1,r,null,null);e.a=c.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("MVSX"),n=s("M93x"),a=s("YaEn");i.a.config.productionTip=!1,new i.a({el:"#app",router:a.a,template:"<App/>",components:{App:n.a}})},TryY:function(t,e){},YaEn:function(t,e,s){"use strict";var i=s("MVSX"),n=s("zO6J"),a=s("dZxv");s("a1wS");i.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"music",component:a.a}]})},a1wS:function(t,e,s){"use strict";function i(){this.fontSize=Number(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.replace("px","")),this.init()}i.prototype={setFontSize:function(){var t=document.documentElement,e=t.getBoundingClientRect().width;e>500&&(e=500);var s=e/20;t.style.fontSize=s+"px";var i=Number(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.replace("px",""));s!==i&&(t.style.fontSize=s*(s/i)+"px"),this.fontSize=s},ready:function(){var t=void 0,e=this;window.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(e.setFontSize.bind(e),300)},!1)},init:function(){this.setFontSize(),this.ready()},px2rem:function(t){return 20/375*t},rem2px:function(t){return t*this.fontSize},resetPx:function(t){return this.rem2px(this.px2rem(t))}},e.a=new i},aipQ:function(t,e,s){t.exports=s.p+"static/img/noMusic.f97b067.png"},btu5:function(t,e,s){"use strict";var i=s("tra3"),n=s.n(i),a=s("a1wS");e.a={data:function(){return{musicName:"",songList:[],data:"",musicId:"",musicUrl:"http://fs.w.kugou.com/201710311435/2784647bce28c10808e204f66f88680b/G001/M0B/12/19/QQ0DAFS43jOATIosADaWAFwMkd8070.mp3",singer:"",width:"",height:"",isMusic:!1}},created:function(){var t=this;t.width=a.a.resetPx(375),t.height=a.a.resetPx(85)},methods:{getData:function(t){var e=this;n.a.ajax({url:"http://songsearch.kugou.com/song_search_v2?keyword="+t+"&page=1&clientver=&platform=WebFilter",type:"GET",dataType:"json",success:function(t){e.data=t.data,e.songList=e.data.lists,e.isMusic=!0},error:function(){console.log(arguments)}})},setMusicUrl:function(t){var e=this;e.musicId=e.songList[t].FileHash,n.a.ajax({url:"http://www.kugou.com/yy/index.php?r=play/getdata&hash="+e.musicId,type:"GET",dataType:"json",success:function(t){e.musicUrl=t.data.play_url,console.log(e.musicUrl)},error:function(){console.log(arguments)}})}}}},dZxv:function(t,e,s){"use strict";function i(t){s("e439")}var n=s("btu5"),a=s("u4+3"),o=s("46Yf"),r=i,c=o(n.a,a.a,!1,r,"data-v-46263b4e",null);e.a=c.exports},e439:function(t,e){},"u4+3":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper",attrs:{id:"main"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.musicName,expression:"musicName"}],staticClass:"searchBox",attrs:{type:"text",placeholder:"歌曲/歌手"},domProps:{value:t.musicName},on:{input:function(e){e.target.composing||(t.musicName=e.target.value)}}}),t._v(" "),i("button",{staticClass:"searchBtn",on:{click:function(e){t.getData(t.musicName)}}},[t._v("搜索")]),t._v(" "),i("div",{staticClass:"songList"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isMusic,expression:"!isMusic"}],staticClass:"noMusic"},[i("img",{staticClass:"icon",attrs:{src:s("aipQ"),alt:"*"}}),t._v("\n      暂无音乐，请搜索！\n    ")]),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:t.isMusic,expression:"isMusic"}]},t._l(t.songList,function(e,s){return i("li",{directives:[{name:"show",rawName:"v-show",value:t.songList,expression:"songList"}],on:{click:function(e){t.setMusicUrl(s)}}},[i("div",{staticClass:"musicBar"},[i("p",[t._v(t._s(e.SongName+" ("+e.AlbumName+")"))]),t._v(" "),i("p",[t._v(t._s(e.SingerName))])])])}))]),t._v(" "),i("div",{staticClass:"audioBar"},[i("audio",{attrs:{src:t.musicUrl,controls:"controls",loop:"loop",autoplay:"autoplay",controlsList:"nodownload"}},[t._v("亲 您的浏览器不支持html5的audio标签")])])])},n=[],a={render:i,staticRenderFns:n};e.a=a}},["NHnr"]);
//# sourceMappingURL=app.d9c0ba6a7c942b97c2ef.js.map