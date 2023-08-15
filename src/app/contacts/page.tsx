"use client";

import React from "react";
import TextSplitter from "@/components/dom/utils/TextSplitter";

const Page = () => {
  return (
    <main>
      <TextSplitter type={"h1"} delay={0.5}>
        Contact Me
      </TextSplitter>

      <div className="w-1/2 max-w-xl flex flex-col gap-4 ">
        <p>
          Don&apos;t be shy, I&apos;d love to hear from you! Whether you have a
          question or just want to say hi, feel free to contact me. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Accusantium ad deleniti,
          eos laboriosam laborum natus neque nobis, perferendis praesentium quae
          reprehenderit similique suscipit tempora unde ut vel veritatis vero
          voluptates!
        </p>
      </div>
      <form></form>
    </main>
  );
};

export default Page;
