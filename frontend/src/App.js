import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [nom, setnom] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [allUsers, setAllUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3001/users');
      setAllUsers(res.data);
    } catch (err) {
      setError('Erreur chargement des utilisateurs');
    }
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:3001/register', { nom, email });
      setUser(res.data);
      setError('');
      fetchUsers();
    } catch (err) {
      setError("Erreur à l'inscription : " + err.response?.data?.error);
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:3001/login', {  nom, email });
      setUser(res.data);
      setError('');
      fetchUsers();
    } catch (err) {
      setError('Erreur à la connexion : ' + err.response?.data?.error);
    }
  };

  if (user) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Bienvenue {user.nom} !</h2>
        <p>Email : {user.email}</p>
        <p>ID : {user.id}</p>

        <h3>Liste de tous les utilisateurs :</h3>
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map(u => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.nom}</td>
                <td>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Connexion / Inscription</h2>

      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={(e) => setnom(e.target.value)}
        style={{ margin: 5 }}
      /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ margin: 5 }}
      /><br />

      <button onClick={handleRegister} style={{ margin: 5 }}>S'inscrire</button>
      <button onClick={handleLogin} style={{ margin: 5 }}>Se connecter</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
