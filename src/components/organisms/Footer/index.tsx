import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <footer className="relative h-72">
			<div className='max-w-6xl h-[calc(100%-4rem)] mx-auto bg-white py-4'>
				<div>
					<h3>Quick Links</h3>
					<ul>
						<li>Home</li>
						<li>Services</li>
						<li>Portfolio</li>
						<li>Blog</li>
						<li>Contact</li>
					</ul>
				</div>
			</div>
			<div className='h-16 bg-black text-white flex items-center justify-center text-sm'>
				Copyright 2021. All Rights Reserved
			</div>
		</footer>
  )
}

export default Footer