import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';

// Create a THREE JS WebGL Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true } );
// Renderer Settings
renderer.setSize( document.body.clientWidth*aspectRatio, document.body.clientHeight*aspectRatio ); // Renderer Aspect Ratio
renderer.shadowMap.enabled = true; // Renderer Shadow options
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
document.querySelector("main").appendChild( renderer.domElement ); // Instantiate the Renderer on the Webpage

// Create a THREE JS Scene
const scene = new THREE.Scene();
// Create a THREE JS Perspective Camera with 75 FOV
const camera = new THREE.PerspectiveCamera( 75, document.body.clientWidth / document.body.clientHeight, 0.1, 1000 );
// Instantiate the Camera in the scene
scene.add( camera );
// Set the initial Camera Position so the Northern Hemisphere is in focus
camera.position.z = 5*Math.cos(Math.PI/6);
camera.position.y = 5*Math.sin(Math.PI/6);
// Create an Orbital Camera Controls
const controls = new OrbitControls(camera, renderer.domElement);

const cube = new THREE.Mesh( new THREE.BoxGeometry(3,3,3), new THREE.MeshBasicMaterial({color: 0xffffff,}));

scene.add(cube);