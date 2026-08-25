export default function BotaoPrimario({
  children,
  onClick,
  disabled
}) {
  return (
    <button
      className="botao botao-primario"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}