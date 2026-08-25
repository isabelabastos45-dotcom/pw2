import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export default function Relatorio() {
  const navigate = useNavigate();

  const [dados, setDados] = useState(null);

  useEffect(() => {
    const dadosSalvos =
      sessionStorage.getItem('dadosIMC');

    if (dadosSalvos) {
      setDados(JSON.parse(dadosSalvos));
    }
  }, []);

  function voltar() {
    navigate('/');
  }

  if (!dados) {
    return (
      <main className="pagina">
        <section className="card">
          <p className="subtitulo">
            Relatório
          </p>

          <h1>Nenhum cálculo</h1>

          <p className="mensagem">
            Você ainda não realizou um cálculo de IMC.
          </p>

          <button
            className="botao botao-primario"
            onClick={voltar}
          >
            Voltar para calculadora
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="pagina">
      <section className="relatorio">
        <p className="subtitulo">
          Relatório
        </p>

        <h1>Resultado do IMC</h1>

        <div className="dados">
          <div className="dado">
            <span>Nome</span>
            <strong>
              {dados.nome || 'Não informado'}
            </strong>
          </div>

          <div className="dado">
            <span>Peso</span>
            <strong>
              {dados.peso} kg
            </strong>
          </div>

          <div className="dado">
            <span>Altura</span>
            <strong>
              {dados.altura} m
            </strong>
          </div>

          <div className="dado">
            <span>IMC</span>
            <strong>
              {dados.imc}
            </strong>
          </div>
        </div>

        <button
          className="botao botao-secundario"
          onClick={voltar}
        >
          Voltar
        </button>
      </section>
    </main>
  );
}