import React from "react";

function App() {
  const [ativo, setAtivo] = React.useState(true);

  return (
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? "Ativo" : "Inativo"}
    </button>
  );
}

export default App;
