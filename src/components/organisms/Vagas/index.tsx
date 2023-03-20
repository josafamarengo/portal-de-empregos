import Button from "@/components/atoms/Button";
import Vaga from "@/components/atoms/Vaga";
import Link from "next/link";
import React from "react";

interface VagaProps {
	title: string;
	body: string;
	created_at: Date;
	labels: {
		name: string;
		color: string;
	}[];
}

interface VagasProps {
	vagas: VagaProps[];
}

function Vagas({ vagas }: VagasProps) {
	return (
		<section className="bg-gray-100">
			<div className="h-screen w-full max-w-6xl mx-auto flex flex-col justify-center items-center space-y-12">
				<h2 className="text-4xl">Vagas recentes</h2>
				<ul className="w-full space-y-2 px-2 lg:px-0">
					{vagas.map((vaga) => (
						<li key={vaga.title}>
							<Vaga
								title={vaga.title}
								body={vaga.body}
								date={vaga.created_at}
								labels={vaga.labels}
							/>
						</li>
					))}
				</ul>
				<Link href="/vagas">
					<Button type="primary" size="medium">
						Ver todas as vagas
					</Button>
				</Link>
			</div>
		</section>
	);
}

export default Vagas;
