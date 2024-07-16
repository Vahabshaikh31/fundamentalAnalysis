import React, { useState } from "react";
import axios from "axios";

const StockListPopup = ({ apiKey }) => {
  const [stocks, setStocks] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);

  const fetchStockNames = async () => {
    try {
      const response = await axios.get(
        `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=${apiKey}`
      );

      const stockData = response.data;
      if (stockData && stockData.results) {
        const stockSymbols = stockData.results.map((stock) => stock.T);
        setStocks(stockSymbols);
        setPopupVisible(true);
      } else {
        console.error("Invalid data format from API");
      }
    } catch (error) {
      console.error("Error fetching stock names:", error);
      // Handle error state here
    }
  };

  return (
    <div>
      <button onClick={fetchStockNames}>Show Stock Names</button>
      
      {popupVisible && (
        <div className="stock-popup">
          <h3>All Stock Names</h3>
          {/* <ul>
            {stocks.map((stock, index) => (
            //   <li key={index}>{stock}</li>
            ))}
          </ul> */}
        </div>
      )}
    </div>
  );
};

export default StockListPopup;
