window.json_sprite = require('../images/sprite.json');
import sprite_ from '../images/sprite.png';

import yanhua1_ from '../images/yanhua1.png';
import yanhua2_ from '../images/yanhua2.png';
import yanhua3_ from '../images/yanhua2.png';

import yanwu1_ from '../images/yanwu.png';
import yanwu2_ from '../images/yanwu1.png';                                            
import mine_ from '../images/person.png';
import mine_2 from '../images/person2.png';
import heli_ from '../images/heli.png';
import huo_ from '../images/huo.png';
// import water_ from '../images/water.png';
import zhadan_ from '../images/zhadan.png';
import pig_ from '../images/pig.png';



import baoxiang_ from '../images/sma_img/sp/baoxiang.png';
import cao2_ from '../images/sma_img/sp/cao2.png';
import cao3_ from '../images/sma_img/sp/cao3.png';
import cao4_ from '../images/sma_img/sp/cao4.png';
import caodi2_ from '../images/sma_img/sp/caodi2.png';
import cloud_ from '../images/sma_img/sp/cloud.png';
import cao1_ from '../images/sma_img/sp/cao1.png';
import desk_ from '../images/sma_img/sp/desk.png';
import gouhuo_ from '../images/sma_img/sp/gouhuo.png';
import house_ from '../images/sma_img/sp/house.png';
import hu_ from '../images/sma_img/sp/hu.png';
import hua1_ from '../images/sma_img/sp/hua1.png';
import hua2_ from '../images/sma_img/sp/hua2.png';
import hua3_ from '../images/sma_img/sp/hua3.png';
import lake_ from '../images/sma_img/sp/lake.png';
import po_ from '../images/sma_img/sp/po.png';
import qiang_ from '../images/sma_img/sp/qiang.png';
import road2_ from '../images/sma_img/sp/road2.png';
import shu1_ from '../images/sma_img/sp/shu1.png';
import shu2_ from '../images/sma_img/sp/shu2.png';
import stone1_ from '../images/sma_img/sp/stone1.png';
import stone2_ from '../images/sma_img/sp/stone2.png';
import stoneRoad_ from '../images/sma_img/sp/stoneRoad.png';
import zhangpeng_ from '../images/sma_img/sp/zhangpeng.png';

window.sprite_ = sprite_;

window.baoxiang_ = baoxiang_;
window.cao2_ = cao2_;
window.cao3_ = cao3_;
window.cao4_ = cao4_;
window.caodi2_ = caodi2_;
window.cloud_ = cloud_;
window.cao1_ = cao1_;
window.desk_ = desk_;
window.gouhuo_ = gouhuo_;
window.house_ = house_;
window.hu_ = hu_;
window.hua1_ = hua1_;
window.hua2_ = hua2_;
window.hua3_ = hua3_;
window.lake_ = lake_;
window.po_ = po_;
window.qiang_ = qiang_;
window.road2_ = road2_;
window.shu1_ = shu1_;
window.shu2_ = shu2_;
window.stone1_ = stone1_;
window.stone2_ = stone2_;
window.stoneRoad_ = stoneRoad_;
window.zhangpeng_ = zhangpeng_;




// var yanhua3_all = new createjs.SpriteSheet({
//   framerate: 15,
//   "images": [yanhua3_],
//   "frames": {"regX": 0, "height":103, "count": 15, "regY":0, "width":103},
//   "animations": {
//     "start":[0,14,"stop",0.3],
//     "stop":[14],
//   },
// });

var yanhua1_all = new createjs.SpriteSheet({
  framerate: 15,
  "images": [yanhua1_],
  "frames": { "regX": 0, "height": 93, "count": 15, "regY": 0, "width": 93 },
  "animations": {
    "start": [0, 14, "stop", 0.3],
    "stop": [14],
  },
});

var yanhua3_all = new createjs.SpriteSheet({
  framerate: 15,
  "images": [yanhua3_],
  "frames": { "regX": 0, "height": 89, "count": 15, "regY": 0, "width": 90 },
  "animations": {
    "start": [0, 14, "stop", 0.3],
    "stop": [14],
  },
});

