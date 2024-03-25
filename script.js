import * as THREE from 'three';

const canvas = document.querySelector('canvas#webgl');

// We need 4 things:
// 1. Scene
// 2. Object
// 3. Camera
// 4. Renderer

// Scene:
const scene = new THREE.Scene();

// Groups:

const group = new THREE.Group();

scene.add(group);

// Object:

// We need to create a Mesh which requires 2 things:
// 1. Geometry
// 2. Material

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.x = 2;
group.add(cube3);

group.position.y = 1;
group.scale.y = 2;
group.rotation.y = 1;

// Sizes
const sizes = {
    width: 800,
    height: 600,
};

// Camera:

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// We have to change the position of camera on z axis to see things, by default camera is positioned in the center of the scene and objects are not visible 
camera.position.z = 3;

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
