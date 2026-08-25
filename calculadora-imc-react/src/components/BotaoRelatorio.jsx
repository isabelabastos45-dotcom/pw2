import BotaoPrimario from './BotaoPrimario';

export default function BotaoRelatorio({
  onClick,
  disabled
}) {
  return (
    <BotaoPrimario
      onClick={onClick}
      disabled={disabled}
    >
      Visualizar relatório
    </BotaoPrimario>
  );
}