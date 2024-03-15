import React from "react";
import Header from "../Header/Header";
import Slider from "./Cards/Slider";

export default () => {
    // Aqui você pode definir os dados para seus cards
  const cards = [
    { title: 'Card 14', description: 'Descrição do Card 1' },
    { title: 'Card 2', description: 'Descrição do Card 2' },
    { title: 'Card 3', description: 'Descrição do Card 3' },
    // Adicione mais cards conforme necessário
  ];

  return (
    <div className="App">
      <h1>Meu Slider de Cards</h1>
      <Slider cards={cards} />
    </div>
  );
};