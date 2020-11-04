import React from "react";
import "./App.css";
import { Wilder } from "./components/wilder/wilder";

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          <Wilder/>
          <Wilder/>
          <Wilder/>
          <Wilder/>
          <Wilder/>
          <Wilder/>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2020 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;