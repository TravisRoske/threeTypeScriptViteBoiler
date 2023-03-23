import * as THREE from "three"

const width = window.innerWidth;
const height = window.innerHeight;

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('app') as HTMLCanvasElement
})
renderer.setSize(width, height);

const mainCam = new THREE.PerspectiveCamera(
  60,               //Field of View
  width/height,     //Aspect Ratio
  0.1,              //Near Clipping
  100               //Far Clipping
) 

const scene = new THREE.Scene()

renderer.render(scene, mainCam)