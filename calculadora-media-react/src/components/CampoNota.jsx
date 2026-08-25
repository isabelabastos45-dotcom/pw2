export default function CampoNota({
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
        min="0"
        max="10"
        step="0.1"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
      />
    </div>
  );
}