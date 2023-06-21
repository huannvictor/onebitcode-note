"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";
import LogoImage from "../../assets/images/logo.svg";

function Header() {
  return (
    <Navbar className="flex flex-row justify-between">
      <Navbar.Brand className="flex flex-row justify-between gap-2">
        <Image alt="NerdBox Logo" src={LogoImage} className="h-auto w-8" />
        <h1>NerdBox Note</h1>
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">
          <p>About</p>
        </Navbar.Link>
        <Navbar.Link href="#">
          <p>Contact</p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
