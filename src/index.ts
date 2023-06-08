import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Loader.shared.add({url:"./vege.png",name:"vegetta"})

Loader.shared.onComplete.add(()=>{

	const clampy: Sprite = Sprite.from("vegetta");
	
	console.log(clampy.height, clampy.width)

	clampy.anchor.set(0.5);
	
	clampy.x = 400;
	clampy.y = 400;
	
	app.stage.addChild(clampy);
})

Loader.shared.load();
