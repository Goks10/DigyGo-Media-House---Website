import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sparkles, Float } from "@react-three/drei";
import * as THREE from "three";

function FloatingGeometry() {
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.002;
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    return (
        <group ref={meshRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh position={[4, 2, -5]} rotation={[0, 0, Math.PI / 4]}>
                    <icosahedronGeometry args={[1.5, 0]} />
                    <meshBasicMaterial color="#ff5500" wireframe transparent opacity={0.3} />
                </mesh>
            </Float>

            <Float speed={3} rotationIntensity={1} floatIntensity={0.5}>
                <mesh position={[-4, -2, -6]} rotation={[Math.PI / 3, 0, 0]}>
                    <octahedronGeometry args={[1, 0]} />
                    <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.2} />
                </mesh>
            </Float>

            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={2}>
                <mesh position={[0, 4, -10]}>
                    <torusGeometry args={[3, 0.02, 16, 100]} />
                    <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
                </mesh>
            </Float>
        </group>
    );
}

export function ThreeBackground() {
    return (
        <div className="fixed inset-0 z-0 bg-black pointer-events-none">
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                <fog attach="fog" args={["#000000", 5, 30]} />
                <ambientLight intensity={0.5} />

                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                <Sparkles count={200} size={2} scale={[20, 20, 20]} speed={0.4} opacity={0.5} color="#ff5500" />

                <FloatingGeometry />
                {/* <FloatingGrid /> */}
            </Canvas>
        </div>
    );
}
