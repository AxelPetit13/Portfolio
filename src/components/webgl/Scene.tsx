import React, { useEffect } from "react";
import useProjectStore from "@/stores/projectStore";
import { ProjectType } from "@/interfaces/interfaces";
import Project from "@/components/webgl/Project";
import { Plane } from "@react-three/drei";

const Scene = () => {
  const projects: Array<ProjectType> = useProjectStore(
    (state) => state.projects,
  );
  const activeProject = useProjectStore((state) => state.activeProject);
  const setActiveProject = useProjectStore((state) => state.setActiveProject);

  return (
    <>
      <ambientLight />
      {/*<Plane
        args={[10, 10]}
        position={[0, 0, -1]}
        onClick={() => {
          setActiveProject(null);
        }}
      />*/}
      <group>
        {projects.map((project, index) => {
          return <Project key={project.id} id={project.id} />;
        })}
      </group>
    </>
  );
};

export default Scene;
