
import React from 'react';
import Link from 'next/link';

function index() {
  return (
    <div>
      <h1>Index</h1>
      <Link href="/about">
        <p>About</p>
      </Link>

    </div>
  )
}

export default index