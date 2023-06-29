import React from "react";
import Produtos from "./Produtos";

function App() {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal !== "null") {
      setProduto(produtoLocal);
    }
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("produto", produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <>
      <h2>Preferência: {produto}</h2>
      <button style={{ margin: "1rem" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: "1rem" }} onClick={handleClick}>
        smartphone
      </button>
      <Produtos produto={produto}/>
    </>
  );
}

export default App;
