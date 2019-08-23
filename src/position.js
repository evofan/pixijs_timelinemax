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

let app4 = new PIXI.Application({
  width: WIDTH,
  height: HEIGHT
});
let canvas4 = document.getElementById("canvas4");
canvas4.appendChild(app4.view);
app4.renderer.backgroundColor = 0x000000;
app4.stage.interactive = false;

let app5 = new PIXI.Application({
  width: WIDTH,
  height: HEIGHT
});
let canvas5 = document.getElementById("canvas5");
canvas5.appendChild(app5.view);
app5.renderer.backgroundColor = 0x000000;
app5.stage.interactive = false;

let app6 = new PIXI.Application({
  width: WIDTH,
  height: HEIGHT
});
let canvas6 = document.getElementById("canvas6");
canvas6.appendChild(app6.view);
app6.renderer.backgroundColor = 0x000000;
app6.stage.interactive = false;

let bg,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  umbrella,
  umbrella2,
  umbrella3,
  umbrella4,
  umbrella5,
  umbrella6,
  umbrella7,
  umbrella8,
  umbrella9,
  umbrella10,
  umbrella11,
  umbrella12,
  umbrella13,
  umbrella14,
  umbrella15,
  umbrella16,
  umbrella17;
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

let container_bg4 = new PIXI.Container();
container_bg4.x = 0;
container_bg4.y = 0;
container_bg4.interactive = false;
app4.stage.addChild(container_bg4);

let container_bg5 = new PIXI.Container();
container_bg5.x = 0;
container_bg5.y = 0;
container_bg5.interactive = false;
app5.stage.addChild(container_bg5);

let container_bg6 = new PIXI.Container();
container_bg6.x = 0;
container_bg6.y = 0;
container_bg6.interactive = false;
app6.stage.addChild(container_bg6);

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

let container4 = new PIXI.Container();
container4.width = 384;
container4.height = 384;
container4.x = 0;
container4.y = 0;
container4.pivot.x = 0;
container4.pivot.y = 0;
container4.interactive = false;
app4.stage.addChild(container4);

let container5 = new PIXI.Container();
container5.width = 384;
container5.height = 384;
container5.x = 0;
container5.y = 0;
container5.pivot.x = 0;
container5.pivot.y = 0;
container5.interactive = false;
app5.stage.addChild(container5);

