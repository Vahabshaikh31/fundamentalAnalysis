import "./Homepage.css";
import FinancialData from "./FinancialData";

const financialData = {
  valuation: [
    { label: "Market Capitalization", value: "3.54 T" },
    { label: "Enterprise Value (MRQ)", value: "2.69 T" },
    { label: "Enterprise Value/EBITDA (TTM)", value: "27.56" },
    { label: "Total Shares Outstanding", value: "15.33 B" },
    { label: "Number of Employees", value: "161.00 K" },
    { label: "Number of Shareholders", value: "23.76 K" },
    { label: "Price to Earnings Ratio (TTM)", value: "35.39" },
    { label: "Price to Revenue Ratio (TTM)", value: "9.22" },
    { label: "Price to Book (FY)", value: "56.94" },
    { label: "Price to Sales (FY)", value: "9.39" },
  ],
  balanceSheet: [
    { label: "Quick Ratio (MRQ)", value: "0.99" },
    { label: "Current Ratio (MRQ)", value: "1.04" },
    { label: "Debt to Equity Ratio (MRQ)", value: "1.41" },
    { label: "Net Debt (MRQ)", value: "37.44 B" },
    { label: "Total Debt (MRQ)", value: "104.59 B" },
    { label: "Total Assets (MRQ)", value: "337.41 B" },
  ],
  operatingMetrics: [
    { label: "Return on Assets (TTM)", value: "0.30" },
    { label: "Return on Equity (TTM)", value: "1.47" },
    { label: "Return on Invested Capital (TTM)", value: "0.62" },
    { label: "Revenue per Employee (FY)", value: "2.38 M" },
  ],
  priceHistory: [
    { label: "Average Volume (10 day)", value: "58.64 M" },
    { label: "1-Year Beta", value: "1.24" },
    { label: "52 Week High", value: "233.08" },
    { label: "52 Week Low", value: "164.08" },
  ],
  dividends: [
    { label: "Dividends Paid (FY)", value: "-15.03 B" },
    { label: "Dividend Yield Forward", value: "0.43" },
    { label: "Dividends per Share (FY)", value: "0.94" },
  ],
  margins: [
    { label: "Net Margin (TTM)", value: "26.31%" },
    { label: "Gross Margin (TTM)", value: "45.59%" },
    { label: "Operating Margin (TTM)", value: "30.98%" },
    { label: "Pretax Margin (TTM)", value: "30.95%" },
  ],
  incomeStatement: [
    { label: "Basic EPS (FY)", value: "6.16" },
    { label: "Basic EPS (TTM)", value: "6.46" },
    { label: "EPS Diluted (FY)", value: "6.13" },
    { label: "Net Income (FY)", value: "97.00 B" },
    { label: "EBITDA (TTM)", value: "129.63 B" },
    { label: "Gross Profit (MRQ)", value: "42.27 B" },
    { label: "Gross Profit (FY)", value: "169.15 B" },
    { label: "Last Year Revenue (FY)", value: "383.29 B" },
    { label: "Total Revenue (FY)", value: "383.29 B" },
    { label: "Free Cash Flow (TTM)", value: "101.92 B" },
  ],
};

const Homepage = () => {
  return (
    <div className="main-div">
      <div className="text-center mb-8">
        <h1 className="main-tag">Fundamental Data Widget</h1>
        <p className="description">
          Kick the tires on the fundamentals with this deep dive into how a
          company is doing beyond simply its stock price.
        </p>
      </div>
      <div className="widget-container">
        <div className="widget-header">
          <h2 className="widget-title"> AAPL Financials</h2>
        </div>

        <div className="all-data">
          <div>
            <FinancialData title="Valuation" data={financialData.valuation} />
            <FinancialData
              title="Balance Sheet as of Mar 31, 2024"
              data={financialData.balanceSheet}
            />
            <FinancialData
              title="Operating Metrics"
              data={financialData.operatingMetrics}
            />
          </div>

          <div>
            <FinancialData
              title="Price History"
              data={financialData.priceHistory}
            />
            <FinancialData title="Dividends" data={financialData.dividends} />
            <FinancialData title="Margins" data={financialData.margins} />
            <FinancialData
              title="Income Statement"
              data={financialData.incomeStatement}
            />
          </div>
        </div>
      </div>
      <p className="track-markets">Track all markets on TradingView</p>
    </div>
  );
};

export default Homepage;