var yanhua2_all = new createjs.SpriteSheet({
  framerate: 15,
  "images": [yanhua2_],
  "frames": { "regX": 0, "height": 89, "count": 15, "regY": 0, "width": 90 },
  "animations": {
    "start": [0, 14, "stop", 0.3],
    "stop": [14],
  },
});



var pig_all = new createjs.SpriteSheet({
  framerate: 15,
  "images": [pig_],
  "frames": { "regX": 0, "height": 83, "count": 9, "regY": 0, "width": 92 },
  "animations": {
    "start": [0, 7, "stop", 0.2],
    "stop": [0],
    "back": [8],
  },
});

var zhadan_all = new createjs.SpriteSheet({
  framerate: 15,
  "images": [zhadan_],
  "frames": { "regX": 0, "height": 74, "count": 11, "regY": 0, "width": 74 },
  "animations": {
    "start": [0, 10, "start", 0.2],
    "stop": [0],
  },
});






var mine_all = new createjs.SpriteSheet({
  framerate: 15,
  "images": [mine_2],
  "frames": { "regX": 0, "height": 113, "count": 19, "regY": 0, "width": 109 },
  "animations": {
    "walk_bz": [0, 7, "walk_bz", 0.2],
    "kan": [8, 17, "stop", 0.2],
    "stop": [18],
  },
});

var heli_all = new createjs.SpriteSheet({
  framerate: 15,
  "images": [heli_],
  "frames": { "regX": 0, "height": 40, "count": 9, "regY": 0, "width": 42 },
  "animations": {
    "walk_bz": [0, 7, "walk_bz", 0.2],
    "stop": [8],
  },
});

var huo_all = new createjs.SpriteSheet({
  framerate: 15,
  "images": [huo_],
  "frames": { "regX": 0, "height": 98, "count": 8, "regY": 0, "width": 95 },
  "animations": {
    "start": [0, 7, "start", 0.35],
  },
});



var mine_all2 = new createjs.SpriteSheet({
  framerate: 15,
  "images": [mine_],
  "frames": { "regX": 0, "height": 133, "count": 15, "regY": 0, "width": 56 },
  "animations": {
    "chui": [0, 14, "stop", 0.2],
    "stop": [0],
  },
});




var yanwu1_all = new createjs.SpriteSheet({
  framerate: 15,
  "images": [yanwu1_],
  "frames": { "regX": 0, "height": 169, "count": 15, "regY": 0, "width": 188 },
  "animations": {
    "start": [0, 15, "last", 0.2],
    "last": [15],
    "start1": [0, 15, "start1", 0.2],
  },
});

var yanwu2_all = new createjs.SpriteSheet({
  framerate: 15,
  "images": [yanwu2_],
  "frames": { "regX": 0, "height": 120, "count": 16, "regY": 0, "width": 101 },
  "animations": {
    "start": [0, 15, "last", 0.35],
    "last": [15],
    "start1": [0, 15, "start1", 0.35],
  },
});

var resizerq = require("./resize.js");
resizerq.resizeContent("canvas");

