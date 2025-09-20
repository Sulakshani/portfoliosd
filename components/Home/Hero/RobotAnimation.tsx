import * as THREE from 'three';
        import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
        import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

        // 1. Scene, Camera, and Renderer Setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff); // Use a solid white background

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 1.5, 4);

        const canvas = document.querySelector('#robot-canvas') as HTMLCanvasElement | null;
        if (!canvas) {
            throw new Error("Canvas element with id 'robot-canvas' not found.");
        }
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        // 2. Add Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7.5);
        scene.add(directionalLight);
        
        // Add OrbitControls for interactivity
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.target.set(0, 1, 0); // Target the center of the robot

        // 3. Load the 3D Robot Model
        const loader = new GLTFLoader();
        let mixer: THREE.AnimationMixer | undefined; // Animation mixer

        loader.load(
            // IMPORTANT: Replace this with the path to your own .glb file
            '/images/robot.gif', 
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(1.5, 1.5, 1.5); // Adjust scale if needed
                model.position.y = -1; // Adjust position to sit on the "ground"
                scene.add(model);

                // 4. Setup Animation
                mixer = new THREE.AnimationMixer(model);
                // IMPORTANT: Replace 'waving' with the actual name of the animation in your model
                const waveClip = gltf.animations.find(clip => clip.name === 'waving');
                if (waveClip) {
                    const waveAction = mixer.clipAction(waveClip);
                    waveAction.play();
                }

                // 5. Show the Speech Bubble after a delay
                setTimeout(() => {
                    const bubble = document.getElementById('bubble');
                    if (bubble) {
                        bubble.classList.add('visible');
                    }
                }, 2000); // 2-second delay
            },
            undefined, // onProgress callback (optional)
            (error) => {
                console.error('An error happened while loading the model:', error);
                // Display an error message to the user
                const bubble = document.getElementById('bubble');
                if (bubble) {
                    bubble.textContent = "Error loading model!";
                    bubble.classList.add('visible');
                }
            }
        );

        // Animation Loop
        const clock = new THREE.Clock();
        function animate() {
            requestAnimationFrame(animate);

            if (mixer) {
                mixer.update(clock.getDelta());
            }
            controls.update();
            renderer.render(scene, camera);
        }
        animate();

        // Handle window resizing
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });