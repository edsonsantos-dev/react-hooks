import React from "react";

function App() {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState("");
  const inputElement = React.useRef();

  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  }

  return (
    <>
      <input
        type="text"
        ref={inputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <button style={{ margin: "1rem 0" }} onClick={handleClick}>
        Enviar
      </button>

      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
