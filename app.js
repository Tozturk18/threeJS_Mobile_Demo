import * as THREE from 'three';
//import { OrbitControls } from "https://unpkg.com/three@0.138.0/examples/jsm/controls/OrbitControls.js";

    console.log("Hello2");

    // Create a THREE JS WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true } );
    // Renderer Settings
    renderer.setSize( document.body.clientWidth, document.body.clientHeight ); // Renderer Aspect Ratio
    renderer.shadowMap.enabled = true; // Renderer Shadow options
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    document.querySelector("main").appendChild( renderer.domElement ); // Instantiate the Renderer on the Webpage
    

    console.log("Hello3");

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
    //const controls = new OrbitControls(camera, renderer.domElement);

    const cube = new THREE.Mesh( new THREE.BoxGeometry(3,3,3), new THREE.MeshBasicMaterial({color: 0xff0000,}));

    scene.add(cube);

    function animate() {
        requestAnimationFrame( animate );
    
        // Update the controls for the Orbital Camera to rotate automatically
        //controls.update();
    
        // Rerender the scene
        renderer.render(scene, camera);
    }
  
    // Call the animate() function
    animate();