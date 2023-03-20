import Link from 'next/link';
import React from 'react';

interface CategoryProps {
    children: React.ReactNode;
		slug: string;
}

function Category({ children, slug }: CategoryProps) {
  return (
		<Link href={`/vagas/${slug}`}>
			<li className="w-[min(12rem,100%)] aspect-square flex flex-col justify-center items-center hover:bg-[#517ab7] hover:text-white transition-colors ease-in-out duration-500 rounded-xl shadow-[rgba(66,_66,_66,_0.2)_0px_2px_1px_-1px,rgba(66,_66,_66,_0.14)_0px_1px_1px_0px,_rgba(66,_66,_66,_0.12)_0px_1px_3px_0px] ">
				{children}
			</li>
		</Link>
	);
}

export default Category