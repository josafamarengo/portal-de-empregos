import Button from "@/components/atoms/Button";
import Vaga from "@/components/atoms/Vaga";
import React from "react";

function Vagas() {
	return (
		<section className="bg-gray-100">
			<div className="h-screen w-full max-w-6xl mx-auto flex flex-col justify-center items-center">
				<h2 className="mb-8 text-4xl">Vagas recentes</h2>
				<ul className="w-full space-y-2 px-2 lg:px-0">
					<Vaga />
					<Vaga />
					<Vaga />
					<Vaga />
					<Vaga />
				</ul>
				<Button />
			</div>
		</section>
	);
}

export default Vagas;
