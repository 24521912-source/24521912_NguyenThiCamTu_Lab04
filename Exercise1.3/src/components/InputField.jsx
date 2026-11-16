
import { useId } from 'react';

export default function InputField({
  value,
  error,
  onValueChange,
}) {
  const generatedId = useId();

  const inputId = `${generatedId}-input`;
  const errorId = `${generatedId}-error`;
  const hasError = Boolean(error);

  function handleChange(event) {
    onValueChange(event.target.value);
  }

  console.log('[Render] InputField');

  return (
    <div className="input-group">
      <label htmlFor={inputId}>
        Email address
      </label>

      <input
        id={inputId}
        type="email"
        value={value}
        onChange={handleChange}
        placeholder="Enter your email"
        autoComplete="email"
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId : undefined}
      />

      {hasError && (
        <p
          id={errorId}
          className="error-message"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
