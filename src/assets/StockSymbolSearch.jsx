import React from "react";
import "./StockSymbolSearch.css";

const StockSymbolSearch = ({ click }) => {
  return (
    <div className="card">
      <div className="header">
        <h2 className="title">Symbol Search</h2>
        <button className="close-button" onClick={click}>
          &times;
        </button>
      </div>
      <div className="search-wrapper">
        <input type="text" placeholder="Search" className="search-input" />
        <span className="search-icon"></span>
      </div>
      <div className="button-wrapper">
        
        <button className="button primary">All</button>
        <button className="button secondary">Stocks</button>
        <button className="button secondary">Funds</button>
        <button className="button secondary">Futures</button>
        <button className="button secondary">Forex</button>
        <button className="button secondary">Crypto</button>
        <button className="button secondary">Indices</button>
        <button className="button secondary">Bonds</button>
        <button className="button secondary">Economy</button>
        <button className="button secondary">Options</button>
      </div>
      <div className="symbol-list">
        <ul className="symbol-items">
          <li className="symbol-item">
            <div className="symbol-info">
              <img
                src="https://placehold.co/24x24"
                alt="BTCUSD icon"
                className="symbol-icon"
              />
              <div>
                <div className="symbol-name">BTCUSD</div>
                <div className="symbol-description">BITCOIN / U.S. DOLLAR</div>
              </div>
            </div>
            <div className="symbol-source">spot crypto BITSTAMP</div>
          </li>
          <li className="symbol-item">
            <div className="symbol-info">
              <img
                src="https://placehold.co/24x24"
                alt="PEPEUSDT icon"
                className="symbol-icon"
              />
              <div>
                <div className="symbol-name">PEPEUSDT</div>
                <div className="symbol-description">PEPE / TETHERUS</div>
              </div>
            </div>
            <div className="symbol-source">spot crypto BYBIT</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StockSymbolSearch;
