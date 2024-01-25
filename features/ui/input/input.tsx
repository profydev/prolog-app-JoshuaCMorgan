interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
}

export function Input({
  type,
  name,
  labelText,
  defaultValue,
  onChange,
}: InputProps) {
  return (
    <div className="rowWrapper">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="input"
        defaultValue={defaultValue || ""}
        onChange={onChange}
        required
      />
    </div>
  );
}
