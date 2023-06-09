import React,{useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import fetchVagas from '@/utils/fetchVagas';

import * as VagaComponent from '@/components/atoms/Vaga';
import Vaga from '@/types/vaga';

function VagasFiltradas() {
	const[vagas, setVagas] = useState([] as Vaga[]);
	const router = useRouter();
	const { slug } = router.query;

	useEffect(() => {
		fetchVagas(slug).then((vagas) => setVagas(vagas));
	}, [slug])

	return (
		<div className="w-full space-y-2 px-2 lg:px-0">
			{vagas.map((vaga) => (
				<VagaComponent.default
					key={vaga.title}
					title={vaga.title}
					body={vaga.body}
					date={vaga.created_at}
					labels={vaga.labels}
				/>
			))}
		</div>
	);
}

export default VagasFiltradas