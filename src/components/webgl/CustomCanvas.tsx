"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "@/components/webgl/Scene";
import useProjectStore from "@/stores/projectStore";

const CustomCanvas = () => {
  return (
    <div className="absolute top-0 left-0 -z-10 h-screen w-screen">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
};

export default CustomCanvas;
