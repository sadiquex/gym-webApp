"use client";

import { useState, useEffect } from "react";
import gymLogo from "/public/assets/gym-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
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
  }, []); // Run only once when the component mounts

  return (
    <div
      className={`flex bg-black text-white items-center justify-between py-4 px-12 sticky top-0 left-0 right-0 w-full z-50 transition-all duration-200 ${
        sticky ? "bg-[rgba(0,0,0,0.2)] text-white" : ""
      }`}
    >
      <Image
        src={gymLogo}
        alt="logo"
        priority
        width={100}
        height={100}
        sizes="100vw"
      />
      <ul className="flex gap-2">
        <li>
          <Link
            className={`link ${
              pathname === "/" ? "text-primaryColor font-semibold" : ""
            }`}
            href="/"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            className={`link ${
              pathname === "/about" ? "text-primaryColor font-semibold" : ""
            }`}
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              pathname === "/gallery" ? "text-primaryColor font-semibold" : ""
            }`}
            href="/gallery"
          >
            Gallery
          </Link>
        </li>
      </ul>
      <div>Right side</div>
    </div>
  );
}
