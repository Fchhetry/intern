import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function NameSaver() {
  const [name, setName] = useLocalStorage('username', '');

  return (
    <div>
      <h3>Save Name to LocalStorage</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Stored Name: {name}</p>
    </div>
  );
}