let container6 = new PIXI.Container();
container6.width = 384;
container6.height = 384;
container6.x = 0;
container6.y = 0;
container6.pivot.x = 0;
container6.pivot.y = 0;
container6.interactive = false;
app6.stage.addChild(container6);

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

  bg4 = new PIXI.Sprite(res.data_bg.texture);
  container_bg4.addChild(bg4);
  bg4.x = 0;
  bg4.y = 0;

  bg5 = new PIXI.Sprite(res.data_bg.texture);
  container_bg5.addChild(bg5);
  bg5.x = 0;
  bg5.y = 0;

  bg6 = new PIXI.Sprite(res.data_bg.texture);
  container_bg6.addChild(bg6);
  bg6.x = 0;
  bg6.y = 0;

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

  //
  umbrella3 = new PIXI.Sprite(res.data_umbrella.texture);
  container2.addChild(umbrella3);
  umbrella3.x = 50;
  umbrella3.y = 100;
  umbrella3.scale.set(0.5, 0.5);
  umbrella3.interactive = false;
  umbrella3.anchor.x = 0.5;
  umbrella3.anchor.y = 0.5;
  umbrella3.tint = 0x990066;

  umbrella4 = new PIXI.Sprite(res.data_umbrella.texture);
  container2.addChild(umbrella4);
  umbrella4.x = 50;
  umbrella4.y = 150;
  umbrella4.scale.set(0.5, 0.5);
  umbrella4.interactive = false;
  umbrella4.anchor.x = 0.5;
  umbrella4.anchor.y = 0.5;
  umbrella4.tint = 0x000000;

  umbrella5 = new PIXI.Sprite(res.data_umbrella.texture);
  container2.addChild(umbrella5);
  umbrella5.x = 50;
  umbrella5.y = 200;
  umbrella5.scale.set(0.5, 0.5);
  umbrella5.interactive = false;
  umbrella5.anchor.x = 0.5;
  umbrella5.anchor.y = 0.5;

  //
  umbrella6 = new PIXI.Sprite(res.data_umbrella.texture);
  container3.addChild(umbrella6);
  umbrella6.x = 50;
  umbrella6.y = 100;
  umbrella6.scale.set(0.5, 0.5);
  umbrella6.interactive = false;
  umbrella6.anchor.x = 0.5;
  umbrella6.anchor.y = 0.5;
  umbrella6.tint = 0x990066;

  umbrella7 = new PIXI.Sprite(res.data_umbrella.texture);
  container3.addChild(umbrella7);
  umbrella7.x = 50;
  umbrella7.y = 150;
  umbrella7.scale.set(0.5, 0.5);
  umbrella7.interactive = false;
  umbrella7.anchor.x = 0.5;
  umbrella7.anchor.y = 0.5;
  umbrella7.tint = 0x000000;

  umbrella8 = new PIXI.Sprite(res.data_umbrella.texture);
  container3.addChild(umbrella8);
  umbrella8.x = 50;
  umbrella8.y = 200;
  umbrella8.scale.set(0.5, 0.5);
  umbrella8.interactive = false;
  umbrella8.anchor.x = 0.5;
  umbrella8.anchor.y = 0.5;

  //
  umbrella9 = new PIXI.Sprite(res.data_umbrella.texture);
  container4.addChild(umbrella9);
  umbrella9.x = 50;
  umbrella9.y = 100;
  umbrella9.scale.set(0.5, 0.5);
  umbrella9.interactive = false;
  umbrella9.anchor.x = 0.5;
  umbrella9.anchor.y = 0.5;
  umbrella9.tint = 0x990066;

  umbrella10 = new PIXI.Sprite(res.data_umbrella.texture);
  container4.addChild(umbrella10);
  umbrella10.x = 50;
  umbrella10.y = 150;
  umbrella10.scale.set(0.5, 0.5);
  umbrella10.interactive = false;
  umbrella10.anchor.x = 0.5;
  umbrella10.anchor.y = 0.5;
  umbrella10.tint = 0x000000;

  umbrella11 = new PIXI.Sprite(res.data_umbrella.texture);
  container4.addChild(umbrella11);
  umbrella11.x = 50;
  umbrella11.y = 200;
  umbrella11.scale.set(0.5, 0.5);
  umbrella11.interactive = false;
  umbrella11.anchor.x = 0.5;
  umbrella11.anchor.y = 0.5;

  //
  umbrella12 = new PIXI.Sprite(res.data_umbrella.texture);
  container5.addChild(umbrella12);
  umbrella12.x = 50;
  umbrella12.y = 100;
  umbrella12.scale.set(0.5, 0.5);
  umbrella12.interactive = false;
  umbrella12.anchor.x = 0.5;
  umbrella12.anchor.y = 0.5;
  umbrella12.tint = 0x990066;

  umbrella13 = new PIXI.Sprite(res.data_umbrella.texture);
  container5.addChild(umbrella13);
  umbrella13.x = 50;
  umbrella13.y = 150;
  umbrella13.scale.set(0.5, 0.5);
  umbrella13.interactive = false;
  umbrella13.anchor.x = 0.5;
  umbrella13.anchor.y = 0.5;
  umbrella13.tint = 0x000000;

  umbrella14 = new PIXI.Sprite(res.data_umbrella.texture);
  container5.addChild(umbrella14);
  umbrella14.x = 50;
  umbrella14.y = 200;
  umbrella14.scale.set(0.5, 0.5);
  umbrella14.interactive = false;
  umbrella14.anchor.x = 0.5;
  umbrella14.anchor.y = 0.5;

  //
  umbrella15 = new PIXI.Sprite(res.data_umbrella.texture);
  container6.addChild(umbrella15);
  umbrella15.x = 50;
  umbrella15.y = 100;
  umbrella15.scale.set(0.5, 0.5);
  umbrella15.interactive = false;
  umbrella15.anchor.x = 0.5;
  umbrella15.anchor.y = 0.5;
  umbrella15.tint = 0x990066;

  umbrella16 = new PIXI.Sprite(res.data_umbrella.texture);
  container6.addChild(umbrella16);
  umbrella16.x = 50;
  umbrella16.y = 150;
  umbrella16.scale.set(0.5, 0.5);
  umbrella16.interactive = false;
  umbrella16.anchor.x = 0.5;
  umbrella16.anchor.y = 0.5;
  umbrella16.tint = 0x000000;

  umbrella17 = new PIXI.Sprite(res.data_umbrella.texture);
  container6.addChild(umbrella17);
  umbrella17.x = 50;
  umbrella17.y = 200;
  umbrella17.scale.set(0.5, 0.5);
  umbrella17.interactive = false;
  umbrella17.anchor.x = 0.5;
  umbrella17.anchor.y = 0.5;

  start();
}

