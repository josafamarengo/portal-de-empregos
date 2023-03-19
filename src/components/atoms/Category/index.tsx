import Link from 'next/link';
import React from 'react';

interface CategoryProps {
    children: React.ReactNode;
		slug: string;
}

function Category({ children, slug }: CategoryProps) {
  return (
		<Link href={`/vagas/${slug}`}>
      <li className="border border-blue-600 w-full aspect-square flex flex-col justify-center items-center hover:bg-blue-600 hover:text-white transition-colors ease-in-out duration-500">
          {children}
      </li>
		</Link>
  );
}

export default Category