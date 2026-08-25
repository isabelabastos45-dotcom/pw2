import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import CampoTexto from '../components/CampoTexto';
import CampoNumero from '../components/CampoNumero';
import BotaoPrimario from '../components/BotaoPrimario';
import BotaoRelatorio from '../components/BotaoRelatorio';

export default function Calculadora() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [erro, setErro] = useState('');

  useEffect(() => {
    const dadosSalvos = sessionStorage.getItem('dadosIMC');

    if (dadosSalvos) {
      const dados = JSON.parse(dadosSalvos);

      setNome(dados.nome || '');
      setPeso(dados.peso || '');
      setAltura(dados.altura || '');
      setImc(dados.imc ?? null);
    }
  }, []);

  function calcularIMC() {
    setErro('');

    const pesoNumero = Number(peso);
    const alturaNumero = Number(altura);

    if (!nome.trim()) {
      setErro('Digite seu nome.');
      return;
    }

    if (!pesoNumero || pesoNumero <= 0) {
      setErro('Digite um peso válido.');
      return;
    }

    if (!alturaNumero || alturaNumero <= 0) {
      setErro('Digite uma altura válida.');
      return;
    }

    const resultado =
      pesoNumero / (alturaNumero * alturaNumero);

    const resultadoFormatado = Number(
      resultado.toFixed(2)
    );

    setImc(resultadoFormatado);

    const dados = {
      nome,
      peso,
      altura,
      imc: resultadoFormatado
    };

    sessionStorage.setItem(
      'dadosIMC',
      JSON.stringify(dados)
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

        <h1>Calculadora de IMC</h1>

        <CampoTexto
          label="Nome"
          value={nome}
          onChange={setNome}
          placeholder="Digite seu nome"
        />

        <CampoNumero
          label="Peso (kg)"
          value={peso}
          onChange={setPeso}
          placeholder="Ex.: 80"
        />

        <CampoNumero
          label="Altura (m)"
          value={altura}
          onChange={setAltura}
          placeholder="Ex.: 1.80"
        />

        {erro && (
          <p className="erro">
            {erro}
          </p>
        )}

        <BotaoPrimario onClick={calcularIMC}>
          Calcular IMC
        </BotaoPrimario>

        {imc !== null && (
          <div className="resultado">
            <span>Seu IMC</span>

            <strong>{imc}</strong>
          </div>
        )}

        <BotaoRelatorio
          onClick={visualizarRelatorio}
          disabled={imc === null}
        />
      </section>
    </main>
  );
}