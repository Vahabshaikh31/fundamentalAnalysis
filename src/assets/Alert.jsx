import React, { useState } from "react";
import "./Alert.css";
import StockSymbolSearch from "./StockSymbolSearch";

const Alert = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const showAlert = () => {
    setShowOverlay(true);
  };

  const closeAlert = () => {
    setShowOverlay(false);
  };

  return (
    <div className="main-alert">
      <div className="search-box">
        {showOverlay && (
          <div className="overlay">
            <div className="alert-box">
              <StockSymbolSearch click={closeAlert} />
            </div>
          </div>
        )}
        <button onClick={showAlert} className="submit-button">
          AAPL
        </button>
      </div>
    </div>
  );
};

export default Alert;
