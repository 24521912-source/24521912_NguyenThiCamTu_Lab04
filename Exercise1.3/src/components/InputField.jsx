
export default function InputField({
  value,
  error,
  onValueChange,
}) {
  function handleChange(event) {
    onValueChange(event.target.value);
  }

  console.log('[Render] InputField');

  return (
    <div className="input-group">
      <label htmlFor="email-input">
        Email address
      </label>

      <input
        id="email-input"
        type="email"
        value={value}
        onChange={handleChange}
        placeholder="Enter your email"
        autoComplete="email"
      />

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}
    </div>
  );
}
