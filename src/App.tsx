import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">Portofolio Manager</div>
      <div className="container">
        <div className="box border">
          <input value={"APPL"} />
          <input value={"100"} />

          <div>PRICE</div>

          <button>Purchase</button>
        </div>

        <div className="box border flex column">
          <p>Statistics</p>

          <div className="flex row">
            <div className="box border">P&L</div>
          </div>
        </div>

        <div className="box flex column">
          <div className="stock-entry">
            <div className="label flex column">
              <span>TICKER</span>
              <span>APPL</span>
            </div>

            <div className="label flex column">
              <span>QUANTITY</span>
              <span>100</span>
            </div>

            <div className="label flex column">
              <span>PRICE OF PURCHASE</span>
              <span>100</span>
            </div>

            <div className="label flex column">
              <span>PRICE</span>
              <span>100</span>
            </div>

            <div className="label">
              <span>ACTIONS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
