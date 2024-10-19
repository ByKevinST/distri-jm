import React from 'react';
import { useFirebaseApp } from 'reactfire';

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase); // Puedes usar la consola para verificar que Firebase se está inicializando correctamente

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a tu App de React con Firebase</h1>
      </header>
    </div>
  );
}

export default App;
