
import { useState } from 'react';
import InputField from './InputField.jsx';
import { validateForm } from '../utils/validation.js';

export default function SimpleForm() {
  const [email, setEmail] = useState('');

  const values = { email };
  const errors = validateForm(values);
  const isValid = Object.keys(errors).length === 0;

  function handleSubmit(event) {
    event.preventDefault();

    if (!isValid) {
      return;
    }

    console.log('[Submit] Valid email:', email);
  }

  console.log('[Render] SimpleForm');

  return (
    <form onSubmit={handleSubmit} noValidate>
      <InputField
        value={email}
        error={errors.email}
        onValueChange={setEmail}
      />

      <div className="form-status">
        <span>Form status:</span>

        <strong>
          {isValid ? 'Valid' : 'Invalid'}
        </strong>
      </div>

      <button
        type="submit"
        disabled={!isValid}
      >
        Submit
      </button>
    </form>
  );
}