window.onresize = function () {
  setTimeout(function () { resizerq.resizeContent("canvas") }, 500);
}
window.wsp = window.sprite || {};
setTimeout(function () {
  //开始前加载


  addSpriteSheet("yanhua3_all", yanhua3_all, "start", 1250, 50, 1, 0.5, 0.5);
  addSpriteSheet("yanhua1_all", yanhua1_all, "start", 1250, 50, 1, 0.5, 0.5);

  addSpriteSheet("yanhua33_all", yanhua3_all, "start", 1250, 50, 1, 0.5, 0.5);
  addSpriteSheet("yanhua11_all", yanhua1_all, "start", 1250, 50, 1, 0.5, 0.5);

  addSpriteSheet("yanhua333_all", yanhua3_all, "start", 1250, 50, 1, 0.5, 0.5);
  addSpriteSheet("yanhua111_all", yanhua1_all, "start", 1250, 50, 1, 0.5, 0.5);

  addSpriteSheet("yanhua2_all", yanhua2_all, "start", 1250, 50, 1, 0.5, 0.5);
  addSpriteSheet("yanhua22_all", yanhua2_all, "start", 1250, 50, 1, 0.5, 0.5);

  addSpriteSheet("yanwu_ani", yanwu1_all, "start", 823.8, 1284.6, 1, 0.5, 0.5);

  addSpriteSheet("zhayan_ani", yanwu2_all, "start", 1641.7, 777.0, 1, 0.5, 0.5);


  addSpriteSheet("mine_all_ani", mine_all, "stop", 571.5, 1345.2, 1, 0.5, 0.5);
  addSpriteSheet("mine_all_ani2", mine_all2, "stop", 1917.0, 668.7, 1, 0.55, 0.5);
  addSpriteSheet("heli_ani", heli_all, "stop", 541.5, 1398.5, 1, 0.55, 0.5);
  addSpriteSheet("pig_ani1", pig_all, "stop", 1382.4, 933.1, 1, 0.55, 0.5);
  addSpriteSheet("pig_ani2", pig_all, "stop", 1419.5, 957.8, 1, 0.55, 0.5);
  addSpriteSheet("huo_ani1", huo_all, "start", 1459.7, 914.5, 1, 0.55, 0.5);
  addSpriteSheet("huo_ani2", huo_all, "start", 1303.6, 953.2, 1, 0.55, 0.5);
  addSpriteSheet("huo_ani3", huo_all, "start", 1372.9, 978.0, 1, 0.55, 0.5);
  addSpriteSheet("zhadan_ani", zhadan_all, "start", 1598.4, 874.4, 1, 0.55, 0.5);
  


  addRectBitmap_simple('shu', 'shu', sprite_, json_sprite, 0.5, 0.5, 1548.7,751.9, "addArrAll", true);
  addRectBitmap_simple('shu_bian', 'shu_bian', sprite_, json_sprite, 0.5, 0.5, 1548.7,751.9, "addArrAll", true);

  addRectBitmap_simple('qiaoji', 'qiaoji', sprite_, json_sprite, 0.5, 0.5, 1669.9, 1287.6, "addArrAll", true);

  addRectBitmap_simple('yingzi', 'yingzi', sprite_, json_sprite, 0.5, 0.5, 528.9, 1355.9, "addArrAll", true);
  addRectBitmap_simple('jt', 'jt', sprite_, json_sprite, 0.5, 0.95, 596.6, 669.2, "addArrAll", true);

  addRectBitmap_simple('yingzi2', 'yingzi', sprite_, json_sprite, 0.5, 0.5, 487.1, 1379.0, "addArrAll", true);
  addRectBitmap_simple('yingzi3', 'yingzi', sprite_, json_sprite, 0.5, 0.5, 1860.0, 680.7 , "addArrAll", true);
  addRectBitmap_simple('qipao1', 'qipao1', sprite_, json_sprite, 0.9, 1, 413.9, 1119.1, "addArrAll", true);

  addRectBitmap_simple('go', 'go', sprite_, json_sprite, 0.5, 0.5, 809.6, 1453.6, "addArrAll", true);

  addRectBitmap_simple('choose_kuang', 'choose_kuang', sprite_, json_sprite, 0.5, 0.5, 970.3, 846.1, "addArrAll", true);
  addRectBitmap_simple('yellow1', 'yellow', sprite_, json_sprite, 0.5, 0.5, 970.3, 846.1, "addArrAll", true);
  addRectBitmap_simple('yellow2', 'yellow', sprite_, json_sprite, 0.5, 0.5, 971.8, 790.5, "addArrAll", true);
  addRectBitmap_simple('cha', 'cha', sprite_, json_sprite, 0.5, 0.5, 970.3, 846.1, "addArrAll", true);
  addRectBitmap_simple('gou', 'gou', sprite_, json_sprite, 0.5, 0.5, 971.8, 790.5, "addArrAll", true);
  addRectBitmap_simple('cha2', 'cha', sprite_, json_sprite, 0.5, 0.5, 970.3, 846.1, "addArrAll", true);
  addRectBitmap_simple('gou2', 'gou', sprite_, json_sprite, 0.5, 0.5, 971.8, 790.5, "addArrAll", true);
  addRectBitmap_simple('cs1_1', 'cs1_1', sprite_, json_sprite, 0.5, 0.5, 970.3, 846.1, "addArrAll", true);
  addRectBitmap_simple('cs1_2', 'cs1_2', sprite_, json_sprite, 0.5, 0.5, 971.8, 790.5, "addArrAll", true);
  addRectBitmap_simple('cs2_1', 'cs2_1', sprite_, json_sprite, 0.5, 0.5, 970.3, 846.1, "addArrAll", true);
  addRectBitmap_simple('cs2_2', 'cs2_2', sprite_, json_sprite, 0.5, 0.5, 971.8, 790.5, "addArrAll", true);
  addRectBitmap_simple('cs3_1', 'cs3_1', sprite_, json_sprite, 0.5, 0.5, 970.3, 846.1, "addArrAll", true);
  addRectBitmap_simple('cs3_2', 'cs3_2', sprite_, json_sprite, 0.5, 0.5, 971.8, 790.5, "addArrAll", true);
  // addRectBitmap_simple('cs4_1','cs4_1',sprite_,json_sprite,0.5,0.5,970.3,846.1,"addArrAll",true);
  // addRectBitmap_simple('cs4_2','cs4_2',sprite_,json_sprite,0.5,0.5,971.8,790.5,"addArrAll",true);
  addRectBitmap_simple('an1_1', 'muban', sprite_, json_sprite, 0.5, 0.5, 740.8, 1288.5 , "addArrAll", true);
  addRectBitmap_simple('an1_2', 'stone', sprite_, json_sprite, 0.36, 0.52, 744, 1308  , "addArrAll", true);
  addRectBitmap_simple('an2_1', 'cs2_1', sprite_, json_sprite, 0.8, 0.2, 1657.3, 1237.5, "addArrAll", true);
  addRectBitmap_simple('an2_2', 'cs2_2', sprite_, json_sprite, 0.5, 0.5, 1638.7, 1254.5, "addArrAll", true);
  addRectBitmap_simple('an3_1', 'cs3_1', sprite_, json_sprite, 0.5, 0.5, 2142.3, 996.6, "addArrAll", true);
  addRectBitmap_simple('an3_2', 'cs3_2', sprite_, json_sprite, 0.5, 0.5, 1638.7, 1254.5, "addArrAll", true);



  addRectBitmap_simple('fail', 'fail', sprite_, json_sprite, 0.5, 0.5, 1342.8, 664.1, "addArrAll", true);

  addRectBitmap_simple('hand', 'hand', sprite_, json_sprite, 0.5, 0.5, 971.8, 790.5, "addArrAll", true);
  addRectBitmap_simple('hand1', 'hand', sprite_, json_sprite, 0.5, 0.5, 971.8, 790.5, "addArrAll", true);
  addRectBitmap_simple('yellow3', 'baoshi2', sprite_, json_sprite, 0.5, 0.5, 985, 1021.0, "addArrAll", true);


  addRectBitmap_simple('sma_kuang', 'sma_kuang', sprite_, json_sprite, 0.5, 0.5, 10, 10, "addArrAll", false);
  addRectBitmap_simple('bag', 'bag', sprite_, json_sprite, 0.5, 0.5, 503, 839, "addArrAll", false);
  addRectBitmap_simple('open', 'open', sprite_, json_sprite, 0.5, 0.5, 781, 636, "addArrAll", false);
  addRectBitmap_simple('close', 'close', sprite_, json_sprite, 0.5, 0.5, 781, 636, "addArrAll", false);

  addRectBitmap_simple("logo", 'logo_ema', sprite_, json_sprite, 0.5, 0.5, 453, 785, "addArrAll", true);
  // addRectBitmap_simple("logo",'logo_ema',sprite_,json_sprite,0.5,0.5,453,785,"addArrAll",true);
  addRectBitmap_simple("pow_img", 'pow_img', sprite_, json_sprite, 0.5, 0.5, 453, 785, "addArrAll", true);
  addRectBitmap_simple("play_btn", 'play_btn', sprite_, json_sprite, 0.5, 0.5, 596, 1289, "addArrAll", true);

  // addRectBitmap_simple("play_btn2",'play_btn2',sprite_,json_sprite,0.5,0.5,596,1289,"addArrAll",true);



}, 350)

