import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <nav style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ padding: 2, margin: 10 }}>
          <Link href={"/"}>Home</Link>
        </div>
        <div
          style={{ padding: 2, margin: 10 }}
        >
          <Link href={"/traders"}>
            traders
          </Link>
        </div>
        <div style={{ padding: 2, margin: 10 }}>
          <Link href={"/markets"}>
            markets
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
