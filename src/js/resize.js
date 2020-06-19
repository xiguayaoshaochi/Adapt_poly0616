var vsStatus = require("./reset.js");
var resize = {
  resizeContent: (cs) => {
    var stageWidtha = document.documentElement.clientWidth;
    var art_size = 640;
    var stageScalea = stageWidtha / art_size;
    var W = window.innerWidth;
    var H = window.innerHeight;
    var ratio = W / H;
    var getCS = document.getElementById(cs);
    getCS.style.width = W + "px";
    getCS.style.height = H + "px";
    getCS.style.left = 0;
    getCS.style.top = 0;
    var ratio1 = 0.75;
    if (W >= H) {
      stage.y = -375;
      canvas.height = art_size;
      //横屏
      resize.horizontalChange();
      containerAll2_cs.x = 0;
      if (ratio > (1 / ratio1)) {
        //背景拉宽 元素保持左右居中
        canvas.width = art_size / (H / W);
        stage.x = -(1390 - canvas.width) / 2;
        // $(cs).height(H);
        containerAll2_cs.x = -60;
        getCS.style.height = H + "px";
      } else if (ratio <= (1 / ratio1)) {
        // $(cs).width(W);
        containerAll2_cs.x = -60;
        getCS.style.width = W + "px";
        canvas.width = art_size / ratio1;
        stage.x = -(1390 - canvas.width) / 2;
        getCS.style.height = W * ratio1 + "px";
        // $(cs).height(W*ratio1);
        getCS.style.top = (H / 2 - W * ratio1 / 2) + 'px';
        // $(cs).css("top",(H/2-W*ratio1/2)+'px');
      }
    } else if (W < H) {
      stage.x = -375;
      stage.y = 0;
      canvas.width = art_size;
      canvas.height = H / stageScalea;
      //竖屏
      resize.verticalChange();
      if (window.innerHeight > 1000) {
        containerAll2_cs.y = 50;
      } else {
        containerAll2_cs.y = 90;
      }
      containerAll2_cs.x = 0;
      if (ratio > ratio1) {
        //整体缩小  背景不动
        canvas.height = art_size / ratio1;
        stage.y = -(1390 - canvas.height) / 2;
        getCS.style.height = H + "px";
        getCS.style.width = H / (1 / ratio1) + "px";
        var newW = H / (1 / ratio1);
        getCS.style.left = (W / 2 - newW / 2) + 'px';
      } else if (ratio <= ratio1) {
        //背景拉长 元素保持上下居中
        stage.y = -(1390 - canvas.height) / 2;
        if (H >= 1390 * stageScalea) {
          //超出高度 一般不会出现这种分辨率
          stage.y = 0;
          getCS.style.height = 1390 * stageScalea + "px";
          canvas.height = 1390;
          getCS.style.top = (H - 1390 * stageScalea) / 2 + 'px';
        } else {
  
        }
      }
    }
  },
  verticalChange: () => {
    var W = window.innerWidth;
    var H = window.innerHeight;
    var ratio = W / H;
    var ratio1 = 0.75;
  
    if (window.pageState == "heng") {
      window.pageState = "shu";
      resize.shuChange();
      setTimeouc(function () {
        resize.changeBind();
      }, 500)
      if (typeof wb.pow_img != "undefined") {
        containerAll2.scaleX = containerAll2.scaleY = 1;
        wb.pow_img.x = Shu_pow_img_x;
        wb.pow_img.y = Shu_pow_img_y;
        wb.play_btn.x = Shu_play_btn_x;
        wb.play_btn.y = Shu_play_btn_y;
        wb.logo.x = Shu_logo_x;
        wb.logo.y = Shu_logo_y;
      }
  
  
  
      // if (typeof wb.open!="undefined") {
      //   wb.open.x=wb.close.x=778;
      //   wb.open.y=wb.close.y=1390/2-canvas.height/2+510;
      // }
  
    }
    if (vsStatus()) {
      wb.sma_kuang.x = 1340 - cx;
      wb.sma_kuang.y = 1390 / 2 + canvas.height / 2 + 430 - cy;
      if (ratio > ratio1) {
        wb.sma_kuang.y = 1390 / 2 + 853 / 2 + 430 - cy;
      }
    }
  
    if (vsStatus()) {
      wb.open.x = 782 - cx;
      wb.close.x = 782 - cx;
      setTimeout(function () {
        wb.open.y = 1390 / 2 - canvas.height / 2 + 517 - cy;
        wb.close.y = 1390 / 2 - canvas.height / 2 + 517 - cy;
      }, 50)
  
      if (ratio > ratio1) {
        wb.open.y = 1390 / 2 - 853 / 2 + 517 - cy;
        wb.close.y = 1390 / 2 - 853 / 2 + 517 - cy;
      }
    }
  
    if (vsStatus()) {
      wb.bag.x = 1340 - cx;
      wb.bag.y = 1390 / 2 + canvas.height / 2 + 433 - cy;
      if (ratio > ratio1) {
        wb.bag.y = 1390 / 2 + 853 / 2 + 433 - cy;
      }
    }
  
  },
  horizontalChange: () => {
    var W = window.innerWidth;
    var H = window.innerHeight;
    var ratio = W / H;
    var ratio1 = 0.75;
  
    if (vsStatus()) {
      wb.sma_kuang.y = 1440 - cy;
      setTimeout(function () {
        wb.sma_kuang.x = 1390 / 2 + canvas.width / 2 + 320 - cx;
      }, 50)
  
      if (canvas.width > 1390) {
        wb.sma_kuang.x = 1390 / 2 + 1390 / 2 + 320 - cx;
      }
    }
  
    if (vsStatus()) {
      wb.bag.y = 1443 - cy;
      setTimeout(function () {
        wb.bag.x = 1390 / 2 + canvas.width / 2 + 320 - cx;
      }, 50)
  
      if (canvas.width > 1390) {
        wb.bag.x = 1390 / 2 + 1390 / 2 + 320 - cx;
      }
    }
  
    if (vsStatus()) {
      wb.open.y = 887 - cy;
      wb.close.y = 887 - cy;
      setTimeout(function () {
        wb.open.x = 1390 / 2 - canvas.width / 2 + 410 - cx;
        wb.close.x = 1390 / 2 - canvas.width / 2 + 410 - cx;
      }, 50)
  
      if (canvas.width > 1390) {
        wb.open.x = 1390 / 2 - 1390 / 2 + 410 - cx;
        wb.close.x = 1390 / 2 - 1390 / 2 + 410 - cx;
      }
    }
  
    if (window.pageState == "shu") {
      window.pageState = "heng";
      resize.hengChange();
  
      setTimeouc(function () {
        resize.changeBind();
      }, 500)
      if (typeof wb.pow_img != "undefined") {
        wb.pow_img.x = Heng_pow_img_x;
        wb.pow_img.y = Heng_pow_img_y;
        wb.play_btn.x = Heng_play_btn_x;
        wb.play_btn.y = Heng_play_btn_y;
        wb.logo.x = Heng_logo_x;
        wb.logo.y = Heng_logo_y;
        containerAll2.scaleX = containerAll2.scaleY = 1;
      }
  
    }
  },
  hengChange: () => {
    if (vsStatus()) {
      containerAll2_cs.y = 20;
      wb.choose_kuang.rotation = 270;
      wb.choose_kuang.x = 1140;
      wb.choose_kuang.y = 1130;
      wb.cs1_1.x = 1138;
      wb.cs1_1.y = 1075;
      wb.cs1_2.x = 1143;
      wb.cs1_2.y = 1202;
      wb.cs2_1.x = 1137;
      wb.cs2_1.y = 1070;
      wb.cs2_2.x = 1134;
      wb.cs2_2.y = 1195;
      wb.cs3_1.x = 1138;
      wb.cs3_1.y = 1070;
      wb.cs3_2.x = 1139;
      wb.cs3_2.y = 1191;
      // wb.cs4_1.x=1138;
      // wb.cs4_1.y=1070;
      // wb.cs4_2.x=1143;
      // wb.cs4_2.y=1195;
      wb.yellow1.x = 1139;
      wb.yellow1.y = 1070;
      wb.yellow2.x = 1139;
      wb.yellow2.y = 1193.8 - 4;
      wb.gou.x = 1140;
      wb.gou.y = 1072;
      wb.cha.x = 1136;
      wb.cha.y = 1193.8;
      wb.cha2.x = 1136;
      wb.cha2.y = 1066;
      wb.gou2.x = 1141;
      wb.gou2.y = 1193.8;
      // wb.icon_tree3.x=873.1;
      // wb.icon_tree3.y=1401;
      // wb.ok1.x=614.8;
      // wb.ok1.y=1397.2;
      // wb.ok2.x=741.6;
      // wb.ok2.y=1397.2;
      // wb.ok3.x=869.9;
      // wb.ok3.y=1397.2;
      // wb.shuzhi.x=608.8;
      // wb.shuzhi.y=1397;
      // wb.weijin.x=740.7;
      // wb.weijin.y=1401;
      // wb.maozi.x=869;
      // wb.maozi.y=1398;
    }
  },
  shuChange : () => {
    if (vsStatus()) {
      containerAll2_cs.y = 90;
      if (window.innerHeight > 1000) {
        containerAll2_cs.y = 50;
      }
      wb.choose_kuang.rotation = 0;
      wb.choose_kuang.x = 743;
      wb.choose_kuang.y = 1400;
      wb.cs1_1.x = 678 + 3;
      wb.cs1_1.y = 1400;
      wb.cs1_2.x = 810;
      wb.cs1_2.y = 1407;
      wb.cs2_1.x = 678 + 3;
      wb.cs2_1.y = 1399;
      wb.cs2_2.x = 810 - 4;
      wb.cs2_2.y = 1398 + 2;
      wb.cs3_1.x = 681;
      wb.cs3_1.y = 1399;
      wb.cs3_2.x = 803;
      wb.cs3_2.y = 1401;
      // wb.cs4_1.x=681;
      // wb.cs4_1.y=1399;
      // wb.cs4_2.x=803;
      // wb.cs4_2.y=1401;
      wb.yellow1.x = 680 + 3;
      wb.yellow1.y = 1398;
      wb.yellow2.x = 804;
      wb.yellow2.y = 1398;
      wb.gou.x = 684;
      wb.gou.y = 1401;
      wb.cha.x = 804;
      wb.cha.y = 1398;
      wb.cha2.x = 682;
      wb.cha2.y = 1398;
      wb.gou2.x = 804;
      wb.gou2.y = 1398;
      // wb.icon_tree3.x=873.1;
      // wb.icon_tree3.y=1401;
      // wb.ok1.x=614.8;
      // wb.ok1.y=1397.2;
      // wb.ok2.x=741.6;
      // wb.ok2.y=1397.2;
      // wb.ok3.x=869.9;
      // wb.ok3.y=1397.2;
      // wb.shuzhi.x=609.8;
      // wb.shuzhi.y=1396;
      // wb.weijin.x=740.7;
      // wb.weijin.y=1401;
      // wb.maozi.x=868;
      // wb.maozi.y=1398;
    }
  },
  changeBind: () => {
    var ruozhi=[boom1,boom2,boom3,boom4,boom5,boom6];
    for (var i = 0; i < ruozhi.length; i++) {
      if (typeof ruozhi[i]!="undefined"&&ruozhi[i]!=null) {
        ruozhi[i].rebind();
      }
    }
  }
}


module.exports = resize;








