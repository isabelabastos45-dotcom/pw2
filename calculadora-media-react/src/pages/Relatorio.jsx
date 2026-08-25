import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export default function Relatorio() {
  const navigate = useNavigate();

  const [dados, setDados] = useState(null);

  useEffect(() => {
    const dadosSalvos =
      sessionStorage.getItem('dadosNotas');

    if (dadosSalvos) {
      setDados(JSON.parse(dadosSalvos));
    }
  }, []);

  if (!dados) {
    return (
      <main className="pagina">
        <section className="card">

          <h1>Relatório</h1>

          <p>
            Nenhuma nota foi calculada.
          </p>

          <button
            className="botao botao-primario"
            onClick={() => navigate('/')}
          >
            Voltar
          </button>

        </section>
      </main>
    );
  }

  return (
    <main className="pagina">
      <section className="relatorio">

        <p className="subtitulo">
          Relatório escolar
        </p>

        <h1>Resultado Final</h1>

        <div className="dados">

          <div>
            <span>Aluno</span>

            <strong>
              {dados.nome || 'Não informado'}
            </strong>
          </div>

          <div>
            <span>Nota 1</span>

            <strong>
              {dados.nota1}
            </strong>
          </div>

          <div>
            <span>Nota 2</span>

            <strong>
              {dados.nota2}
            </strong>
          </div>

          <div>
            <span>Nota 3</span>

            <strong>
              {dados.nota3}
            </strong>
          </div>

          <div>
            <span>Média</span>

            <strong>
              {dados.media}
            </strong>
          </div>

          <div>
            <span>Situação</span>

            <strong>
              {dados.situacao}
            </strong>
          </div>

        </div>

        <button
          className="botao botao-secundario"
          onClick={() => navigate('/')}
        >
          Voltar
        </button>

      </section>
    </main>
  );
}