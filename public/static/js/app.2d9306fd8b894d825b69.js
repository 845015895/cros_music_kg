webpackJsonp([0],{"4R0J":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},s=[],a={render:n,staticRenderFns:s};e.a=a},DICR:function(t,e,i){"use strict";e.a={name:"app"}},M93x:function(t,e,i){"use strict";function n(t){i("TryY")}var s=i("DICR"),a=i("4R0J"),o=i("46Yf"),r=n,u=o(s.a,a.a,!1,r,null,null);e.a=u.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("MVSX"),s=i("M93x"),a=i("YaEn");n.a.config.productionTip=!1,new n.a({el:"#app",router:a.a,template:"<App/>",components:{App:s.a}})},TryY:function(t,e){},YaEn:function(t,e,i){"use strict";var n=i("MVSX"),s=i("zO6J"),a=i("dZxv");i("a1wS");n.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"music",component:a.a}]})},a1wS:function(t,e,i){"use strict";function n(){this.fontSize=Number(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.replace("px","")),this.init()}n.prototype={setFontSize:function(){var t=document.documentElement,e=t.getBoundingClientRect().width;e>500&&(e=500);var i=e/20;t.style.fontSize=i+"px";var n=Number(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.replace("px",""));i!==n&&(t.style.fontSize=i*(i/n)+"px"),this.fontSize=i},ready:function(){var t=void 0,e=this;window.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(e.setFontSize.bind(e),300)},!1)},init:function(){this.setFontSize(),this.ready()},px2rem:function(t){return 20/375*t},rem2px:function(t){return t*this.fontSize},resetPx:function(t){return this.rem2px(this.px2rem(t))}};new n},aipQ:function(t,e,i){t.exports=i.p+"static/img/noMusic.f97b067.png"},btu5:function(t,e,i){"use strict";var n=i("tra3"),s=i.n(n);i("a1wS");e.a={data:function(){return{musicName:"",songList:[],data:"",musicId:"",musicUrl:"http://fs.w.kugou.com/201710311435/2784647bce28c10808e204f66f88680b/G001/M0B/12/19/QQ0DAFS43jOATIosADaWAFwMkd8070.mp3",singer:"",width:"",height:"",isMusic:!1,isPlaying:!1,song_name:"稻香",author_name:"周杰伦"}},created:function(){this.getData("")},mounted:function(){var t=document.querySelector("#audio"),e=document.querySelector("#bar"),i=document.querySelector("#control");t.addEventListener("timeupdate",function(){var n=t.currentTime/t.duration;e.style.width=progress.offsetWidth*n+"px",i.style.left=progress.offsetWidth*n-12+"px"},!1)},methods:{getData:function(t){var e=this;s.a.ajax({url:"/song_search_v2?keyword="+t+"&page=1&clientver=&platform=WebFilter",type:"GET",dataType:"json",success:function(t){e.data=t.data,e.songList=e.data.lists,e.isMusic=!0},error:function(){console.log(arguments)}})},setMusicUrl:function(t){var e=this;e.musicId=e.songList[t].FileHash;var i=document.querySelector("#audio");s.a.ajax({url:"/yy/index.php?r=play/getdata&hash="+e.musicId,type:"GET",dataType:"json",success:function(t){e.musicUrl=t.data.play_url,i.loop=!0,i.load(),e.isPlaying=!1,e.showName=!0,e.song_name=t.data.song_name,e.author_name=t.data.author_name},error:function(){console.log(arguments)}})},play:function(){var t=document.querySelector("#audio");this.isPlaying||(t.play(),this.isPlaying=!0)},stop:function(){var t=document.querySelector("#audio");this.isPlaying&&(t.pause(),this.isPlaying=!1)}}}},dZxv:function(t,e,i){"use strict";function n(t){i("e439")}var s=i("btu5"),a=i("u4+3"),o=i("46Yf"),r=n,u=o(s.a,a.a,!1,r,"data-v-46263b4e",null);e.a=u.exports},e439:function(t,e){},"u4+3":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",attrs:{id:"main"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.musicName,expression:"musicName"}],staticClass:"searchBox",attrs:{type:"text",placeholder:"歌曲/歌手"},domProps:{value:t.musicName},on:{input:function(e){e.target.composing||(t.musicName=e.target.value)}}}),t._v(" "),n("button",{staticClass:"searchBtn",on:{click:function(e){t.getData(t.musicName)}}},[t._v("搜索")]),t._v(" "),n("div",{staticClass:"songList"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isMusic,expression:"!isMusic"}],staticClass:"noMusic"},[n("img",{staticClass:"icon",attrs:{src:i("aipQ"),alt:"*"}}),t._v("\n      暂无音乐，请搜索！\n    ")]),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.isMusic,expression:"isMusic"}]},t._l(t.songList,function(e,i){return n("li",{directives:[{name:"show",rawName:"v-show",value:t.songList,expression:"songList"}],on:{click:function(e){t.setMusicUrl(i)}}},[n("div",{staticClass:"musicBar"},[n("p",[t._v(t._s(e.SongName))]),t._v(" "),n("p",[t._v(t._s(e.SingerName))])])])}))]),t._v(" "),n("div",{staticClass:"audioBar"},[n("button",{directives:[{name:"show",rawName:"v-show",value:!t.isPlaying,expression:"!isPlaying"}],staticClass:"btn playBtn",on:{click:function(e){t.play()}}}),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}],staticClass:"btn pauseBtn",on:{click:function(e){t.stop()}}}),t._v(" "),n("marquee",[t._v(t._s(t.song_name+" - "+t.author_name))]),t._v(" "),t._m(0),t._v(" "),n("audio",{attrs:{id:"audio",src:t.musicUrl,loop:"loop",controlsList:"nodownload"}},[t._v("亲 您的浏览器不支持html5的audio标签")])],1)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"progress"}},[i("span",{attrs:{id:"bar"}}),t._v(" "),i("div",{attrs:{id:"control"}})])}],a={render:n,staticRenderFns:s};e.a=a}},["NHnr"]);
//# sourceMappingURL=app.2d9306fd8b894d825b69.js.map