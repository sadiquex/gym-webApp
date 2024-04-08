"use client";

import { useState, useEffect } from "react";
import gymLogo from "/public/assets/gym-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa6";
import { RiArchiveDrawerLine } from "react-icons/ri";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > 10) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // run only once when the component mounts

  const navLinks = [
    {
      url: "/",
      name: "Home",
    },
    {
      url: "/about",
      name: "About",
    },
    {
      url: "/gallery",
      name: "Gallery",
    },
    {
      url: "/classes",
      name: "Classes",
    },
    {
      url: "/schedule",
      name: "Schedule",
    },
    {
      url: "/contact",
      name: "Contact",
    },
  ];

  return (
    <div
      className={`flex bg-black text-white items-center justify-between py-4 px-4 md:px-12 sticky top-0 left-0 right-0 w-full z-50 transition-all duration-200 ${
        sticky ? "bg-[rgba(0,0,0,0.2)] text-white" : ""
      }`}
    >
      {/* logo */}
      <Image
        src={gymLogo}
        alt="logo"
        priority
        width={100}
        height={100}
        sizes="100vw"
      />

      {/* navbar */}
      <ul className="hidden md:flex gap-4">
        {navLinks.map((link, i) => (
          <li key={i}>
            <Link
              className={`${
                pathname === link.url ? "text-primaryColor font-semibold" : ""
              }`}
              href={link.url}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* show on both mobile and desktop */}
      <div className="flex items-center gap-2">
        <FaRegUser size={30} />
        <RiArchiveDrawerLine size={30} />

        {/* HAMBURGER - show only on mobile */}
        <div className="visible md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu size={30} />
        </div>

        {isOpen && (
          <MobileNav navLinks={navLinks} onClose={() => setIsOpen(!isOpen)} />
        )}
      </div>
    </div>
  );
}
