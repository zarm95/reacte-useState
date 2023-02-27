import React from 'react';
import React, { useState } from 'react';

export default function SignupForm() {
  const [Name, setName] = useState('name');
  const [email, setEmail] = useState('email');
  const display = (e) => {
    e.preventDefault();
    console.log(Name + ' ' + email);
  };

  return (
    <form>
      <label htmlFor="name">
        Name :
        <input
          value={Name}
          type="text"
          name="name"
          id="name"
          placeholder="Mary"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="email">
        Email :
        <input
          value={email}
          type="email"
          name="email"
          id="email"
          placeholder="mary.poppins@disney.fr"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <br />
      <button type="submit" onClick={display}>
        Submit
      </button>
    </form>
  );
}
