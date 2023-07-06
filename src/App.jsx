import React from "react";
import { GlobalStorage } from "./GlobalContext";
import Mercadorias from "./Mercadorias";
import Limpar from "./Limpar";
import Carregar from "./Carregar";

function App() {
  return (
    <GlobalStorage>
      <Mercadorias />
      <Limpar />
      <Carregar />
    </GlobalStorage>
  );
}

export default App;