var start_pox = 46;
var start_poy = 460;
containerAll.y = -615;
containerAll3.y = containerAll3.y - start_poy;
containerAll2.y = containerAll2.y - start_poy;
containerAll.x = 0;
containerAll3.x = containerAll3.x - start_pox;
containerAll2.x = containerAll2.x - start_pox;

containerAll_yh.y = containerAll_yh.y - start_poy;
containerAll_yh.x = containerAll_yh.x - start_pox;

window.savex = stage.x; window.savey = stage.y;
stage.regX = stage.regY = 695;
stage.x = 695 + stage.x;
stage.y = 695 + stage.y;
stage.scaleX = stage.scaleY = 1.2;


setTimeout(function () {
  var map = require("./map.js");

  wb.sma_kuang.regX = 96 * 0.5;
  wb.sma_kuang.x = wb.sma_kuang.x + 96 * 0.5;
  wb.sma_kuang.regY = 100 * 0.5;
  wb.sma_kuang.y = wb.sma_kuang.y + 100 * 0.5;
  wb.bag.regX = 76 * 0.5;
  wb.bag.x = wb.bag.x + 76 * 0.5;
  wb.bag.regY = 79 * 0.5;
  wb.bag.y = wb.bag.y + 79 * 0.5;
  containerAll2_cs.addChild(wb.choose_kuang, wb.cs1_1, wb.cs1_2, wb.cs2_1, wb.cs2_2, wb.cs3_1, wb.cs3_2,
    wb.yellow1, wb.yellow2, wb.cha, wb.gou, wb.cha2, wb.gou2);
  wb.cha.scaleX = 0; wb.cha.scaleX = 0; wb.gou.scaleX = 0; wb.gou.scaleY = 0;
  wb.cha2.scaleX = 0; wb.cha2.scaleX = 0; wb.gou2.scaleX = 0; wb.gou2.scaleY = 0;
  wb.yellow1.alpha = wb.yellow2.alpha = 0.02;



  person.addChild(wb.yingzi, wb.yingzi2,wb.yingzi3, wsp.mine_all_ani2, wb.fail, wb.yellow3, wb.an2_2, wb.an3_1, wb.an3_2
    , wb.go, wb.qipao1, wsp.huo_ani1, wsp.pig_ani1, wsp.pig_ani2, wsp.huo_ani2, wsp.huo_ani3, wb.shu, wb.shu_bian, wsp.zhadan_ani);
  containerAll3.addChild(wb.sma_kuang, wb.bag, wb.open, wb.close, container3);
  containerAll2_cs.alpha = 0;

  person.addChild(wb.an1_1, wb.an1_2, wb.qiaoji, wb.an2_1, wb.an2_2, wb.an3_1, wb.an3_2, wb.yingzi, wsp.yanwu_ani, wsp.mine_all_ani, wsp.heli_ani, wsp.zhayan_ani);


  window.arr_zero = [wb.fail, wb.cs2_1, wb.cs2_2, wb.cs3_1, wb.cs3_2, wb.an1_1, wb.an1_2, wb.an2_1, wb.an2_2, wb.an3_1, wb.an3_2,
    wb.qiaoji, wsp.yanwu_ani, wb.yellow3, wb.go, wsp.huo_ani1, wsp.huo_ani2, wsp.huo_ani3, wb.shu_bian, wsp.zhadan_ani,wsp.zhayan_ani];


  window.arr_zero2 = [wb.qipao1];

  window.alphaZero = function (arr_zero) {
    for (var i = 0; i < arr_zero.length; i++) {
      arr_zero[i].alpha = 0;
    }
  }

  alphaZero(arr_zero);

  window.scaleZero = function (arr_zero) {
    for (var i = 0; i < arr_zero.length; i++) {
      arr_zero[i].scaleX = arr_zero[i].scaleY = 0;
    }
  }

  scaleZero(arr_zero2);

  wsp.mine_all_ani.skewY = 180;
  wb.fail.scaleX = wb.fail.scaleY = 1.3;
  // wsp.mine_all_ani.scaleX=wsp.mine_all_ani.scaleY=1.2;
  wb.qipao1.skewY = 180;
  wb.jt.scaleX = wb.jt.scaleY = 0.8;
  wsp.huo_ani1.scaleX = wsp.huo_ani1.scaleY=0.9;
  wsp.huo_ani2.scaleX = wsp.huo_ani2.scaleY = 1.1;
  wsp.zhadan_ani.scaleX = wsp.zhadan_ani.scaleY = 1.35

  wb.an3_1.scaleX = wb.an3_1.scaleY = 0.8; wb.an3_2.scaleX = wb.an3_2.scaleY = 0.8;
  wsp.heli_ani.scaleX = wsp.heli_ani.scaleY = 1.35;
  wsp.zhayan_ani.scaleX = wsp.zhayan_ani.scaleY = 3;

  wb.open.addEventListener("mousedown", function () {
    if (wb.open.alpha == 0) {
      // gainNode.gain.value=1;
      audioCtx.resume();
      wb.open.alpha = 1;
      wb.close.alpha = 0;
      musicState = "play";
    } else {
      // gainNode.gain.value=0;
      audioCtx.suspend();
      wb.open.alpha = 0;
      wb.close.alpha = 1;
      musicState = "pause";
    }
  })
  wb.close.addEventListener("mousedown", function () {
    if (wb.open.alpha == 0) {
      // gainNode.gain.value=1;
      audioCtx.resume();
      wb.open.alpha = 1;
      wb.close.alpha = 0;
      musicState = "play";
    } else {
      // gainNode.gain.value=0;
      audioCtx.suspend();
      wb.open.alpha = 0;
      wb.close.alpha = 1;
      musicState = "pause";
    }
  })

  document.addEventListener('visibilitychange', function () {

    // 用户离开了当前页面
    setTimeout(function () {
      if (document.visibilityState === 'hidden') {
        createjs.Ticker.paused = 1;
        if (musicState != null) {
          // gainNode.gain.value=0;
          audioCtx.suspend();
          wb.open.alpha = 0;
          wb.close.alpha = 1;
        }

      }
    }, 200)


    // 用户打开或回到页面
    setTimeout(function () {
      if (document.visibilityState === 'visible') {
        createjs.Ticker.paused = 0;
        if (musicState == "play") {
          // gainNode.gain.value=1;
          audioCtx.resume();
          wb.open.alpha = 1;
          wb.close.alpha = 0;
        }
      }
    }, 250)

  });

  wb.open.alpha = 1;
  wb.close.alpha = 0;

  var W = window.innerWidth;
  var H = window.innerHeight;

  if (W >= H) {
    wb.open.x = wb.close.x = 531 - cx;
    wb.open.y = wb.close.y = 887 - cy;
  } else {
    wb.open.x = wb.close.x = 778 - cx;
    wb.open.y = wb.close.y = 1390 / 2 - canvas.height / 2 + 510 - cy;
  }




  window.stage.alpha = 1;
  document.getElementsByTagName("body")[0].style.opacity = 1;
  var W = window.innerWidth;
  var H = window.innerHeight;

  if (W >= H) {
    window.pageState = "heng";
    resizerq.horizontalChange();
    resizerq.hengChange();
  } else {
    window.pageState = "shu";
    resizerq.verticalChange();
    resizerq.shuChange();
  }



  // mapDrawLine();
}, 800)