import Link from "next/link";
import React from "react";

function Navbar() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY === 0) {
    navbar.classList.remove("bg-opacity-50");
    navbar.classList.add("bg-white");
  } else {
    navbar.classList.remove("bg-white");
    navbar.classList.add("bg-opacity-50");
  }

  return (
    <div className="inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 border-b border-zinc-800  px-4 transition sm:px-6 backdrop-blur  bg-black">
      <nav className="hidden md:block">
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
