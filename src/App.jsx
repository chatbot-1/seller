import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/hero/Hero";
import data from "./data.js";
import Header from "./components/header/Header";

function App() {
  const cards = data.map((item) => {
    return (
      <Hero
        img={item.img}
        name={item.name}
        year={item.year}
        people={item.people}
        fuel={item.fuel}
        speed={item.speed}
        type={item.type}
        emi={item.emi}
      />
    );
  });

  return (
    <>
      <Header />

      <div className="cards-data">
        {cards}
      </div>
    </>
  );
}

export default App;
