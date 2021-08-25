var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6d5f5cde-51e9-40e8-b0fb-04160d8a0a7d","0cc5a023-2de6-4a2a-b2af-52b1b4f14edb","3cb67cf3-ab8c-475a-ba8d-665c3083d58e","8d4188d5-ed0a-4746-8e88-5913e47ee8cc","11c3d8f3-a414-40f6-a7bb-78eae0b71aa6","7e83a4fc-cf03-4aae-9e82-d8db4026ffc5","9282b356-b723-41da-accf-780dc1571cc3","a76c6fb3-28db-4722-a920-b3dd56fa969c","4415c69c-7e9e-45ec-bb50-6fced793f812","6c50cb8c-1d0b-435d-bdbe-a767acb1e224","7b01bbb3-bd43-4ab8-a494-a1420e2a254e","b738f905-1bc0-461f-9f25-c0e8ed84a8a1"],"propsByKey":{"6d5f5cde-51e9-40e8-b0fb-04160d8a0a7d":{"name":"background_landscape05_1","sourceUrl":"assets/api/v1/animation-library/gamelab/33483OYhVDVsX.GNODCgRASPM5bNdz.q/category_backgrounds/background_landscape05.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"33483OYhVDVsX.GNODCgRASPM5bNdz.q","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/33483OYhVDVsX.GNODCgRASPM5bNdz.q/category_backgrounds/background_landscape05.png"},"0cc5a023-2de6-4a2a-b2af-52b1b4f14edb":{"name":"bg_underwater_07_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"OMRLM.ZroaFZ2hpAf4_EsCmQg.NZxHUN","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/0cc5a023-2de6-4a2a-b2af-52b1b4f14edb.png"},"3cb67cf3-ab8c-475a-ba8d-665c3083d58e":{"name":"blowfish_1","sourceUrl":"assets/api/v1/animation-library/gamelab/vEEEnne4pN_1H4pr137lbVvbBskXS10g/category_animals/blowfish.png","frameSize":{"x":390,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"vEEEnne4pN_1H4pr137lbVvbBskXS10g","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/vEEEnne4pN_1H4pr137lbVvbBskXS10g/category_animals/blowfish.png"},"8d4188d5-ed0a-4746-8e88-5913e47ee8cc":{"name":"eel_1","sourceUrl":"assets/api/v1/animation-library/gamelab/0PZi3XNknHs2XR24.xA.WV34iO_nBq90/category_animals/eel.png","frameSize":{"x":398,"y":222},"frameCount":1,"looping":true,"frameDelay":2,"version":"0PZi3XNknHs2XR24.xA.WV34iO_nBq90","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":222},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0PZi3XNknHs2XR24.xA.WV34iO_nBq90/category_animals/eel.png"},"11c3d8f3-a414-40f6-a7bb-78eae0b71aa6":{"name":"jelly_1","sourceUrl":"assets/api/v1/animation-library/gamelab/QELwdcEIv2_pyTI4axkgxuNPC44Af_QV/category_animals/jelly.png","frameSize":{"x":331,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"QELwdcEIv2_pyTI4axkgxuNPC44Af_QV","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":331,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/QELwdcEIv2_pyTI4axkgxuNPC44Af_QV/category_animals/jelly.png"},"7e83a4fc-cf03-4aae-9e82-d8db4026ffc5":{"name":"fish_01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/XMPMBS2lQ0s7C3cxq.j0JQ1ILAG86re7/category_animals/fish_01.png","frameSize":{"x":395,"y":319},"frameCount":1,"looping":true,"frameDelay":2,"version":"XMPMBS2lQ0s7C3cxq.j0JQ1ILAG86re7","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":395,"y":319},"rootRelativePath":"assets/api/v1/animation-library/gamelab/XMPMBS2lQ0s7C3cxq.j0JQ1ILAG86re7/category_animals/fish_01.png"},"9282b356-b723-41da-accf-780dc1571cc3":{"name":"shark_1","sourceUrl":"assets/api/v1/animation-library/gamelab/h5iaduJc2clM0M6koq2mdRkgWrUCcW5Y/category_animals/shark.png","frameSize":{"x":397,"y":185},"frameCount":1,"looping":true,"frameDelay":2,"version":"h5iaduJc2clM0M6koq2mdRkgWrUCcW5Y","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":185},"rootRelativePath":"assets/api/v1/animation-library/gamelab/h5iaduJc2clM0M6koq2mdRkgWrUCcW5Y/category_animals/shark.png"},"a76c6fb3-28db-4722-a920-b3dd56fa969c":{"name":"octopus_1","sourceUrl":"assets/api/v1/animation-library/gamelab/.DHOqb3JdKrCttvdHOfqA2ADt1jxHma0/category_animals/octopus.png","frameSize":{"x":398,"y":301},"frameCount":1,"looping":true,"frameDelay":2,"version":".DHOqb3JdKrCttvdHOfqA2ADt1jxHma0","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":301},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.DHOqb3JdKrCttvdHOfqA2ADt1jxHma0/category_animals/octopus.png"},"4415c69c-7e9e-45ec-bb50-6fced793f812":{"name":"crocodile_1","sourceUrl":"assets/api/v1/animation-library/gamelab/.OgILExIWH7zPE7eYiSHTuP5MvAT96YL/category_animals/crocodile.png","frameSize":{"x":390,"y":150},"frameCount":1,"looping":true,"frameDelay":2,"version":".OgILExIWH7zPE7eYiSHTuP5MvAT96YL","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":150},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.OgILExIWH7zPE7eYiSHTuP5MvAT96YL/category_animals/crocodile.png"},"6c50cb8c-1d0b-435d-bdbe-a767acb1e224":{"name":"background_underwater_05_1","sourceUrl":"assets/api/v1/animation-library/gamelab/b.wUIlJjGpUDp5hPJOOrJBX9HqHOOATt/category_backgrounds/background_underwater_05.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"b.wUIlJjGpUDp5hPJOOrJBX9HqHOOATt","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/b.wUIlJjGpUDp5hPJOOrJBX9HqHOOATt/category_backgrounds/background_underwater_05.png"},"7b01bbb3-bd43-4ab8-a494-a1420e2a254e":{"name":"pupilportrait_10_1","sourceUrl":"assets/api/v1/animation-library/gamelab/bj5kzu_ux3FP2R.7jZ0Oi1FnHKlS7ePT/category_faces/pupilportrait_10.png","frameSize":{"x":282,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"bj5kzu_ux3FP2R.7jZ0Oi1FnHKlS7ePT","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bj5kzu_ux3FP2R.7jZ0Oi1FnHKlS7ePT/category_faces/pupilportrait_10.png"},"b738f905-1bc0-461f-9f25-c0e8ed84a8a1":{"name":"kidportrait_13_1","sourceUrl":"assets/api/v1/animation-library/gamelab/fDLnJ_hcVaJPc4oh8krv.gPzYVt1zz6r/category_faces/kidportrait_13.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"fDLnJ_hcVaJPc4oh8krv.gPzYVt1zz6r","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/fDLnJ_hcVaJPc4oh8krv.gPzYVt1zz6r/category_faces/kidportrait_13.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life=5;
var gameState ="serve";

// making a boy sam who is finding treasure 
var sam = createSprite(200, 380, 20, 20);
sam.setAnimation("kidportrait_13_1");
// making sea animas
var shark = createSprite(200, 75, 20, 20);
shark.setAnimation("shark_1");
sam.scale = 0.08;
shark.scale = 0.1;
var octopus = createSprite(200, 150, 20, 20);
octopus.setAnimation("octopus_1");
octopus.scale = 0.1;
var crocodile = createSprite(200, 225, 20, 20);
crocodile.setAnimation("crocodile_1");
crocodile.scale = 0.1;
var jellyfish = createSprite(200, 300, 20, 20);
jellyfish.setAnimation("jelly_1");
jellyfish.scale = 0.1;
var eel = createSprite(300, 200, 20, 20);
eel.setAnimation("eel_1");
eel.scale = 0.1;
var blowfish = createSprite(100, 200, 20, 20);
blowfish.setAnimation("blowfish_1");
blowfish.scale = 0.1;
var treasure = createSprite(200, 15, 80, 30);
treasure.shapeColor = "red";
treasure.setAnimation("background_underwater_05_1");
treasure.scale = 0.1;





function draw() {
  background("skyBlue");
  
  //display life
  stroke("red");
  textSize(15);
  text(life, 330, 20);
  text("Life =", 290, 20);
  
  if(gameState == "serve")
  {
    textSize(25);
    text("Welcome! Press Space to start.",30,200);
    if(keyDown("space")){
    shark.velocityX = 10;
    octopus.velocityX = 8;
    crocodile.velocityX = 6;
    jellyfish.velocityX = 4;
    eel.velocityY = 8;
    blowfish.velocityY = 8;
      gameState="play"
    }
    
  }
  createEdgeSprites();
  
  if (gameState=="play") {
    if (keyDown("right")) {
      sam.x=sam.x+5
     }
    if (keyDown("left")) {
       sam.x=sam.x-5
     }
    if(keyDown(UP_ARROW)){
    sam.y=sam.y-5
}
    if(keyDown(DOWN_ARROW)){
    sam.y=sam.y+5
}
    if (life==0||sam.isTouching(treasure)) {
      gameState="end";
      playSound("assets/category_music/birthday_kazoo_positive_game_cue_3.mp3", false);
    }
   
  }
  if (gameState=="end") {
      textSize(20);
      text("GAME OVER", 150, 200);
      eel.velocityX = 0;
      shark.velocityY = 0;
      octopus.velocityY = 0;
      crocodile.velocityY = 0;
      jellyfish.velocityY = 0;
      blowfish.velocityX = 0;
      if (life==0) {
          fill("yellow");
          textSize(50);
          text("lose", 160, 300);
        } else {
          fill("yellow");
          textSize(50);
          text("WIN", 160, 300);
      }
    }
  shark.bounceOff(edges);
  octopus.bounceOff(edges);
  crocodile.bounceOff(edges);
  jellyfish.bounceOff(edges);
  eel.bounceOff(edges);
  blowfish.bounceOff(edges);
  sam.bounceOff(edges);
  
  if (sam.isTouching(shark)||sam.isTouching(octopus)||sam.isTouching(crocodile)||sam.isTouching(jellyfish)||sam.isTouching(eel)||sam.isTouching(blowfish)) {
    sam.x = 200;
    sam.y = 380;
    life = life - 1;
    playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3", false);
  }
  
  
  
  
  
  
  
  
  
  
     


  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
