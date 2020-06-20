var bgm_src = require( '../mp3/hometheme.mp3');
var  kan_src = require( '../mp3/kan.mp3');
// var  chuizi_src = require( '../mp3/chuizi.mp3');
// var  wajue_src = require( '../mp3/wajue.mp3');
var  boom_src = require( '../mp3/boom.mp3');
// var  jiao_src = require( '../mp3/jiao.mp3');
// var  canjiao_src = require( '../mp3/canjiao.mp3');
// var  wolf_src = require( '../mp3/wolf.mp3');
// var  niujiao_src = require( '../mp3/niujiao.mp3');
var  choose_src = require( '../mp3/choose.mp3');
// var  gao_src = require( '../mp3/gao.mp3');
// var  get_src = require( '../mp3/get.mp3');
var  shui_src = require( '../mp3/shui.mp3');
var  ci_src = require( '../mp3/ci.mp3');
var  yanhua_src = require( '../mp3/yanhua.mp3');
var  gold_src = require( '../mp3/gold_reward.mp3');
var  success_src = require( '../mp3/success.mp3');
var  ranshao_src = require( '../mp3/ranshao.mp3');
// var  car_src = require( '../mp3/car1.mp3'); 
// var  gou_src = require( '../mp3/gou.mp3');
// var  reng_src = require( '../mp3/reng.mp3');
// var  yang_src = require( '../mp3/yang.mp3');
// var  guafeng_src = require( '../mp3/guafeng.mp3');
// var  saodi_src = require( '../mp3/saodi.mp3');
// var  opensd_src = require( '../mp3/openStoneDoor.mp3');
var shaozi_src = require('../mp3/shaozi.mp3');
var zhujiao_src = require('../mp3/zhujiao1.mp3');


window.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
window.gainNode = audioCtx.createGain();

function loadMusic(msrc, loop) {
  var _this = this;
  _this.b=null;
  _this.startTime=0;
  _this.startOffset=0;
  gainNode = audioCtx.createGain();
  _this.source = audioCtx.createBufferSource();
  _this.req = new XMLHttpRequest();
  _this.req.open('GET',msrc, true);
  _this.req.responseType = 'arraybuffer';
  _this.req.onload = function() {
    var audioData = _this.req.response;
    audioCtx.decodeAudioData(audioData, function(buffer) {
      _this.b=buffer;
      _this.source.buffer = _this.b;
      _this.source.connect(gainNode)
      gainNode.connect(audioCtx.destination);
    })
  };
  _this.req.send();
  _this.ready=function(){
    _this.source=null;
    _this.startTime = audioCtx.currentTime;
    _this.source=audioCtx.createBufferSource();
    _this.source.loop=loop;
    _this.source.buffer = _this.b;
    _this.source.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    _this.source.start(0);
    _this.source.stop(0);
  }
  _this.pause=function(){
    _this.source.stop();
    _this.startOffset += audioCtx.currentTime - _this.startTime;
  }
  _this.play=function(start){
    _this.source=null;
    _this.startTime = audioCtx.currentTime;
    _this.source=audioCtx.createBufferSource();
    _this.source.loop=loop;
    _this.source.buffer = _this.b;
    _this.source.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    if (start) {
      _this.source.start(0,_this.startOffset % _this.b.duration);
    }else{
      _this.source.start(0);
    }
    
  }
}



setTimeout(function(){
  window.bgm = new loadMusic(bgm_src,true);
  window.yanhua = new loadMusic(yanhua_src,false);
  window.kan = new loadMusic(kan_src,false);
  // window.chuizi = new loadMusic(chuizi_src,false);
  // console.log(bgm)
  window.shaozi = new loadMusic(shaozi_src,false);
  window.zhujiao = new loadMusic(zhujiao_src, false);
  window.gold = new loadMusic(gold_src,false);
  // window.gao = new loadMusic(gao_src,false);
  window.choose = new loadMusic(choose_src,false);
  
  // window.reng = new loadMusic(reng_src,false);
  // window.yang = new loadMusic(yang_src,false);
  window.ranshao = new loadMusic(ranshao_src,false);
  // window.car = new loadMusic(car_src, false);
  window.boom = new loadMusic(boom_src,false);
  window.ci = new loadMusic(ci_src,false);
  // window.zuan = new loadMusic(zuan_src,false);
  window.success = new loadMusic(success_src,false);
  // window.get= new loadMusic(get_src,false);
  // window.jiao= new loadMusic(jiao_src,false);
  // window.niujiao= new loadMusic(niujiao_src,false);
  // window.canjiao= new loadMusic(canjiao_src,false);
  
  // window.wolf= new loadMusic(wolf_src,false);
  
  window.shui= new loadMusic(shui_src,false);
  // window.wajue= new loadMusic(wajue_src,false);
  // window.guafeng= new loadMusic(guafeng_src,false);
  // window.opensd= new loadMusic(opensd_src,false);
  
  // for (var i = 0; i < mp3Arr.length; i++) {
  //   window.bgm = new loadMusic(bgm_src,true);
    
  // }
  
  // window.audioArr=[bgm,yanhua,gold,wajue,jiao];
},500)

window.bgm_state = false;
window.bgm_play = function()  {
  window.bgm_state = true;
  bgm.play(0);
  yanhua.ready();
  // shaozi.ready();
  zhujiao.ready();
  // canjiao.ready();
  gold.ready();
  // chuizi.ready();
  // choose.ready();
  // reng.ready();
  // yang.ready();
  ranshao.ready();
  // car.ready();
  // wolf.ready();
  // guafeng.ready();
  // saodi.ready();
  // get.ready();
  // jiao.ready();
  // niujiao.ready();
  // gao.ready();
  shui.ready();
  ci.ready();
  // gou.ready();
  boom.ready();
  // zuan.ready();
  // wajue.ready();
  kan.ready();
  // opensd.ready();
  success.ready();
  musicState = "play";
  // wb.open.alpha=1;
}

// module.exports = loadMusic