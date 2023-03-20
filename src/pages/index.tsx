import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import { Inter } from 'next/font/google';

import fetchVagas from '@/utils/fetchVagas';
import vaga from '@/types/vaga';

import Hero from '@/components/organisms/Hero';
import Footer from '@/components/organisms/Footer';
import Categories from '@/components/molecules/Categories';
import Vagas from '@/components/organisms/Vagas';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [vagas, setVagas] = useState<vaga[]>([]);
		const [recent, setRecent] = useState<vaga[]>([]);
    const [show, setShow] = useState(false);
    const [isSelected, setIsSelected] = useState(0);

    useEffect(() => {
        fetchVagas().then((vagas) => setVagas(vagas));
				const four = vagas.slice(0, 4);
				setRecent(four);
    }, []);

    const vagasOrdenadas = vagas.sort((a, b) => {
        if (a.created_at > b.created_at) {
            return -1;
        }
        if (a.created_at < b.created_at) {
            return 1;
        }
        return 0;
    });

    const handleClick = (id: React.SetStateAction<number>) => {
        setShow(true);
        setIsSelected(id);
    };

  return (
      <>
          <Head>
              <title>Proletário</title>
              <meta
                  name="description"
                  content="A plataforma da classe trabalhadora"
              />
              <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/favicon.ico" />
          </Head>
        <Hero />
        <Categories />
        <Vagas vagas={recent}/>
        <Footer />
      </>
  );
}
