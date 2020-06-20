import 'yuki-createjs/lib/easeljs-0.8.2.combined'
import 'yuki-createjs/lib/tweenjs-0.6.2.combined'
// import createjs from 'script-loader!createjs/builds/createjs-2015.11.26.min';
// import createjs from 'createjs-npm/lib/create';
require('./loadMusic.js');
window.onload=function(){
  document.getElementsByTagName("body")[0].style.opacity=0;
  require("./creatjsPlayAds.js");
  
  require("./imgResource.js");
  setTimeout(() => {
    first();
    //开始 
    createjs.Tween.get(wb.qipao1).wait(500).to({ scaleX: 1, scaleY: 1 }, 800, createjs.Ease.backOut).call(function () {
      createjs.Tween.get(wb.go).to({ alpha: 1 }, 500);
      createjs.Tween.get(wb.go, { loop: true }).to({ scaleX: 1.1, scaleY: 1.1 }, 600).to({ scaleX: 1, scaleY: 1 }, 400);
      wb.go.addEventListener("mousedown", one(goStart, waitTime));
    });
    createjs.Tween.get(stage).to({ scaleX: 1, scaleY: 1 }, 500).call(function () {
      stage.setTransform(savex, savey, 1, 1);
    }); 
  }, 800);

  var goStart = function(){
    // alert(bgm_);
    bgm_play();
    removeStop(wb.go,wb.qipao1);
    mineChangeSite(614.8, 1377.6,1);
    mineChangeSite1(577.5, 1434.5,1);
    wsp.mine_all_ani.skewY = 0; wsp.mine_all_ani.x = 625.8; wsp.mine_all_ani.y = 1386.6;
    wsp.mine_all_ani.gotoAndPlay("walk_bz"); wsp.heli_ani.gotoAndPlay("walk_bz");
    mapMove(wsp.mine_all_ani,734.0,1327.9,1,true,showQiao);
  }

  let showQiao = () =>{
    wsp.heli_ani.gotoAndPlay('stop');
    jtStart(774.8, 1223.6);
    window.w1 = new eatLoop(wsp.pig_ani1,1000,3000);
    window.w2 = new eatLoop(wsp.pig_ani2, 100, 2500);
    containerAll2_cs.y = containerAll2_cs.y + 100;
    createjs.Tween.get(containerAll2_cs).to({ y: containerAll2_cs.y - 100, alpha: 1 }, 800, createjs.Ease.backOut).call(function () {
      containerAll2_cs.addChild(wb.hand);
      window.h1 = new handAni(wb.hand, [wb.yellow1, wb.yellow2]);
      wb.yellow1.addEventListener("mousedown", clickCS11);
      wb.yellow2.addEventListener("mousedown", one(clickCS12, waitTime));
      // window.tip_a1 = new GestureAnimation(wb.cs1_1,"cs1_1",wb.fengchao,2000,50,60);
      // window.boom1 = new dragCollide(wb.cs1_1,true,0,0,[wb.yellow3],0,clickCS11);
      // window.wait1 = new waitFun(clickCS11,waitTime);
    })
  }

  let clickCS11 = () => {
    jtPause();
    choose.play(0);
    createjs.clearTimeout(ss1);
    h1.clear();
    wb.yellow1.removeAllEventListeners();
    wb.yellow2.removeAllEventListeners();
    wb.yellow1.alpha = 1;
    // 使用一个运动指导
    wsp.yanwu_ani.alpha = 1;
    wsp.yanwu_ani.gotoAndPlay('start');
    setTimeouc(function () {
      recoveryChoose();
      wsp.yanwu_ani.alpha = 0;
    }, (1000 / 60) * (1 / 0.2) * 13)
    shui.play(0);
    createjs.Tween.get(wb.an1_1).to({ alpha: 1 }, 500).wait(350).call(function(){
      goSecond();
    });
    createjs.Tween.get(wb.gou).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.backOut);
  }

  let clickCS12 = () => {
    jtPause();
    choose.play(0);
    createjs.clearTimeout(ss1);
    h1.clear();
    wb.yellow1.removeAllEventListeners();
    wb.yellow2.removeAllEventListeners();
    wb.yellow2.alpha = 1;
    // 使用一个运动指导
    wsp.yanwu_ani.alpha = 1;
    wsp.yanwu_ani.gotoAndPlay('start');
    setTimeouc(function () {
      recoveryChoose();
      wsp.yanwu_ani.alpha = 0;
    }, (1000 / 60) * (1 / 0.2) * 13)
    shui.play(0);
    createjs.Tween.get(wb.an1_2).to({ alpha: 1 }, 500).wait(350).call(function () {
      goSecond();
    });
    createjs.Tween.get(wb.gou2).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.backOut);
  }

  let goSecond = () => {
    wsp.mine_all_ani.gotoAndPlay("walk_bz"); wsp.heli_ani.gotoAndPlay("walk_bz");
    mapMove(wsp.mine_all_ani, 1052.2, 1157.9,1,true,road1);
  }

  let road1 = () => {
    wsp.mine_all_ani.gotoAndPlay("walk_bz"); wsp.heli_ani.gotoAndPlay("walk_bz");
    mapMove(wsp.mine_all_ani, 1234.8, 989.5, 1, true, showPig);
    setTimeouc(() => {
      zhujiao.play(0);
    }, 750);
  }

  let showPig = () => {
    jtStart(1356.1, 844.1 );
    wsp.heli_ani.gotoAndPlay("stop");
    chooseChange(wb.cs1_1,wb.cs1_2,wb.cs2_1,wb.cs2_2);
    h1.restart();
    wb.yellow1.addEventListener("mousedown", clickCS21);
    wb.yellow2.addEventListener("mousedown", one(clickCS22, waitTime));
  }


  let clickCS21 = () => {
    jtPause();
    choose.play(0);
    createjs.clearTimeout(ss1);
    h1.clear();
    wb.yellow1.removeAllEventListeners();
    wb.yellow2.removeAllEventListeners();
    wb.yellow1.alpha = 1;
    // 使用一个运动指导
    shaozi.play(0);
    setTimeouc(() => {
      shaozi.play(0);
    }, 600);
    pigHide(800);
    createjs.Tween.get(wb.gou).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.backOut);
  }

  let clickCS22 = () => {
    jtPause();
    choose.play(0);
    createjs.clearTimeout(ss1);
    h1.clear();
    wb.yellow1.removeAllEventListeners();
    wb.yellow2.removeAllEventListeners();
    wb.yellow1.alpha = 1;
    // 使用一个运动指导
    ranshao.play(0);
    pigHide(1200);
    setTimeouc(() => {
      zhujiao.play(0);
    }, 600);
    createjs.Tween.get(wsp.huo_ani1).to({ alpha: 1 }, 100).wait(1800).to({ alpha: 0 }, 100);
    createjs.Tween.get(wsp.huo_ani2).to({ alpha: 1 }, 100).wait(1800).to({ alpha: 0 }, 100);
    createjs.Tween.get(wsp.huo_ani3).to({ alpha: 1 }, 100).wait(1800).to({ alpha: 0 }, 100);
    createjs.Tween.get(wb.gou2).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.backOut);
  }

  let pigHide = (time) => {
    recoveryChoose();
    createjs.Tween.get(wsp.pig_ani1).wait(time).to({ alpha: 0, x: 1424, y: 873 }, 500, createjs.Ease.quartIn);
    createjs.Tween.get(wsp.pig_ani2).wait(time).to({ alpha: 0, x: 1506, y: 978 }, 500, createjs.Ease.quartIn).wait(350).call(function(){
      gotoLast();
    });
  }


  let gotoLast = () => {
    wsp.mine_all_ani.gotoAndPlay("walk_bz"); wsp.heli_ani.gotoAndPlay("walk_bz");
    mapMove(wsp.mine_all_ani, 1509.8, 864.3,1,true,showShu);
  }

  let showShu = () => {
    wsp.heli_ani.gotoAndPlay("stop");
    chooseChange(wb.cs2_1, wb.cs2_2, wb.cs3_1, wb.cs3_2);
    jtStart(1586.3, 695.7 );
    wb.shu_bian.alpha=1;
    h1.restart();
    wb.yellow1.addEventListener("mousedown", clickCS31);
    wb.yellow2.addEventListener("mousedown", one(clickCS32, waitTime));
  }


  let clickCS31 = () => {
    jtPause();
    choose.play(0);
    wb.shu_bian.alpha=0;
    createjs.clearTimeout(ss1);
    h1.clear();
    wb.yellow1.removeAllEventListeners();
    wb.yellow2.removeAllEventListeners();
    wb.yellow1.alpha = 1;
    mineChangeSite(1570.0, 845.7,1);
    wsp.mine_all_ani.gotoAndPlay("kan");
    setTimeouc(() => {
      wsp.mine_all_ani.gotoAndPlay("kan");
    }, (1000 / 60) * (1 / 0.2) * 10);
    setTimeouc(() => {
     kan.play(0);
      setTimeouc(() => {
        recoveryChoose();
        kan.play(0);
      }, (1000 / 60) * (1 / 0.2) * 10);
    }, (1000 / 60) * (1 / 0.2) * 5);
    setTimeouc(() => {
      mineChangeSite(1509.8, 864.3, 1);
      lastAni();
    }, (1000 / 60) * (1 / 0.2) * 20);
    createjs.Tween.get(wb.gou).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.backOut);
  }

  let clickCS32 = () => {
    jtPause();
    choose.play(0);
    createjs.clearTimeout(ss1);
    wb.shu_bian.alpha = 0;
    h1.clear();
    wb.yellow1.removeAllEventListeners();
    wb.yellow2.removeAllEventListeners();
    wb.yellow2.alpha = 1;
    // 使用一个运动指导
    wsp.zhadan_ani.y = wsp.zhadan_ani.y-50;
    ci.play(0);
    createjs.Tween.get(wsp.zhadan_ani).to({ y: wsp.zhadan_ani.y+50,alpha:1 }, 200).wait(500).call(function(){
      recoveryChoose();
      wsp.zhadan_ani.alpha=0;
      wsp.zhayan_ani.alpha=1;
      wsp.zhayan_ani.gotoAndPlay("start");
      boom.play(0);
      setTimeout(() => {
        wsp.zhayan_ani.alpha=0;
      }, (1000 / 60) * (1 / 0.35) * 16);
      setTimeout(() => {
        lastAni();
      }, (1000 / 60) * (1 / 0.35) * 10);
    });
    createjs.Tween.get(wb.gou2).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.backOut);
  }

  let lastAni = () => {
    createjs.Tween.get(containerAll2_cs).to({ y: containerAll2_cs.y + 100, alpha: 0 }, 200, createjs.Ease.backOut).call(function () {
      containerAll2.removeChild(containerAll2_cs);
    });
    createjs.Tween.get(wb.shu).to({ alpha: 0 }, 100).call(function () {
      var boomarr1 = [{ "thingsName": "manao", "Number": 2 }, { "thingsName": "xiongguo", "Number": 3 }];
      loopArr(boomarr1, wb.shu.x + (containerAll.x - containerAll3.x) - 0, wb.shu.y + (containerAll.y - containerAll3.y) - 0);
      setTimeouc(() => {
        wsp.mine_all_ani.gotoAndPlay("walk_bz"); wsp.heli_ani.gotoAndPlay("walk_bz");
        mapMove(wsp.mine_all_ani,1817.2, 717.4, 1, true, endShow);
        setTimeouc(() => {
          wsp.mine_all_ani2.gotoAndPlay("chui");
        }, 1900);
      }, 600);
    })
  }
}

