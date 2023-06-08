import { Application, Container, Loader, Point, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x761BB2,
	width: 1280,
	height: 720
});

window.addEventListener("resize",()=>{
	console.log("resized!");
	const scaleX = window.innerWidth/app.screen.width;
	const scaleY = window.innerHeight/app.screen.height;
	const scale = Math.min(scaleX,scaleY);

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);	

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth)/2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight)/2);

	app.view.style.width= gameWidth + "px";
	app.view.style.height= gameHeight + "px";

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";

	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";

})
window.dispatchEvent(new Event("resize"))

Loader.shared.add({url:"./vege.png",name:"vegetta"})
Loader.shared.add({url:"./gorra.png",name:"gorra"})
Loader.shared.onComplete.add(()=>{
	const gorra: Sprite = Sprite.from("gorra");
	const vege: Sprite = Sprite.from("vegetta");

	console.log(vege.height, vege.width);

	const vegeygorro : Container = new Container();
	vegeygorro.scale.set(0.5);

	vegeygorro.x=200;
	vegeygorro.y=300;

	gorra.toGlobal(new Point());
	
	vegeygorro.addChild(vege);
	vegeygorro.addChild(gorra);
	app.stage.addChild(vegeygorro);
})

Loader.shared.load();
