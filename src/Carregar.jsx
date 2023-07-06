import React from "react";
import { GlobalContext } from "./GlobalContext";

const Carregar = () => {
  const { carregarDados } = React.useContext(GlobalContext);

  return <button onClick={carregarDados}>Carregar</button>;
};

export default Carregar;
