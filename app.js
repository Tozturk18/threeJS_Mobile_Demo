import * as THREE from 'https://unpkg.com/three@0.138.0/build/three.module.js';
import { OrbitControls } from "./orbitControls.js";
import { DomMesh } from './DomMesh.js';

    // Create a THREE JS WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true } );
    // Renderer Settings
    renderer.setSize( document.body.clientWidth, document.body.clientHeight ); // Renderer Aspect Ratio
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

    const cube = new DomMesh( new THREE.SphereGeometry(0.05), new THREE.MeshBasicMaterial({color: 0xff0000}), camera);

    scene.add(cube);

    cube.MouseDown( () => {
        cube.material.color = new THREE.Color( Math.random() * 0xffffff );
    })

    function animate() {
        requestAnimationFrame( animate );
    
        // Update the controls for the Orbital Camera to rotate automatically
        //controls.update();
    
        // Rerender the scene
        renderer.render(scene, camera);
    }
  
    // Call the animate() function
    animate();