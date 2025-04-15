import React, { useState } from 'react';

export default function Password() {
  const [data, setData] = useState({ name: '', email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password.length < 6) return setError('Password must be at least 6 characters');
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required /><br />
        <br />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br />
        <br />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required /><br />
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Password: {data.password}</p>
        </div>
      )}
    </div>
  );
}