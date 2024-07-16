const FinancialData = ({ title, data }) => (
  <div>
    <h3 className="section-title">{title}</h3>
    {data.map((item, index) => (
      <p key={index} className="section-content">
        {item.label}... <span className="font-bold value">{item.value}</span>
      </p>
    ))}
  </div>
);

export default FinancialData;
