import React from "react";
import style from "./css/telaPosLogin.css"
export default () => {

  return (
    <div className="App">
      <h1>Ultimas aulas postadas</h1>

      {/*Subtitulo*/}
      <div style={style.subtitulo} className="subtitulo">
        <p>Matemática</p>
        <p>Português</p>
        <p>Ciências da Humanas </p>
        <p>Ciências da Natureza</p>
      </div>



    </div>
  );
};