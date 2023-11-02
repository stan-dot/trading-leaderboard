import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <Link href={"/"}>Home</Link>
      </nav>
    </div>
  );
}

export default Navbar;
