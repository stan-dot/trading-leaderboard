"use client";
import Link from "next/link";

import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollAtTop, setScrollAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Set state based on scroll position
      setScrollAtTop(window.scrollY === 0);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollAtTop;
};

function Navbar() {
  const scrollAtTop = useScrollPosition();

  return (
    <div
      className={`inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 border-b border-zinc-800  px-4 transition sm:px-6 backdrop-blur  bg-black
        ${scrollAtTop ? "bg-white" : "bg-white bg-opacity-50"}
  `}
    >
      <nav id="navbar" className="hidden md:block">
        <ul role="list" className="flex items-center gap-5">
          <li className="p-2 m-5">
            <Link
              className="fade rounded-full px-2 py-1 text-sm uppercase leading-5
         cursor-default text-white"
              href={"/"}
            >
              Home
            </Link>
          </li>
          {
            /* <div
          style={{ padding: 2, margin: 10 }}
        >
          <Link href={"/traders"}>
            traders
          </Link>
        </div> */
          }
          <li className="p-2 m-5">
            <Link href={"/markets"}>
              Markets
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
