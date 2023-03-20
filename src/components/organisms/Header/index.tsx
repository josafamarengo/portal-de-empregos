import Link from 'next/link';
import React from 'react'

function index() {
  return (
      <header
          className="
        w-full h-14 xl:h-28 border-b border-[#6382b3] text-white
         bg-gradient-to-r from-[#446391] to-[#537dbb]
        "
      >
          <div className="max-w-6xl h-full mx-auto flex items-center justify-center xl:justify-between">
						<Link href="/">
              <h1 className="text-4xl">Header</h1>
						</Link>
          </div>
      </header>
  );
}

export default index