"use client";

import TextSplitter from "@/components/dom/utils/TextSplitter";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Page = () => {
  const introductionRef = useRef<HTMLDivElement>(null!);
  const refs = useRef<Array<Element>>([]);

  // Adding a target to be observed
  useEffect(() => {
    gsap.to(introductionRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 0.8,
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 1,
            });
          }
        });
      },
      { threshold: 0.5 },
    );
    refs.current.forEach((ref) => {
      observer.observe(ref);
    });
  }, []);

  return (
    <main>
      <section className="mb-64">
        <TextSplitter type={"h1"} delay={0.5}>
          About me
        </TextSplitter>
        <div
          ref={introductionRef}
          className="max-w-xl  flex flex-col gap-4 opacity-0 translate-y-16"
        >
          <p>
            I am a passionate engineering student specializing in IT, currently
            enrolled in an engineering school. My journey into the world of web
            development began two years ago, and I have been captivated by it
            ever since. With an insatiable curiosity and a zest for exploration,
            I am always eager to delve into fresh and exciting projects. My
            dedication to honing my skills in web development reflects my drive
            to embrace innovation and continuously expand my knowledge.
          </p>
          <p>
            I am currently looking for an internship in web development, and I
            am open to any opportunities that may arise.
          </p>
        </div>
      </section>

      <section className="my-32">
        <h2
          ref={(node) => {
            refs.current.push(node as Element);
          }}
          className="opacity-0 translate-y-16"
        >
          Education
        </h2>
        <p
          ref={(node) => {
            refs.current.push(node as Element);
          }}
          className="max-w-6xl opacity-0 translate-y-16"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          cum deserunt dignissimos distinctio dolore doloremque impedit
          inventore laboriosam laudantium maiores nihil, nobis obcaecati,
          perferendis quaerat quod ratione soluta temporibus ut? Ab
          exercitationem optio sint totam unde? At cumque delectus laboriosam
          nulla praesentium rem sapiente. Doloremque fugit perspiciatis quas
          quisquam sapiente voluptatem voluptatibus! Aut distinctio incidunt,
          minus nam nulla quia totam. A ab, aliquam asperiores commodi
          consectetur cum delectus dolore, ducimus eaque enim eveniet excepturi
          explicabo harum labore maiores neque nisi praesentium quia quo rerum
          temporibus, totam veniam. Asperiores natus, voluptatem! Amet
          aspernatur atque aut beatae blanditiis consectetur debitis deleniti
          eius eligendi enim esse eveniet excepturi id iste laborum laudantium
          minima numquam omnis quidem sunt ullam veniam, vitae. Aspernatur odio,
          officia. Dolores earum nam nulla obcaecati recusandae sint. Commodi
          cumque dolorem eos id, incidunt modi quo unde veritatis voluptatibus
          voluptatum? Ab, est fugiat illum laborum maxime natus nobis
          praesentium saepe sint!
        </p>
      </section>
      <section className="my-32">
        <h2
          ref={(node) => {
            refs.current.push(node as Element);
          }}
          className="opacity-0 translate-y-16"
        >
          Ambitions
        </h2>
        <p
          ref={(node) => {
            refs.current.push(node as Element);
          }}
          className="max-w-6xl opacity-0 translate-y-16"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          cum deserunt dignissimos distinctio dolore doloremque impedit
          inventore laboriosam laudantium maiores nihil, nobis obcaecati,
          perferendis quaerat quod ratione soluta temporibus ut? Ab
          exercitationem optio sint totam unde? At cumque delectus laboriosam
          nulla praesentium rem sapiente. Doloremque fugit perspiciatis quas
          quisquam sapiente voluptatem voluptatibus! Aut distinctio incidunt,
          minus nam nulla quia totam. A ab, aliquam asperiores commodi
          consectetur cum delectus dolore, ducimus eaque enim eveniet excepturi
          explicabo harum labore maiores neque nisi praesentium quia quo rerum
          temporibus, totam veniam. Asperiores natus, voluptatem! Amet
          aspernatur atque aut beatae blanditiis consectetur debitis deleniti
          eius eligendi enim esse eveniet excepturi id iste laborum laudantium
          minima numquam omnis quidem sunt ullam veniam, vitae. Aspernatur odio,
          officia. Dolores earum nam nulla obcaecati recusandae sint. Commodi
          cumque dolorem eos id, incidunt modi quo unde veritatis voluptatibus
          voluptatum? Ab, est fugiat illum laborum maxime natus nobis
          praesentium saepe sint!
        </p>
      </section>
      <section className="my-32">
        <h2
          ref={(node) => {
            refs.current.push(node as Element);
          }}
          className="opacity-0 translate-y-16"
        >
          Hobbies
        </h2>
        <p
          ref={(node) => {
            refs.current.push(node as Element);
          }}
          className="max-w-6xl opacity-0 translate-y-16"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          cum deserunt dignissimos distinctio dolore doloremque impedit
          inventore laboriosam laudantium maiores nihil, nobis obcaecati,
          perferendis quaerat quod ratione soluta temporibus ut? Ab
          exercitationem optio sint totam unde? At cumque delectus laboriosam
          nulla praesentium rem sapiente. Doloremque fugit perspiciatis quas
          quisquam sapiente voluptatem voluptatibus! Aut distinctio incidunt,
          minus nam nulla quia totam. A ab, aliquam asperiores commodi
          consectetur cum delectus dolore, ducimus eaque enim eveniet excepturi
          explicabo harum labore maiores neque nisi praesentium quia quo rerum
          temporibus, totam veniam. Asperiores natus, voluptatem! Amet
          aspernatur atque aut beatae blanditiis consectetur debitis deleniti
          eius eligendi enim esse eveniet excepturi id iste laborum laudantium
          minima numquam omnis quidem sunt ullam veniam, vitae. Aspernatur odio,
          officia. Dolores earum nam nulla obcaecati recusandae sint. Commodi
          cumque dolorem eos id, incidunt modi quo unde veritatis voluptatibus
          voluptatum? Ab, est fugiat illum laborum maxime natus nobis
          praesentium saepe sint!
        </p>
      </section>
    </main>
  );
};

export default Page;
