import Scene from "./scene";
import Map from "./map";
import constants from "./constants";

const canvas = document.createElement("canvas");
canvas.width = 1000;
canvas.height = 700;


console.log(constants);

( async () => {
	Scene.initialize(canvas.getContext("2d"));
	await Map.load({ mapID: 0 })
	Scene.render();
})()

document.body.appendChild(canvas)
