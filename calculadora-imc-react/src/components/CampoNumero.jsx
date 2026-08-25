export default function CampoNumero({
  label,
  value,
  onChange,
  placeholder
}) {
  return (
    <div className="campo">
      <label>{label}</label>

      <input
        type="number"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        step="0.01"
      />
    </div>
  );
}