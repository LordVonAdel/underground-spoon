var type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}

PIXI.utils.sayHello(type)

//Create the renderer
var renderer = PIXI.autoDetectRenderer(256, 256);

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a containers
var stage = new PIXI.Container();
var stageUI = new PIXI.Container();
var stageWorld = new PIXI.Container();
stage.addChild(stageUI);
stage.addChild(stageWorld);

//Tell the `renderer` to `render` the `stage`
renderer.render(stage);

//Making the renderer fullscreen
renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
renderer.autoResize = true;
renderer.resize(window.innerWidth, window.innerHeight);

//ui test
var message = new PIXI.Text("Hello There!",{fontFamily: "Arial", fontSize: 32, fill: "white"});
stageUI.addChild(message);

//game loop
function gameLoop(){
  requestAnimationFrame(gameLoop);
  renderer.render(stage);
  renderer.resize(window.innerWidth, window.innerHeight);
}
gameLoop();