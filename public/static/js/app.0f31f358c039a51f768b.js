webpackJsonp([0],{"4R0J":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},s=[],a={render:n,staticRenderFns:s};e.a=a},DICR:function(t,e,i){"use strict";e.a={name:"app"}},Hf0q:function(t,e,i){t.exports=i.p+"static/img/player_logo1.52a19f4.png"},M93x:function(t,e,i){"use strict";function n(t){i("TryY")}var s=i("DICR"),a=i("4R0J"),r=i("46Yf"),o=n,c=r(s.a,a.a,!1,o,null,null);e.a=c.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("MVSX"),s=i("M93x"),a=i("YaEn");n.a.config.productionTip=!1,new n.a({el:"#app",router:a.a,template:"<App/>",components:{App:s.a}})},TryY:function(t,e){},YaEn:function(t,e,i){"use strict";var n=i("MVSX"),s=i("zO6J"),a=i("dZxv");i("a1wS");n.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"music",component:a.a}]})},a1wS:function(t,e,i){"use strict";function n(){this.fontSize=Number(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.replace("px","")),this.init()}n.prototype={setFontSize:function(){var t=document.documentElement,e=t.getBoundingClientRect().width;e>500&&(e=500);var i=e/20;t.style.fontSize=i+"px";var n=Number(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.replace("px",""));i!==n&&(t.style.fontSize=i*(i/n)+"px"),this.fontSize=i},ready:function(){var t=void 0,e=this;window.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(e.setFontSize.bind(e),300)},!1)},init:function(){this.setFontSize(),this.ready()},px2rem:function(t){return 20/375*t},rem2px:function(t){return t*this.fontSize},resetPx:function(t){return this.rem2px(this.px2rem(t))}},e.a=new n},btu5:function(t,e,i){"use strict";var n=i("tra3"),s=i.n(n),a=i("a1wS");e.a={data:function(){return{musicName:"",songList:[],data:"",musicId:"",musicUrl:"",singer:"",width:"",height:"",showLyrics:!1,isPlaying:!1,song_name:"橙子音乐",author_name:"易子程",lyrics:[],playTime:"00:00",allTime:"00:00",showTime:!1,isLight:!1,currentIndex:""}},created:function(){this.getData("")},mounted:function(){var t=this,e=document.querySelector("#audio"),i=document.querySelector("#bar"),n=document.querySelector("#progress"),r=document.querySelector("#control"),o=void 0,c=void 0,u=void 0,l=void 0;e.loop=!1,e.addEventListener("timeupdate",function(){var d=e.currentTime/e.duration;i.style.width=n.offsetWidth*d+"px",r.style.left=n.offsetWidth*d-10+"px",isNaN(e.duration)||(u=Math.floor(Math.floor(e.duration)/60),l=Math.floor(e.duration)%60,t.allTime=(u>9?u:"0"+u)+":"+(l>9?l:"0"+l)),Math.floor(e.currentTime)<10?t.playTime="00:0"+Math.floor(e.currentTime):Math.floor(e.currentTime)>=10&&Math.floor(e.currentTime)<60?t.playTime="00:"+Math.floor(e.currentTime):(o=Math.floor(Math.floor(e.currentTime)/60),c=Math.floor(e.currentTime)%60,t.playTime=(o>9?o:"0"+o)+":"+(c>9?c:"0"+c));for(var m=0;m<t.lyrics.length;m++)e.currentTime>t.lyrics[m].time&&(t.isLight=m,s()(".lyricsBar").css("top",a.a.resetPx(150)-m*a.a.resetPx(30)))},!1),document.addEventListener("WeixinJSBridgeReady",function(){t.auto()},!1)},methods:{getData:function(t){var e=this;s.a.ajax({url:"/song_search_v2?keyword="+t+"&page=1&clientver=&platform=WebFilter",type:"GET",dataType:"json",success:function(t){e.data=t.data,e.songList=e.data.lists,e.showLyrics=!1},error:function(){console.log(arguments)}})},setMusicUrl:function(t){var e=this;e.currentIndex=t,e.lyrics=[],e.musicId=e.songList[t].FileHash;var i=document.querySelector("#audio");s.a.ajax({url:"/yy/index.php?r=play/getdata&hash="+e.musicId,type:"GET",dataType:"json",success:function(t){e.musicUrl=t.data.play_url,i.load(),e.isPlaying=!1,e.showName=!0,e.song_name=t.data.song_name,e.author_name=t.data.author_name,e.showLyrics=!0;var n=t.data.lyrics.split("\r\n");e.render(n),s()(".lyricsBar").css("top",a.a.resetPx(150))},error:function(){console.log(arguments)}})},play:function(){var t=document.querySelector("#audio");this.isPlaying||(t.load(),t.play(),document.addEventListener("WeixinJSBridgeReady",function(){t.play()},!1),this.isPlaying=!0,this.showTime=!0)},stop:function(){var t=document.querySelector("#audio");this.isPlaying&&(t.pause(),this.isPlaying=!1)},render:function(t){var e=/\[\d{2}:\d{2}.\d{2}\]/g,i=this;for(var n in t)if(""!==t[n]){var s={},a="",r="",o="";a=t[n].match(e),r=a[0],o=r.slice(1,-1).split(":"),s.time=60*parseInt(o[0],10)+parseFloat(o[1]),s.lyricsStr=t[n].replace(e,""),i.lyrics.push(s)}},canplaythrough:function(){this.play()},musicEnd:function(t){var e=t.target,i=this;i.isPlaying=!1,e.currentTime=0,++i.currentIndex,i.currentIndex>=i.songList.length&&(i.currentIndex=0),i.setMusicUrl(i.currentIndex)},next:function(){var t=document.querySelector("#audio"),e=this;e.isPlaying=!1,t.currentTime=0,++e.currentIndex,e.currentIndex>=e.songList.length&&(e.currentIndex=0),e.setMusicUrl(e.currentIndex)},back:function(){var t=document.querySelector("#audio"),e=this;e.isPlaying=!1,t.currentTime=0,--e.currentIndex,e.currentIndex<0&&(e.currentIndex=e.songList.length-1),e.setMusicUrl(e.currentIndex)}}}},dZxv:function(t,e,i){"use strict";function n(t){i("e439")}var s=i("btu5"),a=i("u4+3"),r=i("46Yf"),o=n,c=r(s.a,a.a,!1,o,"data-v-46263b4e",null);e.a=c.exports},e439:function(t,e){},"u4+3":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",attrs:{id:"main"}},[n("img",{staticClass:"player_logo",attrs:{src:i("Hf0q"),alt:""}}),t._v(" "),n("div",{staticClass:"audioBar"},[n("div",{staticClass:"showName"},[n("p",{staticClass:"songName"},[t._v(t._s(t.song_name))]),t._v(" "),n("p",{staticClass:"authorName"},[t._v(t._s(t.author_name))])]),t._v(" "),t._m(0),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showTime,expression:"showTime"}],staticClass:"time"},[n("div",[t._v(t._s(t.playTime))]),t._v(" "),n("div",[t._v(t._s(t.allTime))])]),t._v(" "),n("audio",{attrs:{id:"audio",src:t.musicUrl,controlsList:"nodownload",preload:"auto"},on:{ended:function(e){t.musicEnd(e)},canplay:t.canplaythrough}},[t._v("\n      亲 您的浏览器不支持html5的audio标签\n    ")])]),t._v(" "),n("s",{staticClass:"line"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.musicName,expression:"musicName"}],staticClass:"searchBox",attrs:{type:"text",placeholder:"歌曲/歌手"},domProps:{value:t.musicName},on:{input:function(e){e.target.composing||(t.musicName=e.target.value)}}}),t._v(" "),n("button",{staticClass:"searchBtn",on:{click:function(e){t.getData(t.musicName)}}},[t._v("搜索")]),t._v(" "),n("div",{class:{songListLy:t.showLyrics,songList:!t.showLyrics}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showLyrics,expression:"showLyrics"}],staticClass:"lyrics"},[n("div",{staticClass:"lyricsBar"},t._l(t.lyrics,function(e,i){return n("p",{class:{light:t.isLight===i}},[t._v(t._s(e.lyricsStr))])}))]),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:!t.showLyrics,expression:"!showLyrics"}]},t._l(t.songList,function(e,i){return n("li",{directives:[{name:"show",rawName:"v-show",value:t.songList,expression:"songList"}],on:{click:function(e){t.setMusicUrl(i)}}},[n("div",{staticClass:"musicBar"},[n("p",[t._v(t._s(e.SongName))]),t._v(" "),n("p",[t._v(t._s(e.SingerName))])])])}))]),t._v(" "),n("div",{staticClass:"audioTool"},[n("div",{staticClass:"skipBtn back",on:{click:function(e){t.next()}}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isPlaying,expression:"!isPlaying"}],staticClass:"btn playBtn",attrs:{id:"playBtn"},on:{click:function(e){t.play()}}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}],staticClass:"btn pauseBtn",on:{click:function(e){t.stop()}}}),t._v(" "),n("div",{staticClass:"skipBtn next",on:{click:function(e){t.back()}}})])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"progress"}},[i("span",{attrs:{id:"bar"}},[i("div",{attrs:{id:"control"}})])])}],a={render:n,staticRenderFns:s};e.a=a}},["NHnr"]);
//# sourceMappingURL=app.0f31f358c039a51f768b.js.map