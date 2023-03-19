import React,{useState, useEffect} from 'react';

import fetchVagas from "@/utils/fetchVagas";
import vaga from "@/types/vaga";

function Vagas() {


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
                          <div
                              className={`${
                                  show && isSelected === vaga.id
                                      ? "block"
                                      : "hidden"
                              } bg-white w-screen min-h-screen z-10`}
                          >
                              <h2>{vaga.title}</h2>
                              <p>{vaga.body}</p>
                          </div>
                      </div>
                  ))}
              </ul>
          </div>
      </main>
  );
}

export default Vagas