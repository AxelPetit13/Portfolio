"use client";

import React, { useEffect, useRef } from "react";
import useProjectStore from "@/stores/projectStore";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import TextSplitter from "@/components/dom/utils/TextSplitter";

const Page = ({ params }: { params: { projectPath: string } }) => {
  const project = useProjectStore((state) =>
    state.projects.find((project) => project.url === params.projectPath),
  );

  const svgRef = useRef<SVGSVGElement>(null!);
  const quoteRef = useRef<HTMLQuoteElement>(null!);
  const refs = useRef<Array<Element>>([]);

  useEffect(() => {
    gsap.fromTo(
      svgRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1.2, ease: "power2.inOut" },
    );
    gsap.fromTo(
      svgRef.current,
      { rotate: 0 },
      {
        rotate: 360,
        duration: 10,
        delay: 1.2,
        ease: "sine.in",
      },
    );
    gsap.fromTo(
      svgRef.current,
      {
        rotate: 0,
      },
      {
        rotate: 360,
        duration: 10,
        delay: 11.2,
        ease: "none",
        repeat: -1,
      },
    );
  }, []);

  function svgVisibility(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      // If our target enters the viewport, add an “active” class to it
      if (entry.isIntersecting) {
        gsap.to(svgRef.current, {
          opacity: 0,
          y: -48,
          duration: 3,
        });
        // Otherwise, remove the “active” class
      }
    });
  }

  function textVisibility(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.to(entry.target, {
          opacity: 1,
          y: 0,
          duration: 1,
        });
      }
    });
  }

  // Instancing a new IntersectionObserver
  const observerForSVG = new IntersectionObserver(svgVisibility, {
    threshold: 0.1,
  });
  const observerForText = new IntersectionObserver(textVisibility, {
    threshold: 0.5,
  });

  // Adding a target to be observed
  useEffect(() => {
    observerForSVG.observe(quoteRef.current);
    refs.current.forEach((ref) => {
      observerForText.observe(ref);
    });
  }, []);

  return (
    project && (
      <main>
        <div className="relative flex justify-end [height:calc(100vh-3rem)]">
          <div className="flex flex-col items-end justify-around">
            <TextSplitter type={"h1"} align={"right"} delay={0.5}>
              {project.name}
            </TextSplitter>

            <TextSplitter type={"h3"} delay={0.7}>
              Project Subtitle
            </TextSplitter>
          </div>
          <div className="absolute bottom-0 left-[55%] h-1/6 aspect-square rounded-full  translate-y-1/2">
            <svg
              ref={svgRef}
              viewBox="0 0 1000 1000"
              /*className="animate-spin-slow"*/
            >
              <path
                id="curve"
                d="M 100 500, A 400 400 0 0 1 900 500, A 400 400 0 0 1 100 500"
              />
              <text textLength="2450" className="fill-white rotate-1">
                <textPath xlinkHref="#curve" className="text-9xl">
                  Scroll down Scroll down Scroll down
                </textPath>
              </text>
            </svg>
          </div>
        </div>
        <section className="h-96 flex flex-col justify-center items-center gap-8 my-32">
          <q ref={quoteRef} className="text-center max-w-2xl text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            deleniti dignissimos, doloremque enim eos et exercitationem
            explicabo illo inventore laboriosam natus neque nobis nostrum
            obcaecati quibusdam sunt velit voluptatibus voluptatum!
          </q>
          <span className="font-bold text-2xl">- Victor Hugo -</span>
        </section>

        <section className="my-32">
          <h2
            ref={(node) => {
              refs.current.push(node as Element);
            }}
            className="opacity-0 translate-y-16"
          >
            Description
          </h2>
          <p
            ref={(node) => {
              refs.current.push(node as Element);
            }}
            className="w-full max-w-6xl text-justify opacity-0 translate-y-16"
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus at commodi consequatur, corporis, ea est, fugiat minima
              minus nobis omnis optio reprehenderit temporibus voluptas? Aliquid
              consectetur et neque quia temporibus.
            </span>
            <span>
              Dolorem dolores ea esse inventore laboriosam sit suscipit? Ad
              atque cum dignissimos dolorem eum maxime molestiae molestias
              necessitatibus officia optio sunt, velit voluptates voluptatum!
              Aliquid architecto iure nesciunt sed veritatis.
            </span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              amet assumenda culpa cum cupiditate dignissimos error et ex
              exercitationem hic inventore, laboriosam omnis pariatur quibusdam
              quod, quos sit ullam, voluptatibus.
            </span>
            <span>
              Aperiam assumenda beatae doloremque earum eveniet hic incidunt
              iste labore laboriosam, odio officiis porro quaerat quas quis
              repellat rerum totam veritatis voluptate voluptatem voluptatum?
              Error et eveniet inventore qui quia.
            </span>
            <span>
              Accusantium animi consequuntur culpa cum deleniti deserunt dolor,
              dolore error eum fuga, harum hic iste itaque laudantium maiores
              nihil nobis nostrum numquam odio optio recusandae repudiandae
              soluta totam ut voluptate.
            </span>
          </p>
        </section>

        <section className="my-32">
          <h2
            ref={(node) => {
              refs.current.push(node as Element);
            }}
            className="opacity-0 translate-y-16"
          >
            Challenges & solutions
          </h2>
          <div
            ref={(node) => {
              refs.current.push(node as Element);
            }}
            className="mt-6 border-t border-white max-w-6xl opacity-0 translate-y-16 "
          >
            <dl className="divide-y divide-white">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 hidden sm:visible">
                <dt className="font-bold leading-6 text-xl ">Problemes</dt>
                <dd className="font-bold leading-6 text-xl sm:col-span-2 sm:mt-0">
                  Solutions
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="font-bold leading-6 ">Probleme 1</dt>
                <dd className="mt-1 leading-6  sm:col-span-2 sm:mt-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium alias autem consequatur dolor ea eos ex incidunt
                  ipsam, magni odit quis quisquam quo velit? Accusantium debitis
                  dicta dignissimos enim error eveniet labore obcaecati vero
                  voluptatum!
                </dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="font-bold leading-6 ">Probleme 2</dt>
                <dd className="leading-6  sm:col-span-2 sm:mt-0">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                  consequat sint. Sit id mollit nulla mollit nostrud in ea
                  officia proident. Irure nostrud pariatur mollit ad adipisicing
                  reprehenderit deserunt qui eu.
                </dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="font-bold leading-6 ">Probleme 3</dt>
                <dd className="leading-6  sm:col-span-2 sm:mt-0">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                  consequat sint. Sit id mollit nulla mollit nostrud in ea
                  officia proident. Irure nostrud pariatur mollit ad adipisicing
                  reprehenderit deserunt qui eu.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="my-32">
          <h2
            ref={(node) => {
              refs.current.push(node as Element);
            }}
            className="opacity-0 translate-y-16"
          >
            Features
          </h2>
          <div
            ref={(node) => {
              refs.current.push(node as Element);
            }}
            className="mt-6 border-t border-gray-100 max-w-6xl opacity-0 translate-y-16"
          >
            <dl className="divide-y divide-white">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="font-bold leading-6 ">Feature 1</dt>
                <dd className="mt-1 leading-6  sm:col-span-2 sm:mt-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium alias autem consequatur dolor ea eos ex incidunt
                  ipsam, magni odit quis quisquam quo velit? Accusantium debitis
                  dicta dignissimos enim error eveniet labore obcaecati vero
                  voluptatum!
                </dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="font-bold leading-6 ">Feature 2</dt>
                <dd className="mt-1 leading-6  sm:col-span-2 sm:mt-0">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                  consequat sint. Sit id mollit nulla mollit nostrud in ea
                  officia proident. Irure nostrud pariatur mollit ad adipisicing
                  reprehenderit deserunt qui eu.
                </dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className=" font-bold leading-6 ">Feature 3</dt>
                <dd className="mt-1 leading-6  sm:col-span-2 sm:mt-0">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                  consequat sint. Sit id mollit nulla mollit nostrud in ea
                  officia proident. Irure nostrud pariatur mollit ad adipisicing
                  reprehenderit deserunt qui eu.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="my-32">
          <h2
            ref={(node) => {
              refs.current.push(node as Element);
            }}
            className="opacity-0 translate-y-16"
          >
            Technologies
          </h2>
        </section>

        <section className="my-32">
          <h2
            ref={(node) => {
              refs.current.push(node as Element);
            }}
            className="opacity-0 translate-y-16"
          >
            Repository
          </h2>
          <p
            ref={(node) => {
              refs.current.push(node as Element);
            }}
            className="opacity-0 translate-y-16"
          >
            The link to the Github repository is available
            <Link href="#">
              {" "}
              <span className="underline">here</span>
            </Link>
          </p>
        </section>
      </main>
    )
  );
};

export default Page;
