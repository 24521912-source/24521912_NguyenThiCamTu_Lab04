
import { useEffect, useState } from 'react';
import InputField from './InputField.jsx';

export default function SimpleForm() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState('');

  // Effect 2: Validate the email field.
  useEffect(() => {
    console.log('[Effect 2] Validate email');

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsEmailValid(valid);
  }, [email]);

  // Effect 3: Calculate form validity.
  useEffect(() => {
    console.log('[Effect 3] Calculate form validity');
    setIsFormValid(isEmailValid);
  }, [isEmailValid]);

  // Effect 4: Update the validation message.
  useEffect(() => {
    console.log('[Effect 4] Update error message');

    if (email.trim() === '') {
      setEmailError('Email is required.');
    } else if (!isEmailValid) {
      setEmailError('Please enter a valid email.');
    } else {
      setEmailError('');
    }
  }, [email, isEmailValid]);

  function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    console.log('[Submit] Valid email:', email);
  }

  console.log('[Render] SimpleForm');

  return (
    <form onSubmit={handleSubmit} noValidate>
      <InputField
        value={email}
        error={emailError}
        onValueChange={setEmail}
      />

      <div className="form-status">
        <span>Form status:</span>
        <strong>{isFormValid ? 'Valid' : 'Invalid'}</strong>
      </div>

      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
}
