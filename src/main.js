const WIDTH = 384;
const HEIGHT = 384;

// init
let app = new PIXI.Application({
  width: WIDTH,
  height: HEIGHT
});
let canvas = document.getElementById("canvas");
canvas.appendChild(app.view);
app.renderer.backgroundColor = 0x000000;
app.stage.interactive = false;

let app2 = new PIXI.Application({
  width: WIDTH,
  height: HEIGHT
});
let canvas2 = document.getElementById("canvas2");
canvas2.appendChild(app2.view);
app2.renderer.backgroundColor = 0x000000;
app2.stage.interactive = false;

let app3 = new PIXI.Application({
  width: WIDTH,
  height: HEIGHT
});
let canvas3 = document.getElementById("canvas3");
canvas3.appendChild(app3.view);
app3.renderer.backgroundColor = 0x000000;
app3.stage.interactive = false;

let bg,
  bg2,
  bg3,
  umbrella,
  umbrella2,
  umbrella3,
  umbrella4,
  umbrella5,
  heart,
  heart2,
  heart3,
  heart4,
  star,
  leaf;
let elapsedTime = 0;

let container_bg = new PIXI.Container();
container_bg.x = 0;
container_bg.y = 0;
container_bg.interactive = false;
app.stage.addChild(container_bg);

let container_bg2 = new PIXI.Container();
container_bg2.x = 0;
container_bg2.y = 0;
container_bg2.interactive = false;
app2.stage.addChild(container_bg2);

let container_bg3 = new PIXI.Container();
container_bg3.x = 0;
container_bg3.y = 0;
container_bg3.interactive = false;
app3.stage.addChild(container_bg3);

let container = new PIXI.Container();
container.width = 384;
container.height = 384;
container.x = 0;
container.y = 0;
container.pivot.x = 0;
container.pivot.y = 0;
container.interactive = false;
app.stage.addChild(container);

let container2 = new PIXI.Container();
container2.width = 384;
container2.height = 384;
container2.x = 0;
container2.y = 0;
container2.pivot.x = 0;
container2.pivot.y = 0;
container2.interactive = false;
app2.stage.addChild(container2);

let container3 = new PIXI.Container();
container3.width = 384;
container3.height = 384;
container3.x = 0;
container3.y = 0;
container3.pivot.x = 0;
container3.pivot.y = 0;
container3.interactive = false;
app3.stage.addChild(container3);

// asset
const ASSET_BG = "images/pic_bg_floor.jpg";
const ASSET_UMBRELLA = "images/pic_umbrella.png";
const ASSET_HEART = "images/pic_heart.png";
const ASSET_STAR = "images/pic_star.png";
const ASSET_LEAF = "images/pic_leaf.png";

PIXI.loader
  .add("data_bg", ASSET_BG)
  .add("data_umbrella", ASSET_UMBRELLA)
  .add("data_heart", ASSET_HEART)
  .add("data_star", ASSET_STAR)
  .add("data_leaf", ASSET_LEAF)
  .load(onAssetsLoaded);

/**
 * Asset load Complete
 * @param { object } loader object
 * @param { object } res asset data
 */
