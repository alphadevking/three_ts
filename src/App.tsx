import './App.css';
import * as THREE from 'three';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // 1. Create the scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#F0F0F0');

    // 2. Add the camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // 3. Create and add a cube object
    const geometry = new THREE.LatheGeometry();
    const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585' });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 4. Add lighting
    const light = new THREE.DirectionalLight(0x9cdba6, 10);
    light.position.set(1, 1, 1);
    scene.add(light);

    // Set up the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    
    animate();

    // Cleanup on component unmount
    return () => {
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div>
      {/* Your additional JSX here */}
    </div>
  );
}

export default App;
