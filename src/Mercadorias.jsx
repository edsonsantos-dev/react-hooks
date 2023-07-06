import React from "react";
import { GlobalContext } from "./GlobalContext";

const Mercadorias = () => {
  const global = React.useContext(GlobalContext);

  console.log(global);
  if (global.dados === null) return null;
  return (
    <div>
      Produtos:{" "}
      {global.dados.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </div>
  );
};

export default Mercadorias;
