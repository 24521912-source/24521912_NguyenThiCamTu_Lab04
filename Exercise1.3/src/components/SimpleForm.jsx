
import { useState } from 'react';
import InputField from './InputField.jsx';
import { validateForm } from '../utils/validation.js';

export default function SimpleForm() {
  const [email, setEmail] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState(null);

  const values = { email };
  const errors = validateForm(values);
  const isValid = Object.keys(errors).length === 0;

  function handleEmailChange(newEmail) {
    setEmail(newEmail);
    setSubmittedEmail(null);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!isValid) {
      return;
    }

    setSubmittedEmail(email);
    console.log('[Submit] Valid email:', email);
  }

  console.log('[Render] SimpleForm');

  return (
    <form onSubmit={handleSubmit} noValidate>
      <InputField
        value={email}
        error={errors.email}
        onValueChange={handleEmailChange}
      />

      <div className="form-status">
        <span>Form status:</span>
        <strong>
          {isValid ? 'Valid' : 'Invalid'}
        </strong>
      </div>

      <button type="submit" disabled={!isValid}>
        Submit
      </button>

      {submittedEmail !== null && (
        <p className="success-message" role="status">
          Form submitted successfully!
        </p>
      )}
    </form>
  );
}
