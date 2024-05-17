'use client'

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html, useProgress, Environment } from "@react-three/drei";

const Computers = ({ isMobile }: { isMobile: boolean }) => {
  const model = useGLTF("./asset/trough-v2.glb");

  return (
    <group dispose={null}>
      <mesh>
        {/* <hemisphereLight intensity={0.15} groundColor='black' /> */}
        {/* <spotLight
        position={[-2, 8, 0]}
        angle={90}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      /> */}
        {/* <pointLight intensity={1} /> */}
        <primitive
          object={model.scene}
          scale={isMobile ? 0.8 : 2}
          position={[0, 0, 0]}
          rotation={[0.1, -0.4, 0]}
        />
      </mesh>
    </group>
  );
};

function Loading() {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
}

const TroughCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: { matches: boolean | ((prevState: boolean) => boolean); }) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, -2, 17], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loading />}>
        <OrbitControls
          enableZoom={true}
        // maxPolarAngle={Math.PI / 2}
        // minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <Computers isMobile={isMobile} />
        <Environment preset="studio" />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default TroughCanvas;