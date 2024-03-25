import * as THREE from 'three';

const canvas = document.querySelector('canvas#webgl');

// We need 4 things:
// 1. Scene
// 2. Object
// 3. Camera
// 4. Renderer

// Scene:
const scene = new THREE.Scene();

// Object:

// We need to create a Mesh which requires 2 things:
// 1. Geometry
// 2. Material

// Geometry:
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Material:
// Set {wireframe: true} to get objects wireframe
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);

// Object Rotation is Possible from four things:
// 1. Position
// 2. Scale
// 3. Rotation
// 4. Quaternion

// 1. Position:

// mesh.position.x = 1;
// mesh.position.y = -0.5;
// mesh.position.z = 1;

// Shorthand:      x,  y,  z
mesh.position.set(1, -0.5, 1);

// 2. Scale:

// mesh.scale.x = 1;
// mesh.scale.y = -0.5;
// mesh.scale.z = 1;

// Shorthand:      x,  y,  z
mesh.scale.set(1, -0.5, 1);

// 3. Rotation:

mesh.rotation.reorder('YXZ');
// mesh.rotation.x = Math.PI;
// mesh.rotation.y = Math.PI * 0.5;
// mesh.rotation.z = Math.PI / 2;

// Shorthand:      x,  y,  z
mesh.rotation.set(Math.PI, Math.PI * 0.5, Math.PI / 2);

// Method to check distance between center-point and object
console.log(mesh.position.length());

scene.add(mesh);

// Sizes
const sizes = {
    width: 800,
    height: 600,
};

// Camera:

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// We have to change the position of camera on z axis to see things, by default camera is positioned in the center of the scene and objects are not visible 
camera.position.z = 3;

// Method to check the distance between camera and cube
console.log(camera.position.distanceTo(mesh.position));

// Method for positioning camera on specific object

// camera.lookAt(mesh.position);

scene.add(camera);

// Axes Helper:
// Adding `Axes Helper` to scene for axis tracking
const axesHelper = new THREE.AxesHelper(1);

scene.add(axesHelper);

// Renderer:

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
// Nothing will work after render
