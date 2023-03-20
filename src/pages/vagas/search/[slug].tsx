import React,{useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import fetchVagas from '@/utils/fetchVagas';
import Vaga from '@/types/vaga';
import * as VagaComponent from '@/components/atoms/Vaga';

function Pesquisa() {
	const [vagas, setVagas] = useState([] as Vaga[]);
	const router = useRouter();
	const { slug } = router.query;

	useEffect(() => {
		fetchVagas().then((vagas) => setVagas(vagas));
	}, [])

	const filteredVagas = vagas.filter((vaga) => {
		return vaga.title
			.toLowerCase()
			.includes((slug as string).replaceAll("-", " "));
	});

	return (
		<div className="w-full space-y-2 px-2 lg:px-0">
			{filteredVagas.map((vaga) => (
				<VagaComponent.default
					key={vaga.title}
					title={vaga.title}
					body={vaga.body}
					date={vaga.created_at}
					labels={vaga.labels}
				/>
			))}
		</div>
	)
}

export default Pesquisa