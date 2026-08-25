export default function CampoTexto({
  label,
  value,
  onChange,
  placeholder
}) {
  return (
    <div className="campo">
      <label>{label}</label>

      <input
        type="text"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
      />
    </div>
  );
}