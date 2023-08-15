"use client";

import React, { useEffect, useRef } from "react";
import TextSplitter from "@/components/dom/utils/TextSplitter";
import { gsap } from "gsap";

const Page = () => {
  const introductionRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    gsap.to(introductionRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 0.8,
    });
  }, []);
  return (
    <main>
      <TextSplitter type={"h1"} delay={0.5}>
        Contact Me
      </TextSplitter>

      <div
        ref={introductionRef}
        className="w-1/2 max-w-xl flex flex-col gap-4 opacity-0 translate-y-16"
      >
        <p>
          Don&apos;t be shy, I&apos;d love to hear from you! Whether you have a
          question or just want to say hi, feel free to contact me. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Accusantium ad deleniti,
          eos laboriosam laborum natus neque nobis, perferendis praesentium quae
          reprehenderit similique suscipit tempora unde ut vel veritatis vero
          voluptates!
        </p>
      </div>
      <form className="max-w-6xl"></form>
    </main>
  );
};

export default Page;
