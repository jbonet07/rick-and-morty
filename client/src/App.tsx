import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getAllCharacters } from "./services/CharacterService";
import { Home } from "./views";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Home />
    </div>
  );
}

export default App;
