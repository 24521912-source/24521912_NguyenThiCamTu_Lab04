
import { useEffect, useState } from 'react';

export default function InputField({ value, error, onValueChange }) {
  const [localValue, setLocalValue] = useState(value);
  const [displayError, setDisplayError] = useState(error);

  // Effect 1: Synchronize the local input value with the parent.
  useEffect(() => {
    console.log('[Effect 1] Child value -> Parent');
    onValueChange(localValue);
  }, [localValue, onValueChange]);

  // Effect 5: Synchronize the parent error with the child.
  useEffect(() => {
    console.log('[Effect 5] Parent error -> Child');
    setDisplayError(error);
  }, [error]);

  function handleChange(event) {
    setLocalValue(event.target.value);
  }

  console.log('[Render] InputField');

  return (
    <div className="input-group">
      <label htmlFor="email-input">Email address</label>

      <input
        id="email-input"
        type="email"
        value={localValue}
        onChange={handleChange}
        placeholder="Enter your email"
        autoComplete="email"
      />

      {displayError && (
        <p className="error-message">{displayError}</p>
      )}
    </div>
  );
}
