webpackJsonp([0],{"4R0J":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},a=[],n={render:s,staticRenderFns:a};e.a=n},DICR:function(t,e,i){"use strict";e.a={name:"app"}},Hf0q:function(t,e,i){t.exports=i.p+"static/img/player_logo1.52a19f4.png"},M93x:function(t,e,i){"use strict";function s(t){i("TryY")}var a=i("DICR"),n=i("4R0J"),r=i("46Yf"),o=s,c=r(a.a,n.a,!1,o,null,null);e.a=c.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("MVSX"),a=i("M93x"),n=i("YaEn");s.a.config.productionTip=!1,new s.a({el:"#app",router:n.a,template:"<App/>",components:{App:a.a}})},TryY:function(t,e){},YaEn:function(t,e,i){"use strict";var s=i("MVSX"),a=i("zO6J"),n=i("dZxv");i("a1wS");s.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"music",component:n.a}]})},a1wS:function(t,e,i){"use strict";function s(){this.fontSize=Number(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.replace("px","")),this.init()}s.prototype={setFontSize:function(){var t=document.documentElement,e=t.getBoundingClientRect().width;e>500&&(e=500);var i=e/20;t.style.fontSize=i+"px";var s=Number(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.replace("px",""));i!==s&&(t.style.fontSize=i*(i/s)+"px"),this.fontSize=i},ready:function(){var t=void 0,e=this;window.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(e.setFontSize.bind(e),300)},!1)},init:function(){this.setFontSize(),this.ready()},px2rem:function(t){return 20/375*t},rem2px:function(t){return t*this.fontSize},resetPx:function(t){return this.rem2px(this.px2rem(t))}},e.a=new s},btu5:function(t,e,i){"use strict";var s=i("tra3"),a=i.n(s),n=i("a1wS");e.a={data:function(){return{musicName:"",songList:[],data:"",musicId:"",musicUrl:"",singer:"",width:"",height:"",showLyrics:!1,isPlaying:!1,song_name:"橙子音乐",author_name:"易子程",lyrics:[],playTime:"00:00",allTime:"00:00",showTime:!1,isLight:!1}},created:function(){this.getData("")},mounted:function(){var t=this,e=document.querySelector("#audio"),i=document.querySelector("#bar"),s=document.querySelector("#control"),r=void 0,o=void 0,c=void 0,u=void 0;e.addEventListener("timeupdate",function(){var l=e.currentTime/e.duration;i.style.width=progress.offsetWidth*l+"px",s.style.left=progress.offsetWidth*l-10+"px",isNaN(e.duration)||(c=Math.floor(Math.floor(e.duration)/60),u=Math.floor(e.duration)%60,t.allTime=(c>9?c:"0"+c)+":"+(u>9?u:"0"+u)),Math.floor(e.currentTime)<10?t.playTime="00:0"+Math.floor(e.currentTime):Math.floor(e.currentTime)>=10&&Math.floor(e.currentTime)<60?t.playTime="00:"+Math.floor(e.currentTime):(r=Math.floor(Math.floor(e.currentTime)/60),o=Math.floor(e.currentTime)%60,t.playTime=(r>9?r:"0"+r)+":"+(o>9?o:"0"+o));for(var m=0;m<t.lyrics.length;m++)e.currentTime>t.lyrics[m].time&&(t.isLight=m,a()(".lyricsBar").css("top",n.a.resetPx(150)-m*n.a.resetPx(30)))},!1)},methods:{getData:function(t){var e=this;a.a.ajax({url:"http://songsearch.kugou.com/song_search_v2?keyword="+t+"&page=1&clientver=&platform=WebFilter",type:"GET",dataType:"json",success:function(t){e.data=t.data,e.songList=e.data.lists,e.showLyrics=!1},error:function(){console.log(arguments)}})},setMusicUrl:function(t){var e=this;e.lyrics=[],e.musicId=e.songList[t].FileHash;var i=document.querySelector("#audio");a.a.ajax({url:"http://www.kugou.com/yy/index.php?r=play/getdata&hash="+e.musicId,type:"GET",dataType:"json",success:function(t){e.musicUrl=t.data.play_url,i.loop=!0,i.load(),e.isPlaying=!1,e.showName=!0,e.song_name=t.data.song_name,e.author_name=t.data.author_name,e.showLyrics=!0;var s=t.data.lyrics.split("\r\n");e.render(s)},error:function(){console.log(arguments)}})},play:function(){var t=document.querySelector("#audio");this.isPlaying||(t.play(),this.isPlaying=!0,this.showTime=!0)},stop:function(){var t=document.querySelector("#audio");this.isPlaying&&(t.pause(),this.isPlaying=!1)},render:function(t){var e=/\[\d{2}:\d{2}.\d{2}\]/g,i=this;for(var s in t)if(""!==t[s]){var a={},n="",r="",o="";n=t[s].match(e),r=n[0],o=r.slice(1,-1).split(":"),a.time=60*parseInt(o[0],10)+parseFloat(o[1]),a.lyricsStr=t[s].replace(e,""),i.lyrics.push(a)}}}}},dZxv:function(t,e,i){"use strict";function s(t){i("e439")}var a=i("btu5"),n=i("u4+3"),r=i("46Yf"),o=s,c=r(a.a,n.a,!1,o,"data-v-46263b4e",null);e.a=c.exports},e439:function(t,e){},"u4+3":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper",attrs:{id:"main"}},[s("img",{staticClass:"player_logo",attrs:{src:i("Hf0q"),alt:""}}),t._v(" "),s("div",{staticClass:"audioBar"},[s("div",{staticClass:"showName"},[s("p",{staticClass:"songName"},[t._v(t._s(t.song_name))]),t._v(" "),s("p",{staticClass:"authorName"},[t._v(t._s(t.author_name))])]),t._v(" "),t._m(0),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showTime,expression:"showTime"}],staticClass:"time"},[s("div",[t._v(t._s(t.playTime))]),s("div",[t._v(t._s(t.allTime))])]),t._v(" "),s("audio",{attrs:{id:"audio",src:t.musicUrl,loop:"loop",controlsList:"nodownload",preload:"auto"}},[t._v("\n      亲 您的浏览器不支持html5的audio标签\n    ")])]),t._v(" "),s("s",{staticClass:"line"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.musicName,expression:"musicName"}],staticClass:"searchBox",attrs:{type:"text",placeholder:"歌曲/歌手"},domProps:{value:t.musicName},on:{input:function(e){e.target.composing||(t.musicName=e.target.value)}}}),t._v(" "),s("button",{staticClass:"searchBtn",on:{click:function(e){t.getData(t.musicName)}}},[t._v("搜索")]),t._v(" "),s("div",{class:{songListLy:t.showLyrics,songList:!t.showLyrics}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showLyrics,expression:"showLyrics"}],staticClass:"lyrics"},[s("div",{staticClass:"lyricsBar"},t._l(t.lyrics,function(e,i){return s("p",{class:{light:t.isLight===i}},[t._v(t._s(e.lyricsStr))])}))]),t._v(" "),s("ul",{directives:[{name:"show",rawName:"v-show",value:!t.showLyrics,expression:"!showLyrics"}]},t._l(t.songList,function(e,i){return s("li",{directives:[{name:"show",rawName:"v-show",value:t.songList,expression:"songList"}],on:{click:function(e){t.setMusicUrl(i)}}},[s("div",{staticClass:"musicBar"},[s("p",[t._v(t._s(e.SongName))]),t._v(" "),s("p",[t._v(t._s(e.SingerName))])])])}))]),t._v(" "),s("div",{staticClass:"audioTool"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isPlaying,expression:"!isPlaying"}],staticClass:"btn playBtn",on:{click:function(e){t.play()}}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}],staticClass:"btn pauseBtn",on:{click:function(e){t.stop()}}})])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"progress"}},[i("span",{attrs:{id:"bar"}},[i("div",{attrs:{id:"control"}})])])}],n={render:s,staticRenderFns:a};e.a=n}},["NHnr"]);
//# sourceMappingURL=app.a1fdfceb62e04dccd97b.js.map