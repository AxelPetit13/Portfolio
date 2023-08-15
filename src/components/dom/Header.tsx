"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [clicked, setClicked] = useState("");

  return (
    <div className="flex justify-between p-4 w-full sm:px-24">
      <i className="w-1/3">LOGO</i>

      <span className="w-1/3 text-center uppercase font-light">
        <Link href="/" onClick={() => setClicked("/")}>
          Axel Petit{" "}
        </Link>
      </span>

      <nav className="w-1/3">
        <ul className="flex justify-end gap-4">
          <li className="font-light nav-item">
            {clicked === "projects" ? (
              <Link
                href="/"
                onClick={() => setClicked("projects")}
                className="font-bold"
              >
                Projects
              </Link>
            ) : (
              <Link href="/" onClick={() => setClicked("projects")}>
                Projects
              </Link>
            )}
          </li>
          <li className="font-light  nav-item">
            {clicked === "about" ? (
              <Link
                href="/about"
                onClick={() => setClicked("about")}
                className="font-bold"
              >
                About
              </Link>
            ) : (
              <Link href="/about" onClick={() => setClicked("about")}>
                About
              </Link>
            )}
          </li>
          <li className="font-light  nav-item">
            {clicked === "contacts" ? (
              <Link
                href="/contacts"
                onClick={() => setClicked("contacts")}
                className="font-bold"
              >
                Contacts
              </Link>
            ) : (
              <Link href="/contacts" onClick={() => setClicked("contacts")}>
                Contacts
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
