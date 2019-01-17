import Scene from "./scene";

const canvas = document.createElement("canvas");
canvas.width = 1000;
canvas.height = 700;

Scene.init(canvas.getContext("2d"));

document.body.appendChild(canvas)
