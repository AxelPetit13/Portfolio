import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between p-4 w-full sm:px-24">
      <i className="w-1/3">LOGO</i>

      <span className="w-1/3 text-center uppercase font-light">
        <Link href="/">Axel Petit </Link>
      </span>

      <nav className="w-1/3">
        <ul className="flex justify-end gap-4">
          <li className="font-light">
            <Link href="/">Projects</Link>
          </li>
          <li className="font-light">
            <Link href="/about">About</Link>
          </li>
          <li className="font-light">
            <Link href="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
