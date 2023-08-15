import React, { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";

type TextSplitterProps = {
  children: string;
  type: string;
  delay?: number;
  stagger?: number;
  align?: "left" | "center" | "right";
};

type TextTagProviderProps = {
  children: JSX.Element | JSX.Element[];
  type: string;
  align?: "left" | "center" | "right";
};

const TextTagProvider = ({ children, type, align }: TextTagProviderProps) => {
  switch (type) {
    case "h1":
      return (
        <h1 className={`${align === "right" ? "text-right" : "text-left"}`}>
          {children}
        </h1>
      );
    case "h2":
      return <h2>{children}</h2>;
    case "h3":
      return <h3>{children}</h3>;
    case "p":
      return <p>{children}</p>;
    case "q":
      return <q>{children}</q>;
    default:
      return <span>{children}</span>;
  }
};

const TextSplitter = ({
  children,
  type,
  delay,
  stagger,
  align,
}: TextSplitterProps) => {
  const words = children.split(" ");

  const refs = useRef<Array<HTMLSpanElement | null> | null>([]);

  useEffect(() => {
    const characters = refs.current;

    if (characters) {
      characters.forEach((character, index) => {
        gsap.to(character, {
          opacity: 1,
          y: 0,
          scaleY: 1,
          duration: 1,
          ease: "power4.out",
          delay: (delay ?? 0) + index * (stagger ?? 0.02),
        });
      });
    }
  }, [delay, stagger]);

  return (
    <TextTagProvider type={type} align={align}>
      {words.map((word, indexWord) => {
        const characters = word.split("");
        return (
          <Fragment key={word + indexWord.toString()}>
            <span className={"word inline-block"}>
              {characters.map((character, indexCharacter) => (
                <span
                  key={character + indexCharacter.toString()}
                  ref={(node) => {
                    if (refs.current) {
                      refs.current.push(node);
                    }
                  }}
                  /*className="inline-block origin-bottom  scale-y-0 opacity-0 translate-y-16"*/
                  className="character inline-block origin-bottom  scale-y-0 opacity-0"
                >
                  {character}
                </span>
              ))}
            </span>
            {indexWord !== words.length - 1 ? " " : ""}
          </Fragment>
        );
      })}
    </TextTagProvider>
  );
};

export default TextSplitter;