/**
 * Basic Function
 */
function start() {
  // create a new timeline instance
  let tl = new TimelineMax();

  tl.to(umbrella, 1, { x: 300 })
    .to(umbrella, 1, { y: 300 }, "+=1") // 1 second after end of timeline(gap)
    .to(umbrella, 0.5, { rotation: 360 }, "-=0.5") // 0.5 second before end of timeline(overlap)
    .to(umbrella, 1, { pixi: { scaleX: 1.5, scaleY: 1.5 } }, 3); // at exactly 3 seconds from the beginning of the timeline = rotation end timing

  let tl2 = new TimelineMax();

  // add a label named scene1 at an exact time of 2-seconds into the timeline
  // 2秒後の正確な時間にscene1という名前のラベルをタイムラインに追加します
  tl2
    .add("scene1", 2)

    // add tween at scene1 label
    // "scene1"にtweenを追加
    .to(umbrella2, 4, { x: 300 }, "scene1")

    // add tween 2 seconds after scene1 label
    // "scene1"の2秒後にトゥイーンを追加
    .to(umbrella2, 1, { alpha: 0 }, "scene1+=2");
}

/**
 * No position: Direct Sequence
 * 位置パラメータが指定されていない場合、すべてのトゥイーンは直接連続して実行されます。
 */
function startDirect() {
  let tl = new TimelineMax();
  tl.to(umbrella3, 1, { x: 300 })
    .to(umbrella4, 1, { x: 300 })
    .to(umbrella5, 1, { x: 300 });
}

/**
 * Positive Relative: Gaps / Delays
 * 前のアニメーションが終了してからX秒後にトゥイーンを配置するには、正の相対値（ "+ = X"）を使用します。
 */
function startGap() {
  let tl = new TimelineMax();
  tl.to(umbrella6, 1, { x: 300 })
    .to(umbrella7, 1, { x: 300 }, "+=1")
    .to(umbrella8, 1, { x: 300 }, "+=1");
}

/**
 * Negative Relative: Overlap
 * 負の相対値（ "-= X"）を使用して、前のアニメーションが終了するX秒前にトゥイーンを配置します。
 */
function startOverlap() {
  let tl = new TimelineMax();
  tl.to(umbrella9, 2, { x: 300 })
    .to(umbrella10, 2, { x: 300 }, "-=1")
    .to(umbrella11, 2, { x: 300 }, "-=1");
}

/**
 * Absolute: Anywhere
 * 絶対値（数値）を使用して、トゥイーンを開始する正確な時間を秒単位で指定します。
 */
function startAnywhere() {
  let tl = new TimelineMax();
  tl.to(umbrella12, 4, { x: 300 })
    .to(umbrella13, 3, { x: 300 }, 1)
    .to(umbrella14, 2, { x: 300 }, 2);
}

/**
 *
 * ラベル（「文字列」）を使用して、トゥイーンを配置する場所を指定します。
 */
function startLabel() {
  let tl = new TimelineMax();
  tl.to(umbrella15, 1, { x: 300 })
    .add("blackblueMove", "+=1") // タイムラインの1秒後にラベルを追加
    .to(umbrella16, 2, { x: 300, rotation: 360 }, "blackblueMove")
    .to(umbrella17, 2, { x: 300, rotation: 360 }, "blackblueMove+=0.5");
}
