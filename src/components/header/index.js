"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";
import LogoImage from "../../assets/images/logo.svg";

import styles from "./Header.module.css";

const { brand, img } = styles;

function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand className={brand}>
        <Image alt="NerdBox Logo" src={LogoImage} className={img} />
        <span>NerdBox Note</span>
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
