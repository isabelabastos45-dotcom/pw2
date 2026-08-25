import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import CampoTexto from '../components/CampoTexto';
import CampoNota from '../components/CampoNota';
import BotaoPrimario from '../components/BotaoPrimario';
import BotaoRelatorio from '../components/BotaoRelatorio';

export default function Calculadora() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [media, setMedia] = useState(null);
  const [situacao, setSituacao] = useState('');

  useEffect(() => {
    const dadosSalvos =
      sessionStorage.getItem('dadosNotas');

    if (dadosSalvos) {
      const dados = JSON.parse(dadosSalvos);

      setNome(dados.nome ?? '');
      setNota1(dados.nota1 ?? '');
      setNota2(dados.nota2 ?? '');
      setNota3(dados.nota3 ?? '');
      setMedia(dados.media ?? null);
      setSituacao(dados.situacao ?? '');
    }
  }, []);

  function calcularMedia() {
    const n1 = Number(nota1);
    const n2 = Number(nota2);
    const n3 = Number(nota3);

    if (
      nota1 === '' ||
      nota2 === '' ||
      nota3 === ''
    ) {
      alert('Preencha todas as notas.');
      return;
    }

    const resultado =
      (n1 + n2 + n3) / 3;

    const resultadoFormatado =
      Number(resultado.toFixed(2));

    let novaSituacao = '';

    if (resultadoFormatado >= 7) {
      novaSituacao = 'Aprovado';
    } else if (resultadoFormatado >= 5) {
      novaSituacao = 'Recuperação';
    } else {
      novaSituacao = 'Reprovado';
    }

    setMedia(resultadoFormatado);
    setSituacao(novaSituacao);

    sessionStorage.setItem(
      'dadosNotas',
      JSON.stringify({
        nome,
        nota1,
        nota2,
        nota3,
        media: resultadoFormatado,
        situacao: novaSituacao
      })
    );
  }

  function visualizarRelatorio() {
    navigate('/relatorio');
  }

  return (
    <main className="pagina">
      <section className="card">

        <p className="subtitulo">
          Aplicação React
        </p>

        <h1>Calculadora de Média</h1>

        <CampoTexto
          label="Nome do aluno"
          value={nome}
          onChange={setNome}
          placeholder="Digite o nome"
        />

        <CampoNota
          label="Nota 1"
          value={nota1}
          onChange={setNota1}
          placeholder="Ex.: 8.5"
        />

        <CampoNota
          label="Nota 2"
          value={nota2}
          onChange={setNota2}
          placeholder="Ex.: 7.0"
        />

        <CampoNota
          label="Nota 3"
          value={nota3}
          onChange={setNota3}
          placeholder="Ex.: 9.0"
        />

        <BotaoPrimario
          onClick={calcularMedia}
        >
          Calcular média
        </BotaoPrimario>

        {media !== null && (
          <div className="resultado">
            <span>Sua média</span>

            <strong>{media}</strong>

            <p>{situacao}</p>
          </div>
        )}

        <BotaoRelatorio
          onClick={visualizarRelatorio}
          disabled={media === null}
        />

      </section>
    </main>
  );
}