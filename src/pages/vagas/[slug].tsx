import React,{useState, useEffect} from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import fetchVagas from '@/utils/fetchVagas';
import Vaga from '@/types/vaga';

function VagasFiltradas() {
	const[vagas, setVagas] = useState([] as Vaga[]);
	const router = useRouter();
	const { slug } = router.query;

	useEffect(() => {
		fetchVagas(slug).then((vagas) => setVagas(vagas));
	}, [slug])

	return (
		<div>
			{vagas.map((vaga) => (
				<div key={vaga.id}>
					<h3>{vaga.title}</h3>
					<ul>
						{vaga.labels.map((label) => (
							<li key={label.id}>{label.name}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}

export default VagasFiltradas