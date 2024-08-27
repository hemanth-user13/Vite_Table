import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BankDataTable from './BankDataTable';
import BankSummary from './BankSummary';

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8001/bankstatment');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const BankDataPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <div className="container mx-auto">
      <BankDataTable data={data} />
      <BankSummary data={data} />
    </div>
  );
};

export default BankDataPage;
