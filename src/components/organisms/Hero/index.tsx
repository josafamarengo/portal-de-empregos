import Image from 'next/image';
import React,{useState} from 'react';

import { MdWork } from 'react-icons/md';

import HeroImage from '@/assets/img/hiring-chair.png';
import Button from '@/components/atoms/Button';
import Link from 'next/link';

function Hero() {
	const [search, setSearch] = useState('');

	const handleChange = (e: any) => {
		setSearch(e.target.value);
	};

	const handleSearch = () => {
		const slug = search.toLowerCase().replaceAll(' ', '-');
		window.location.href = `/vagas/${slug}`;
	};

	return (
		<div className="w-screen h-[calc(100vh-3.5rem)] xl:h-[calc(100vh-19rem)]  bg-gradient-to-r from-[#446391] to-[#537dbb]">
			<div className="w-full h-full max-w-6xl mx-auto flex flex-col items-center xl:grid grid-cols-2 px-4 xl:px-0">
				<div className="h-1/2 xl:h-full text-4xl flex flex-col justify-center items-center space-y-4 xl:items-start">
					<h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-none tracking-tight text-white text-center xl:text-left">
						Existe uma vaga esperando por você
					</h2>
					<div className="flex flex-col space-y-2 space-x-0 sm:space-x-2 sm:space-y-0 sm:flex-row items-center justify-between overflow-hidden p-1 w-[min(80vw,500px)]">
						<div className="flex items-center bg-white rounded-xl">
							<span className="m-2">
								<MdWork className="w-6 text-gray-600"/>
							</span>
							<input
								className="placeholder:text-xl text-gray-600 w-4/5 focus:outline-none"
								type="text"
								placeholder="Ex: Desenvolvedor Mobile"
								value={search}
								onChange={handleChange}
								onKeyDown={(e) => {
									if (e.key === 'Enter') {
										handleSearch();
									}
								}}
							/>
						</div>
						<Button size="small" type="primary">
							Pesquisar
						</Button>
					</div>
				</div>
				<div className="h-[100%-3.5rem] sm:h-full flex flex-col justify-center items-center">
					<Image
						src={HeroImage}
						alt="Ilustração 3D de uma cadeira de escritório com uma placa escrito 'VACANT'"
						width={400}
						height={400}
						className="translate-x-10 xl:translate-x-0 w-[300px] xl:w-[400px]"
					/>
				</div>
			</div>
		</div>
	);
}

export default Hero