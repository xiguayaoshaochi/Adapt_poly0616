import 'yuki-createjs/lib/easeljs-0.8.2.combined'
import 'yuki-createjs/lib/tweenjs-0.6.2.combined'

window.onload=function(){
  document.getElementsByTagName("body")[0].style.opacity=0;
  require("./creatjsPlayAds.js");
  require('./loadMusic.js');
  require("./imgResource.js");
  setTimeout(() => {
    //开始
    // wsp.mine_all_ani.gotoAndPlay("chui");
    // createjs.Tween.get(wb.qipao1).wait(500).to({ scaleX: 1, scaleY: 1 }, 800, createjs.Ease.backOut).call(function () {
    //   createjs.Tween.get(wb.go).to({ alpha: 1 }, 500);
    //   createjs.Tween.get(wb.go, { loop: true }).to({ scaleX: 1.1, scaleY: 1.1 }, 600).to({ scaleX: 1, scaleY: 1 }, 400);
    //   wb.go.addEventListener("mousedown", one(goStart, waitTime));
    // });
    createjs.Tween.get(stage).to({ scaleX: 1, scaleY: 1 }, 500).call(function () {
      stage.setTransform(savex, savey, 1, 1);
    });
  }, 800);
}

