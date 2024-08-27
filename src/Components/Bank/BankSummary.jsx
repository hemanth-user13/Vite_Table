import React from 'react';

// Convert Excel serial date to JavaScript Date
const convertExcelDate = (serial) => {
  const epoch = new Date(Date.UTC(1899, 11, 30)); // Excel starts counting from Dec 30, 1899
  const date = new Date(epoch.getTime() + serial * 86400000); // 86400000 ms in a day
  return date;
};

// Calculate total debit for given days
const calculateDebitTotals = (data) => {
  const now = new Date();

  const dateDiff = (dateStr) => {
    const date = convertExcelDate(dateStr);
    return Math.floor((now - date) / (1000 * 60 * 60 * 24));
  };

  const totalDebit = (days) => {
    return data
      .filter(row => {
        const daysAgo = dateDiff(row['Txn Date']);
        return daysAgo <= days;
      })
      .reduce((total, row) => total + (parseFloat(row['        Debit']) || 0), 0);
  };

  return {
    '5 days': totalDebit(5),
    '10 days': totalDebit(10),
    '15 days': totalDebit(15),
    '20 days': totalDebit(20),
    '25 days': totalDebit(25),
    '30 days': totalDebit(30),
  };
};

// Calculate balance after given days
const calculateBalanceAfterDays = (data, days) => {
  const now = new Date();

  const dateDiff = (dateStr) => {
    const date = convertExcelDate(dateStr);
    return Math.floor((now - date) / (1000 * 60 * 60 * 24));
  };

  const filteredData = data
    .filter(row => {
      const daysAgo = dateDiff(row['Txn Date']);
      return daysAgo <= days;
    });

  if (filteredData.length === 0) return 0;

  return filteredData[filteredData.length - 1]['Balance'];
};

const BankSummary = ({ data }) => {
  const debitTotals = calculateDebitTotals(data);
  const currentBalance = data.length > 0 ? data[data.length - 1]['Balance'] : 0;

  const balanceAfter5Days = calculateBalanceAfterDays(data, 5);
  const balanceAfter10Days = calculateBalanceAfterDays(data, 10);
  const balanceAfter15Days = calculateBalanceAfterDays(data, 15);
  const balanceAfter20Days = calculateBalanceAfterDays(data, 20);
  const balanceAfter25Days = calculateBalanceAfterDays(data, 25);
  const balanceAfter30Days = calculateBalanceAfterDays(data, 30);

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Debit Totals</h2>
        <ul>
          {Object.entries(debitTotals).map(([period, total]) => (
            <li key={period}>{period}: {total}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold">Balance After Days</h2>
        <ul>
          <li>After 5 days: {balanceAfter5Days}</li>
          <li>After 10 days: {balanceAfter10Days}</li>
          <li>After 15 days: {balanceAfter15Days}</li>
          <li>After 20 days: {balanceAfter20Days}</li>
          <li>After 25 days: {balanceAfter25Days}</li>
          <li>After 30 days: {balanceAfter30Days}</li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-bold">Current Balance</h2>
        <p>{currentBalance}</p>
      </div>
    </div>
  );
};

export default BankSummary;
