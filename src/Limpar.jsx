import React from "react";
import { GlobalContext } from "./GlobalContext";

const Limpar = () => {
  const { limparDados } = React.useContext(GlobalContext);

  return (
    <button
      style={{ margin: ".5rem", backgroundColor: "red", color: "white" }}
      onClick={limparDados}
    >
      Limpar
    </button>
  );
};

export default Limpar;
