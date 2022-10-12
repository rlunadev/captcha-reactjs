import ReactRecaptcha3 from 'react-google-recaptcha3';
import React, { useEffect, useState } from 'react';

function App() {
  const [token, setToken] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    ReactRecaptcha3.init('6LckvnEiAAAAAIdAl28I5c3MkIb0LAbkcVETjrE3').then(
      (status) => {
        console.log(status);
      }
    );
  }, []);

  const submit = () => {
    ReactRecaptcha3.getToken().then(
      (resp) => {
        console.log(resp);
        setToken(resp);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  
  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        <button onClick={submit}>Submit</button>
        <p> token</p>
        <b>{token}</b>
      </div>
    </div>
  );
}

export default App;
