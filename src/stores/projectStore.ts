import { create } from "zustand";
import { ProjectType } from "@/interfaces/interfaces";

const projects: Array<ProjectType> = [
  {
    id: 1,
    name: "Project 1",
    url: "project1",
    description: "This is project 1",
    image: "/images/cyberpunkwomen.png",
  },
  {
    id: 2,
    name: "Project 2",
    url: "project2",
    description: "This is project 2",
    image: "/images/glass_flower.png",
  },
  {
    id: 3,
    name: "Project 3",
    url: "project3",
    description: "This is project 3",
    image: "/images/IronmanBuddha.jpg",
  },
  {
    id: 4,
    name: "Project 4",
    url: "project4",
    description: "This is project 4",
    image: "/images/snake.png",
  },
  {
    id: 5,
    name: "Project 5",
    url: "project5",
    description: "This is project 5",
    image: "/images/pink_women.jpg",
  },
  {
    id: 6,
    name: "Project 6",
    url: "project6",
    description: "This is project 6",
    image: "/images/WomenFashion.jpg",
  },
  {
    id: 7,
    name: "Project 7",
    url: "project7",
    description: "This is project 7",
    image: "/images/ManWalking.png",
  },
  {
    id: 8,
    name: "Project 8",
    url: "project8",
    description: "This is project 8",
    image: "/images/cyborgposter.webp",
  },
  {
    id: 9,
    name: "Project 9",
    url: "project9",
    description: "This is project 9",
    image: "/images/octopus1.png",
  },
];
interface ProjectState {
  projects: Array<ProjectType>;
  activeProject: ProjectType | null;
  setActiveProject: (project: ProjectType | null) => void;
}

const useProjectStore = create<ProjectState>((set) => ({
  projects: projects,
  activeProject: null,
  setActiveProject: (project: ProjectType | null) =>
    set({ activeProject: project }),
}));

export default useProjectStore;
