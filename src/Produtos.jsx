import React from "react";

const Produtos = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
    }
  }, [produto]);

  if (dados === null) return null;

  function handleClick() {
    window.localStorage.removeItem("produto", produto);
    setDados(null);
  }

  return (
    <div>
      <button
        style={{ margin: "1rem", backgroundColor: "red", color: "white" }}
        onClick={handleClick}
      >
        Excluir
      </button>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  );
};

export default Produtos;
