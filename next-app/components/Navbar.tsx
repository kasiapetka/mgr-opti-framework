import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const router = useRouter();

  return (
    <div
      className={`navbar_container${
        router.pathname === "/" ? " navbar_hero" : ""
      }`}
    >
      <nav className="navbar">
        <div className="navbar_col">
          <Link href="/" passHref>
            <Image
              src="/assets/logo.png"
              alt="navbarlogo"
              height={50}
              width={50}
            />
          </Link>
          <Link href="/movies">Movies</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
