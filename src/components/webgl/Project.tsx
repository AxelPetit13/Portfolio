import React, { useEffect, useMemo, useRef } from "react";
import { Image } from "@react-three/drei";
import useProjectStore from "@/stores/projectStore";
import { useRouter } from "next/navigation";
import { Mesh, ShaderMaterial } from "three";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";
import { ProjectType } from "@/interfaces/interfaces";

type ProjectProps = {
  id: number;
};

type ProjectParams = {
  posX: number;
  posY: number;
  posZ: number;
  scaleX: number;
  scaleY: number;
  opacity: number;
};
const Project = ({ id }: ProjectProps) => {
  const ref = useRef<Mesh>(null!);
  const projects = useProjectStore((state) => state.projects);
  const project = projects?.find((project) => project.id === id);
  const activeProject = useProjectStore((state) => state.activeProject);
  const setActiveProject = useProjectStore((state) => state.setActiveProject);
  const [firstRender, setFirstRender] = React.useState(true);
  const router = useRouter();
  const [hovered, setHovered] = React.useState(false);

  const initialPosX = -(projects.length - 1) / 2 + (id - 1);
  const initialPosY = useMemo(
    () => randomPositionY(id, projects.length),
    [id, projects.length],
  );
  const initialPosZ = -1;

  const initialParameters: ProjectParams = {
    posX: initialPosX,
    posY: initialPosY,
    posZ: initialPosZ,
    scaleX: 0.9,
    scaleY: 4,
    opacity: 0,
  };
  const parameters: ProjectParams = useMemo(() => {
    return {
      posX: initialPosX,
      posY: initialPosY,
      posZ: initialPosZ,
      scaleX: 0.9,
      scaleY: 4,
      opacity: 0,
    };
  }, [initialPosX, initialPosY, initialPosZ]);

  const introductionDuration = 1;
  const introductionStaggerDelay = 0.1;
  useEffect(() => {
    // Without this condition, the project doesn't appear if a project page is reloaded.
    if (project) {
      if (location.pathname.startsWith("/projects")) {
        setActiveProject(project);
      }
    }

    setTimeout(
      () => {
        setFirstRender(false);
      },
      introductionDuration + introductionStaggerDelay * 1000 * id,
    );
  }, [id, project, setActiveProject]);

  useFrame(() => {
    if (project) {
      if (location.pathname === "/") {
        homePosition(
          id,
          firstRender,
          parameters,
          initialParameters,
          introductionDuration,
          introductionStaggerDelay,
          hovered,
        );
      } else if (location.pathname.startsWith("/projects")) {
        projectPosition(activeProject, project, parameters);
      } else if (location.pathname === "/about") {
        aboutPosition(id, parameters, projects.length);
      } else if (location.pathname === "/contacts") {
        contactPosition(parameters, projects.length, id);
      } else {
        console.error("Error: Unknown pathname");
      }
    } else {
      console.error("Error: Project is null");
    }

    animate(ref, parameters);
  });
  return (
    project && (
      <>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image
          ref={ref}
          url={project.image}
          transparent={true}
          onClick={(event) => {
            event.stopPropagation();
            router.push(`/projects/${project.url}`);
            setActiveProject(project);
          }}
          onPointerOver={(event) => {
            event.stopPropagation();
            setHovered(true);
          }}
          onPointerOut={(event) => {
            event.stopPropagation();
            setHovered(false);
          }}
        />
      </>
    )
  );
};

export default Project;

function randomPositionY(id: number, projectNumber: number) {
  let posY = Math.random() - 1;
  if (id === 0 || id === projectNumber - 1) {
    posY = 0;
  }
  return posY;
}
function animate(ref: React.MutableRefObject<Mesh>, parameters: ProjectParams) {
  ref.current.position.x = parameters.posX;
  ref.current.position.y = parameters.posY;
  ref.current.position.z = parameters.posZ;
  ref.current.scale.x = parameters.scaleX;
  ref.current.scale.y = parameters.scaleY;
  if (ref.current.material instanceof ShaderMaterial) {
    // Check if the material is ShaderMaterial
    ref.current.material.uniforms.scale.value.x = parameters.scaleX;
    ref.current.material.uniforms.scale.value.y = parameters.scaleY;
    ref.current.material.opacity = parameters.opacity;
  }
}

function homePosition(
  id: number,
  firstRender: boolean,
  parameters: ProjectParams,
  initialParameters: ProjectParams,
  introductionDuration: number,
  introductionStaggerDelay: number,
  hovered: boolean,
) {
  if (firstRender) {
    gsap.to(parameters, {
      posX: initialParameters.posX,
      posY: initialParameters.posY,
      posZ: 0,
      scaleX: 0.9,
      scaleY: 4,
      opacity: 1,
      duration: introductionDuration,
      delay: introductionStaggerDelay * id,
      ease: "power3.out",
    });
  } else {
    if (hovered) {
      gsap.to(parameters, {
        posX: initialParameters.posX,
        posY: initialParameters.posY,
        posZ: 0,
        scaleX: 0.95,
        scaleY: 4.1,
        opacity: 1,
        duration: 1,
      });
    } else {
      gsap.to(parameters, {
        posX: initialParameters.posX,
        posY: initialParameters.posY,
        posZ: 0,
        scaleX: 0.9,
        scaleY: 4,
        opacity: 1,
        duration: 1,
      });
    }
  }
}

function projectPosition(
  activeProject: ProjectType | null,
  project: ProjectType,
  parameters: ProjectParams,
) {
  if (activeProject && activeProject.id === project?.id) {
    gsap.to(parameters, {
      posX: -3,
      posY: 0,
      posZ: 0,
      scaleX: 6,
      scaleY: 6.9,
      opacity: 1,
      duration: 1,
    });
  } else {
    gsap.to(parameters, {
      posX: 0,
      posY: -7,
      posZ: 0,
      scaleX: 0.9,
      scaleY: 4,
      opacity: 1,
      duration: 1,
    });
  }
}

function aboutPosition(
  id: number,
  parameters: ProjectParams,
  projectsNumber: number,
) {
  gsap.to(parameters, {
    posX: 3,
    posY: (-(projectsNumber + 1) / 2 + id) * 0.5,
    posZ: 0,
    scaleX: 6,
    scaleY: 0.5,
    opacity: 1,
    duration: 1,
  });
}

function contactPosition(
  parameters: ProjectParams,
  projectsNumber: number,
  id: number,
) {
  gsap.to(parameters, {
    posZ: -3,
    opacity: 0,
    duration: 1,
  });
}
