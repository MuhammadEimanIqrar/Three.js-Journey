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
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Sizes
const sizes = {
    width: 800,
    height: 600,
};

// Camera:

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

camera.position.z = 3;

scene.add(camera);

// Renderer:

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