function onAssetsLoaded(loader, res) {
  // BG
  bg = new PIXI.Sprite(res.data_bg.texture);
  container_bg.addChild(bg);
  bg.x = 0;
  bg.y = 0;

  bg2 = new PIXI.Sprite(res.data_bg.texture);
  container_bg2.addChild(bg2);
  bg2.x = 0;
  bg2.y = 0;

  bg3 = new PIXI.Sprite(res.data_bg.texture);
  container_bg3.addChild(bg3);
  bg3.x = 0;
  bg3.y = 0;

  // umbrella
  umbrella = new PIXI.Sprite(res.data_umbrella.texture);
  container.addChild(umbrella);
  umbrella.x = 50;
  umbrella.y = 50;
  umbrella.scale.set(0.5, 0.5);
  umbrella.interactive = false;
  umbrella.anchor.x = 0.5;
  umbrella.anchor.y = 0.5;

  umbrella2 = new PIXI.Sprite(res.data_umbrella.texture);
  container.addChild(umbrella2);
  umbrella2.x = 50;
  umbrella2.y = 100;
  umbrella2.scale.set(0.5, 0.5);
  umbrella2.interactive = false;
  umbrella2.anchor.x = 0.5;
  umbrella2.anchor.y = 0.5;
  umbrella2.tint = 0x669966;

  umbrella3 = new PIXI.Sprite(res.data_umbrella.texture);
  container.addChild(umbrella3);
  umbrella3.x = 100;
  umbrella3.y = 150;
  umbrella3.scale.set(0.5, 0.5);
  umbrella3.interactive = false;
  umbrella3.anchor.x = 0.5;
  umbrella3.anchor.y = 0.5;
  umbrella3.tint = 0x990066;

  umbrella4 = new PIXI.Sprite(res.data_umbrella.texture);
  container.addChild(umbrella4);
  umbrella4.x = 50;
  umbrella4.y = 200;
  umbrella4.scale.set(0.5, 0.5);
  umbrella4.interactive = false;
  umbrella4.anchor.x = 0.5;
  umbrella4.anchor.y = 0.5;
  umbrella4.tint = 0x000000;

  // heart
  heart = new PIXI.Sprite(res.data_heart.texture);
  container2.addChild(heart);
  heart.x = 50;
  heart.y = 50;
  heart.scale.set(0.5, 0.5);
  heart.interactive = false;
  heart.anchor.x = 0.5;
  heart.anchor.y = 0.5;

  heart2 = new PIXI.Sprite(res.data_heart.texture);
  container2.addChild(heart2);
  heart2.x = 50;
  heart2.y = 100;
  heart2.scale.set(0.5, 0.5);
  heart2.interactive = false;
  heart2.anchor.x = 0.5;
  heart2.anchor.y = 0.5;
  heart2.tint = 0x669966;

  heart3 = new PIXI.Sprite(res.data_heart.texture);
  container2.addChild(heart3);
  heart3.x = 100;
  heart3.y = 150;
  heart3.scale.set(0.5, 0.5);
  heart3.interactive = false;
  heart3.anchor.x = 0.5;
  heart3.anchor.y = 0.5;
  heart3.tint = 0x990066;

  // star
  star = new PIXI.Sprite(res.data_star.texture);
  container3.addChild(star);
  star.x = 50;
  star.y = 50;
  star.scale.set(0.5, 0.5);
  star.interactive = false;
  star.anchor.x = 0.5;
  star.anchor.y = 0.5;

  // leaf
  leaf = new PIXI.Sprite(res.data_leaf.texture);
  container3.addChild(leaf);
  leaf.x = 50;
  leaf.y = 100;
  leaf.scale.set(0.5, 0.5);
  leaf.interactive = false;
  leaf.anchor.x = 0.5;
  leaf.anchor.y = 0.5;

  umbrella5 = new PIXI.Sprite(res.data_umbrella.texture);
  container3.addChild(umbrella5);
  umbrella5.x = 50;
  umbrella5.y = 150;
  umbrella5.scale.set(0.5, 0.5);
  umbrella5.interactive = false;
  umbrella5.anchor.x = 0.5;
  umbrella5.anchor.y = 0.5;

  heart4 = new PIXI.Sprite(res.data_heart.texture);
  container3.addChild(heart4);
  heart4.x = 50;
  heart4.y = 200;
  heart4.scale.set(0.5, 0.5);
  heart4.interactive = false;
  heart4.anchor.x = 0.5;
  heart4.anchor.y = 0.5;

  start();
  startBasicSequence();
  startMethodChaining();
  startTimelineContorol();
}

/**
 * Basic Function
 */
function start() {
  // create a new timeline instance
  let tl = new TimelineMax();

  // the following two lines do the SAME thing: // 下の2行は同じ事です
  tl.add(TweenMax.to(umbrella, 2, { x: 300 }));
  // tl.to(umbrella, 2, { x: 300 }); // shorter syntax! // 短い書き方
}

/**
 * Basic Sequence
 */
function startBasicSequence() {
  let tl = new TimelineMax({
    repeat: 30,
    repeatDelay: 1
  });

  // normal
  tl.to(umbrella2, 1, { x: 300 });

  // no use PixiPlugin
  tl.to(umbrella3, 1, { x: 300 });
  tl.to(umbrella3.scale, 1, { x: 0.25, y: 0.25 });

  // use PixiPlugin
  tl.to(umbrella4, 1, { x: 300, y: 250, pixi: { scaleX: 1.25, scaleY: 1.25 } });
}

/**
 * write by chainMethod
 */
function startMethodChaining() {
  // chain all to() methods together on one line
  let tl = new TimelineMax();
  tl.to(heart, 2, { x: 300 })
    .to(heart2, 2, { x: 300, alpha: 0.3, pixi: { scaleX: 0.25, scaleY: 0.25 } })
    .to(heart3, 2, { x: 300, y: 200, pixi: { scaleX: 1.25, scaleY: 1.25 } });
}

/**
 * Adjust control timing
 */
function startTimelineContorol() {
  let tl = new TimelineMax({
    repeat: -1,
    repeatDelay: 1,
    //onComplete: function() {console.log("startTimelineContorol play completed.");} // must no repeat
  });

  tl.to(star, 2, { x: 300 })
    .to(leaf, 2, { x: 300, pixi: { scaleX: 0.5, scaleY: 0.5 } }, "+=1") // ↑の再生完了の1秒後に
    .addLabel("UmbrellaAndHeart")
    .to(umbrella5, 2, { x: 300, y: 200, pixi: { scaleX: 1.25, scaleY: 1.25 } }, "UmbrellaAndHeart")
    .to(heart4, 2, { x: 300, alpha: 0.5 }, "UmbrellaAndHeart");
}