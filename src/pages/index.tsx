import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import { Inter } from 'next/font/google';

import fetchVagas from '@/utils/fetchVagas';
import vaga from '@/types/vaga';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [vagas, setVagas] = useState<vaga[]>([]);
    const [show, setShow] = useState(false);
    const [isSelected, setIsSelected] = useState(0);

    useEffect(() => {
        fetchVagas().then((vagas) => setVagas(vagas));
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
          <main>
              <h1>Proletário</h1>

              <p>Procurando vagas de emprego?</p>
              <p>Procurando profissionais para sua empresa?</p>

              <p>Proletário é a plataforma da classe trabalhadora.</p>

              <div>
                  <h2>Vagas</h2>
                  <ul>
                      {vagas.map((vaga) => (
                          <div key={vaga.id}>
                              <li onClick={() => handleClick(vaga.id)}>
                                  <h3>{vaga.title}</h3>
                                  {vaga.labels.map((label) => (
                                      <span
                                          style={{
                                              borderColor: `#${label.color}`,
                                              borderWidth: "1px",
                                              borderStyle: "solid",
                                              borderRadius: "5px",
                                              padding: "5px",
                                              margin: "5px",
                                          }}
                                          key={label.id}
                                      >
                                          {label.name}
                                      </span>
                                  ))}
                              </li>
                              <div className={`${show && isSelected === vaga.id ? 'block' : 'hidden'} bg-white w-screen min-h-screen z-10`}>
                                <h2>{vaga.title}</h2>
                                <p>{vaga.body}</p>
                              </div>
                          </div>
                      ))}
                  </ul>
              </div>
          </main>

          <style jsx>{`
              main {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  padding: 5rem 0;
                  flex: 1;
                  text-align: center;
              }
          `}</style>
      </>
  );
}
