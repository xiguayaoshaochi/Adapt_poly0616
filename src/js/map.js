import caodi_ from '../images/sma_img/sp/caodi.png';
import '../css/index.css';
window.json_sprite1 = require('../images/sprite1.json');
window.json_re = require('../js/resources.json');
for (let i = 0; i < json_re.length; i++) {
  var realName = json_re[i]["name"];
  var reName;
  var con = container2;
  reName = realName + random1(1, 9999);
  if (typeof json_re[i]["rename"] != "undefined") {
    reName = json_re[i]["rename"];
  }
  addBitmap(reName, eval(realName + "_"), json_re[i]["left"], json_re[i]["top"], "addArr_person");
  var origin_x = 0.5; var origin_y = 0.5;
  var w_ = json_sprite1["frames"][json_sprite1["animations"][realName][0]][2];
  var h_ = json_sprite1["frames"][json_sprite1["animations"][realName][0]][3];



  if (json_re[i]["name"].indexOf("hua") > -1 && json_re[i]["name"].length<5) {
    wb[reName].scaleX = wb[reName].scaleY = 1.1 + ((random1(0, 20000) - 10000) / 100000);
    if(random1(1,10)>7){
      window['hua' + random1(0, 20000)] = new shuWobble1(wb[reName], 1.5);
    }
    var origin_x = 0.5; var origin_y = 0.9;
  }
  if (json_re[i]["name"].indexOf("shu1") > -1) { 
    wb[reName].scaleX = wb[reName].scaleY = 1 + ((random1(0, 20000) - 10000) / 100000);
    
    var origin_x = 0.5; var origin_y = 0.9;
     wb[reName].y = wb[reName].y+80;
    if (random1(1, 10) > 4) window['shu' + random1(0, 20000)] = new shuWobble1(wb[reName], 2);
    
  }

  if (json_re[i]["name"].indexOf("stone1") > -1 ) {
    wb[reName].scaleX = wb[reName].scaleY = 0.5 + ((random1(0, 20000) - 10000) / 100000);
  }

  if (json_re[i]["name"].indexOf("stoneRoad") > -1) {
    wb[reName].alpha = 0.5;
  }
  
  if (json_re[i]["name"].indexOf("baoxiang") > -1) {
    var text = new createjs.Text(reName + ',' + json_re[i]["left"] + ',' + json_re[i]["top"], "28px Arial", "#000");
    text.x = wb[reName].x; text.y = wb[reName].y+80;
    text.color ="#00c0ff";
    text.textBaseline = "alphabetic";
  }


  if (typeof json_re[i]["scale"] != "undefined") {
    wb[reName].scaleX = wb[reName].scaleY = json_re[i]["scale"];
  }


  if (typeof json_re[i]["skewY"] != "undefined") {
    wb[reName].skewY = json_re[i]["skewY"];
  }

  if (typeof json_re[i]["rotation"] != "undefined") {
    wb[reName].rotation = json_re[i]["rotation"];
  }

  if (typeof json_re[i]["contaier"] != "undefined") {
    wb[reName].skewY = json_re[i]["skewY"];
    con = window[json_re[i]["contaier"]];
  }



  con.addChild(wb[reName]);
  wb[reName].regX = w_ * origin_x;
  wb[reName].x = wb[reName].x + w_ * origin_x;
  wb[reName].regY = h_ * origin_y;
  wb[reName].y = wb[reName].y + h_ * origin_y;
  // containerAll.addChild(text);
}




var sW = 280; var sH = 145;
var roadNumX = Math.ceil(2715 / sW) + 1;
var roadNumY = Math.ceil(2010 / sW * 4) + 2;
var roadTotal = roadNumX * roadNumY;
for (var i = 1; i < roadTotal; i++) {
  var roadName = 'road' + random1(1, 99999);

  // console.log(Math.ceil(i/roadNumX)%2) 
  if (Math.ceil(i / roadNumX) % 2 == 0) {
    //偶数行
    var roadUnitX = (i % roadNumX) * sW;
  } else {
    //奇数行
    var roadUnitX = (i % roadNumX) * sW - sH;
  }

  var roadUnitY = (Math.ceil(i / roadNumX) - 1) * sH / 2 - sH;
  // console.log(roadUnitX,roadUnitY);
  addBitmap(roadName, caodi_, roadUnitX, roadUnitY, "addArr_person");

  window.container4_2.addChild(wb[roadName]);
  wb[roadName].name = roadName;
  person.alpha = 1;
}
