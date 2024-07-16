import React, { useState } from "react";
import "./SettingsForm.css";
import Alert from "./Alert";

const SettingsForm = () => {
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(550);
  const [useContainerSize, setUseContainerSize] = useState(false);
  const [colorTheme, setColorTheme] = useState("Dark");
  const [transparentBackground, setTransparentBackground] = useState(false);
  const [displayMode, setDisplayMode] = useState("Regular");
  const [locale, setLocale] = useState("English");
  const [chartUrl, setChartUrl] = useState(
    "https://www.tradingview.com/chart/"
  );

  const handleReset = () => {
    setWidth(400);
    setHeight(550);
    setUseContainerSize(false);
    setColorTheme("Dark");
    setTransparentBackground(false);
    setDisplayMode("Regular");
    setLocale("English");
    setChartUrl("https://www.tradingview.com/chart/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      width,
      height,
      useContainerSize,
      colorTheme,
      transparentBackground,
      displayMode,
      locale,
      chartUrl,
    });
  };

  return (
    <div className="settings-container">
      <h2 className="settings-header">Settings</h2>
      <form onSubmit={handleSubmit} className="settings-form">
        <div className="form-group">
          <label htmlFor="width" className="form-label">
            Size
          </label>
          <input
            id="width"
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="form-input"
          />
          <span className="size-separator">x</span>
          <input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="form-input"
          />
       
        </div>
        <div className="form-group">
          <label htmlFor="symbol" className="form-label">
            Symbol
          </label>
          <button
            id="symbol"
            type="button"
            className="form-button"
            onClick={() => console.log("Open Symbol Search")}
          >
            <Alert />
            <img
              aria-hidden="true"
              alt="edit-icon"
              src="https://openui.fly.dev/openui/24x24.svg?text=✏️"
            />
          </button>
        </div>
        <div className="form-group">
          <label htmlFor="color-theme" className="form-label">
            Color Theme
          </label>
          <select
            id="color-theme"
            value={colorTheme}
            onChange={(e) => setColorTheme(e.target.value)}
            className="form-select"
          >
            <option>Dark</option>
            <option>Light</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="transparent-background" className="form-label">
            Transparent background
          </label>
          <input
            id="transparent-background"
            type="checkbox"
            checked={transparentBackground}
            onChange={(e) => setTransparentBackground(e.target.checked)}
            className="checkbox-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="display-mode" className="form-label">
            Display mode
          </label>
          <select
            id="display-mode"
            value={displayMode}
            onChange={(e) => setDisplayMode(e.target.value)}
            className="form-select"
          >
            <option>Regular</option>
            <option>Compact</option>
          </select>
          <img
            aria-hidden="true"
            alt="info-icon"
            src="https://openui.fly.dev/openui/24x24.svg?text=?"
            className="info-icon"
          />
        </div>
        <div className="form-group">
          <label htmlFor="locale" className="form-label">
            Locale
          </label>
          <select
            id="locale"
            value={locale}
            onChange={(e) => setLocale(e.target.value)}
            className="form-select"
          >
            <option>English</option>
            <option>Spanish</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="chart-url" className="form-label">
            Full-size chart url
          </label>
          <input
            id="chart-url"
            type="url"
            value={chartUrl}
            onChange={(e) => setChartUrl(e.target.value)}
            className="form-input full-width"
          />
          <img
            aria-hidden="true"
            alt="info-icon"
            src="https://openui.fly.dev/openui/24x24.svg?text=?"
            className="info-icon"
          />
        </div>
        <div className="button-group">
          <button
            type="button"
            className="action-button"
            onClick={() => navigator.clipboard.writeText("Your code here")}
          >
            Copy code
          </button>
          <button
            type="button"
            className="action-button reset-button"
            onClick={handleReset}
          >
            Reset
          </button>
          <button type="submit" className="action-button apply-button">
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsForm;
