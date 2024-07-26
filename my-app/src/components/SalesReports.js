import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const SalesReports = () => {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("cartData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setReportData([parsedData]);
    }
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Sales Reports</h1>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {reportData.flatMap((report) =>
              report.items.map((item, index) => (
                <tr key={index}>
                  <td>{report.date}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))
            )}
            <tr>
              <td colSpan="3" className="text-right">
                <strong>Total:</strong>
              </td>
              <td>
                ₹
                {reportData
                  .reduce((total, report) => total + report.total, 0)
                  .toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesReports;
